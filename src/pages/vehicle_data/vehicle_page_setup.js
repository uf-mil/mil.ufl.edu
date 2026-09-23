import ImageViewer from "../../components/ImageViewer";
import { vehicles } from "./vehicle_data";
import React, { useState, useRef, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { categoryColors } from "../../constants/vehicle_category_colors";

function SpecRow({ label, value }) {
  return (
    <div
      className="flex justify-between items-baseline py-2 border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-text)" }}>
        {value}
      </span>
    </div>
  );
}

function PartPanel({ part, onClose }) {
  const catColor = categoryColors[part.category] ?? "#4a5568";
  return (
    <div className="flex flex-col overflow-hidden h-full">
      <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex flex-col gap-1.5">
          <div className="text-xs font-medium px-2 py-0.5 inline-block" style={{ background: catColor + "22", color: catColor, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", border: `1px solid ${catColor}44`, fontSize: "0.6rem", textTransform: "uppercase" }}>
            {part.category}
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", fontWeight: 700, letterSpacing: "0.02em", color: "var(--color-text)", lineHeight: 1.1 }}>
            {part.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center"
          style={{ color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <p className="px-5 py-4" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontSize: "0.8rem", lineHeight: 1.65 }}>
        {part.description}
      </p>
      <div className="px-5 pb-5">
        <div className="mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-dim)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Technical Specifications
        </div>
        {Object.entries(part.specs).map(([k, v]) => <SpecRow key={k} label={k} value={v} />)}
      </div>
    </div>
  );
}

function VehicleTab({ vehicle, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-0.5 px-5 py-3.5 text-left relative"
      style={{ background: active ? "var(--color-surface-2)" : "transparent", borderRight: "1px solid var(--color-border)", borderBottom: active ? "none" : "1px solid var(--color-border)", minWidth: 140 }}
    >
      {active && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-accent)" }} />}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: active ? "var(--color-accent)" : "var(--color-text-dim)" }}>
        {vehicle.type.split(" ").slice(0, 2).join(" ")}
      </span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.04em", color: active ? "var(--color-text)" : "var(--color-text-muted)" }}>
        {vehicle.name}
      </span>
    </button>
  );
}

function VehicleOverview({ vehicle }) {
  return (
    <div className="flex flex-col">
      <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.15em", color: "var(--color-accent)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
          {vehicle.type}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 800, letterSpacing: "0.02em", color: "var(--color-text)", lineHeight: 1.05 }}>
          {vehicle.name}
        </h2>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-text-muted)", marginTop: "0.15rem", letterSpacing: "0.04em" }}>
          {vehicle.tagline}
        </div>
      </div>
      <p className="px-5 py-4" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", borderBottom: "1px solid var(--color-border)", fontSize: "0.78rem", lineHeight: 1.65 }}>
        {vehicle.description}
      </p>
      <div className="px-5 py-4">
        <div className="mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-dim)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Platform Specifications
        </div>
        {Object.entries(vehicle.specs).map(([k, v]) => <SpecRow key={k} label={k} value={v} />)}
      </div>
    </div>
  );
}

export default function Vehicles() {
    const { vehicleId, viewId } = useParams();
    const navigate = useNavigate();

    const activeVehicle =
    vehicles.find((v) => v.id === vehicleId) ?? vehicles[0];

    const activeView =
    activeVehicle.views.find((view) => view.id === viewId) ?? activeVehicle.views[0];


    const [selectedPart, setSelectedPart] = useState(null);

    const handleVehicleChange = (v) => {
        navigate(`/vehicles/${v.id}/${v.views[0].id}`);
        setSelectedPart(null);
    };

    const handleViewChange = (view) => {
        navigate(`/vehicles/${activeVehicle.id}/${view.id}`);
    };

    useEffect(() => {
        if (!vehicleId) {
            navigate(`/vehicles/${vehicles[0].id}/${vehicles[0].views[0].id}`, { replace: true });
        return;
        }
        if (!viewId) {
            navigate(`/vehicles/${activeVehicle.id}/${activeVehicle.views[0].id}`, { replace: true });
        }
    }, [vehicleId, viewId, navigate, activeVehicle]);

    return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-background)" }}>
      <Navbar />


        {/* ── page header ───────────────────────────────────────── */}
        <div className="px-8 py-6 flex items-end justify-between flex-shrink-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.3rem" }}>
            Interactive Platform Explorer
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "0.02em", color: "var(--color-text)", lineHeight: 1 }}>
            Autonomous Vehicle Fleet
            </h1>
        </div>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)", fontSize: "0.78rem", lineHeight: 1.6, textAlign: "right", maxWidth: "22rem" }}>
            Select a vehicle, switch views, and click any annotation
            <br />marker to inspect subsystem specifications.
        </p>
        </div>

        {/* ── vehicle tabs ──────────────────────────────────────── */}
        <div className="flex flex-shrink-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
        {vehicles.map((v) => (
            <VehicleTab key={v.id} vehicle={v} active={v.id === activeVehicle.id} onClick={() => handleVehicleChange(v)} />
        ))}
        <div className="flex-1" style={{ borderBottom: "1px solid var(--color-border)" }} />
        </div>

        {/* ── main content ──────────────────────────────────────── */}
        <div className="flex flex-1 min-h-0">

        {/* left sidebar */}
        <div className="flex-shrink-0 overflow-y-auto" style={{ width: 280, borderRight: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
            {selectedPart
            ? <PartPanel part={selectedPart} onClose={() => setSelectedPart(null)} />
            : <VehicleOverview vehicle={activeVehicle} />
            }
        </div>

        {/* image viewer */}
        <div className="flex-1 flex flex-col min-h-0" style={{ minHeight: 480 }}>
            <ImageViewer
                vehicle={activeVehicle}
                activeView={activeView}
                onViewChange={handleViewChange}
                onPartSelect={setSelectedPart}
                selectedPart={selectedPart} 
            />
        </div>

        {/* right sidebar — component index */}
        <div className="flex-shrink-0 overflow-y-auto" style={{ width: 220, borderLeft: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
            <div className="px-4 py-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-dim)" }}>
                Component Index
            </div>
            </div>
            <div className="flex flex-col">
            {activeVehicle.parts.map((p, i) => {
                const c = categoryColors[p.category] ?? "#4a5568";
                const isActive = selectedPart?.id === p.id;
                return (
                <button
                    key={p.id}
                    onClick={() => setSelectedPart(isActive ? null : p)}
                    className="flex items-start gap-3 px-4 py-3 text-left"
                    style={{ background: isActive ? c + "18" : "transparent", borderBottom: "1px solid var(--color-border)", borderLeft: isActive ? `2px solid ${c}` : "2px solid transparent" }}
                >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--color-text-dim)", paddingTop: "0.15rem", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-0.5">
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 600, color: isActive ? "var(--color-text)" : "var(--color-text-muted)", letterSpacing: "0.02em", lineHeight: 1.2 }}>
                        {p.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: c, opacity: 0.8 }}>
                        {p.category}
                    </span>
                    </div>
                </button>
                );
            })}
            </div>
            <div className="px-4 py-4" style={{ borderTop: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: selectedPart ? "var(--color-accent)" : "#2a8a5a" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.12em", color: "var(--color-text-dim)", textTransform: "uppercase" }}>
                {selectedPart ? selectedPart.name : "No selection"}
                </span>
            </div>
            </div>
        </div>
        </div>

        {/* ── footer ────────────────────────────────────────────── */}
        <Footer />
    </div>
    );
}
