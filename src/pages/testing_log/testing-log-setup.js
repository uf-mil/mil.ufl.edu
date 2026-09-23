import React, { useState, useMemo } from "react";
import { sessions } from "./testing-log-data";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { testing_page_vehicle_info } from "../../constants/colors_and_labels";

const allVehicleIds = Object.keys(testing_page_vehicle_info);

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function VehicleTag({ id }) {
  const m = testing_page_vehicle_info[id];
  if (!m) return null;
  return (
    <span
      className="px-1.5 py-0.5"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.48rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: m.color,
        border: `1px solid ${m.color}44`,
        background: m.color + "12",
        whiteSpace: "nowrap",
      }}
    >
      {m.label}
    </span>
  );
}

function SessionCard({ session }) {
  const [expanded, setExpanded] = useState(false);
  const primaryColor = testing_page_vehicle_info[session.vehicles[0]]?.color ?? "var(--color-accent)";
  const PREVIEW_COUNT = 3;
  const overflowCount = session.items.length - PREVIEW_COUNT;
  const visibleItems = expanded ? session.items : session.items.slice(0, PREVIEW_COUNT);

  return (
    <div
      className="flex flex-col"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderTop: `2px solid ${primaryColor}`,
      }}
    >
      {/* card header */}
      <div className="px-5 pt-4 pb-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              color: "var(--color-text)",
              lineHeight: 1.2,
            }}
          >
            {formatDate(session.date)}
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {session.vehicles.map((v) => <VehicleTag key={v} id={v} />)}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ color: primaryColor, opacity: 0.7 }}>
              <circle cx="4.5" cy="4.5" r="3.5" stroke="currentColor" strokeWidth="1" />
              <path d="M4.5 2.5v2l1.2 1.2" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
            </svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
              {session.hours}h
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ color: primaryColor, opacity: 0.7 }}>
              <path d="M4.5 1C3 1 1.5 2.2 1.5 3.8c0 2.2 3 5.2 3 5.2s3-3 3-5.2C7.5 2.2 6 1 4.5 1z" stroke="currentColor" strokeWidth="1" />
              <circle cx="4.5" cy="3.8" r="1" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--color-text-muted)", letterSpacing: "0.04em" }}>
              {session.location}
            </span>
          </div>
        </div>
      </div>

      {/* items list */}
      <div className="px-5 py-3 flex-1">
        <ul className="flex flex-col gap-1.5">
          {visibleItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <div
                className="flex-shrink-0 mt-1.5"
                style={{ width: 4, height: 4, background: primaryColor, opacity: 0.6 }}
              />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {!expanded && overflowCount > 0 && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-2 flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: primaryColor, opacity: 0.7 }}
          >
            <span>+{overflowCount} more</span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 3l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        )}
        {expanded && overflowCount > 0 && (
          <button
            onClick={() => setExpanded(false)}
            className="mt-2 flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-dim)" }}
          >
            <span>Show less</span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 5l3-3 3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        )}
      </div>

      {/* notes footer */}
      {session.notes && (
        <div
          className="px-5 py-2.5"
          style={{
            borderTop: "1px solid var(--color-border)",
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            color: "var(--color-text-dim)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {session.notes}
        </div>
      )}
    </div>
  );
}

export default function TestingLog() {
  const [search, setSearch] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const locations = useMemo(() => {
    const seen = new Set();
    const result = [];
    for (const s of sessions) {
      const loc = s.location.split("—")[0].trim();
      if (!seen.has(loc)) { seen.add(loc); result.push(loc); }
    }
    return result;
  }, []);

  const filtered = useMemo(() => {
    return sessions.filter((s) => {
      if (vehicleFilter !== "all" && !s.vehicles.includes(vehicleFilter)) return false;
      const locKey = s.location.split("—")[0].trim();
      if (locationFilter !== "all" && locKey !== locationFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !s.location.toLowerCase().includes(q) &&
          !s.items.some((it) => it.toLowerCase().includes(q)) &&
          !(s.notes ?? "").toLowerCase().includes(q) &&
          !s.date.includes(q)
        ) return false;
      }
      return true;
    });
  }, [search, vehicleFilter, locationFilter]);

  const totalHours = useMemo(() => filtered.reduce((a, s) => a + s.hours, 0), [filtered]);

  return (
    <>
    <Navbar />
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--color-background)", color: "var(--color-text)" }}
    >
      {/* ── header ──────────────────────────────────────────── */}
      <div
        className="px-8 py-8 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "0.4rem",
          }}
        >
          NaviGator AMS-SPI
        </div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              lineHeight: 1,
              color: "var(--color-text)",
            }}
          >
            Testing Log
          </h1>
          <div className="flex gap-6">
            {[
              { value: sessions.length, label: "Sessions" },
              { value: sessions.reduce((a, s) => a + s.hours, 0).toFixed(1) + "h", label: "Total Hours" },
              { value: sessions.reduce((a, s) => a + s.items.length, 0), label: "Items Tested" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-end">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-text-dim)",
                    marginTop: "0.2rem",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── filters ─────────────────────────────────────────── */}
      <div
        className="px-8 py-3 flex items-center gap-4 flex-wrap flex-shrink-0"
        style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}
      >
        {/* search */}
        <div className="flex items-center gap-2 flex-1" style={{ minWidth: 180, maxWidth: 320 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: "var(--color-text-dim)", flexShrink: 0 }}>
            <circle cx="4.5" cy="4.5" r="3" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 7l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sessions…"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              color: "var(--color-text)",
              width: "100%",
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{ color: "var(--color-text-dim)", flexShrink: 0, lineHeight: 1 }}>
              ×
            </button>
          )}
        </div>

        <div style={{ width: 1, height: 16, background: "var(--color-border)", flexShrink: 0 }} />

        {/* vehicle filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[{ id: "all", label: "All Vehicles" }, ...allVehicleIds.map((id) => ({ id, label: testing_page_vehicle_info[id].label }))].map(
            ({ id, label }) => {
              const active = vehicleFilter === id;
              const color = id === "all" ? "var(--color-text-muted)" : testing_page_vehicle_info[id]?.color;
              return (
                <button
                  key={id}
                  onClick={() => setVehicleFilter(id)}
                  className="px-2.5 py-1 transition-all duration-100"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.52rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active ? color : "var(--color-text-dim)",
                    border: `1px solid ${active ? color + "88" : "var(--color-border)"}`,
                    background: active && id !== "all" ? testing_page_vehicle_info[id].color + "12" : "transparent",
                  }}
                >
                  {label}
                </button>
              );
            }
          )}
        </div>

        <div style={{ width: 1, height: 16, background: "var(--color-border)", flexShrink: 0 }} />

        {/* location filter */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.08em",
            padding: "0.25rem 0.6rem",
            outline: "none",
          }}
        >
          <option value="all">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        {/* result count */}
        <span
          className="ml-auto"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.52rem",
            letterSpacing: "0.12em",
            color: "var(--color-text-dim)",
            whiteSpace: "nowrap",
          }}
        >
          {filtered.length} session{filtered.length !== 1 ? "s" : ""} · {totalHours.toFixed(1)}h
        </span>
      </div>

      {/* ── grid ────────────────────────────────────────────── */}
      <div className="flex-1 px-8 py-6">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 gap-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.3 }}>
              <rect x="4" y="6" width="24" height="20" rx="0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <path d="M10 13h12M10 17h8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              No sessions match filters
            </span>
          </div>
        ) : (
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
          >
            {filtered.map((session, i) => (
              <SessionCard key={`${session.date}-${i}`} session={session} />
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}
