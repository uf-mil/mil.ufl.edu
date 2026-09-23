import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tasks = [
  {
    number: "01",
    id: "safe-passage",
    name: "Safe Passage",
    tier: "Core → Disruptive",
    vehicles: ["PropaGator 3", "InvestiGator 10"],
    vehicleTypes: ["USV", "UAV"],
    summary:
      "Navigate a passage marked by colored buoys, identify their status, and transit safely. Higher tiers introduce aerial scouting ahead of the surface vehicle.",
    sections: [
      {
        label: "Core Tier",
        vehicle: "USV PropaGator 3",
        content:
          "PropaGator uses a front-facing camera to identify buoy status in real time and reports to RoboCommand over a 2.4 GHz Ubiquiti radio connection. Camera data drives a perception pipeline that classifies each buoy's color and state to determine the safe heading.",
      },
      {
        label: "Advanced / Disruptive",
        vehicle: "UAV InvestiGator 10",
        content:
          "InvestiGator carries a downward-facing camera and runs OpenCV or YOLO Nano onboard a Raspberry Pi to gather aerial buoy imagery ahead of PropaGator. Buoy status and locations are relayed to PropaGator via RFD900x radio modems, giving the USV a wider operational picture before it enters the passage.",
      },
    ],
    accentColor: "#00c8ff",
  },
  {
    number: "02",
    id: "infrastructure-survey",
    name: "Infrastructure Survey & Repair",
    tier: "Core",
    vehicles: ["SubjuGator 9", "PropaGator 3"],
    vehicleTypes: ["UUV", "USV"],
    summary:
      "Locate a subsea pipeline via acoustic pinger, survey its indicator lights to determine fault location, and perform physical repair using an onboard magnetic probe.",
    sections: [
      {
        label: "Pipeline Localization",
        vehicle: "UUV SubjuGator 9",
        content:
          "SubjuGator uses four onboard hydrophones to triangulate the active pinger and transit to its location. Once on-pipeline, it observes sequential light statuses to identify the red fault indicator, allowing the condition of the remaining pipeline sections to be inferred.",
      },
      {
        label: "Repair & Communication",
        vehicle: "UUV SubjuGator 9 + USV PropaGator 3",
        content:
          "SubjuGator carries a magnetic probe to repair the faulted section for additional scoring. Pipeline status is transmitted to PropaGator via acoustic modems; PropaGator forwards the report to RoboCommand over Ubiquiti. Advanced and Disruptive tiers — tin retrieval via InvestiGator — have intervehicle communication established and a physical mechanism in place pending further testing.",
      },
    ],
    accentColor: "#2a8a5a",
  },
  {
    number: "03",
    id: "coordinated-logistics",
    name: "Coordinated Logistics",
    tier: "Attempt",
    vehicles: ["PropaGator 3"],
    vehicleTypes: ["USV"],
    summary:
      "Dock precisely with a floating structure, maintain station, and operate an onboard payload delivery system. A new bow thruster greatly improves PropaGator's planar control authority for this high-precision task.",
    sections: [
      {
        label: "Perception & Navigation",
        vehicle: "USV PropaGator 3",
        content:
          "PropaGator's forward-facing camera feeds a YOLO model running on an NVIDIA Jetson Orin Nano. Onboard LIDAR generates a real-time map of the docking structure, and the mission planner fuses this with camera detections to compute a precise docking trajectory.",
      },
      {
        label: "Docking & Station Keeping",
        vehicle: "USV PropaGator 3",
        content:
          "A newly added bow thruster expands PropaGator's translational authority in the aft and starboard directions, enabling fine positioning during docking and sustained station keeping while maintaining sprayer alignment with the active window. This upgrade also allowed the team to migrate SubjuGator's proven controller architecture directly to PropaGator, reducing development effort and improving system confidence.",
      },
    ],
    accentColor: "#c8821a",
  },
  {
    number: "04",
    id: "dynamic-incident-response",
    name: "Dynamic Incident Response",
    tier: "Core",
    vehicles: ["PropaGator 3", "InvestiGator 10"],
    vehicleTypes: ["USV", "UAV"],
    summary:
      "React to unpredictable operator commands dispatched during the run — reaching specified coordinates in both the surface and aerial domains within tight time windows.",
    sections: [
      {
        label: "Surface Response",
        vehicle: "USV PropaGator 3",
        content:
          "RoboCommand requests reach PropaGator from the Operator Control Station (OCS) via the 2.4 GHz Ubiquiti link. PropaGator's mission planner and SubjuGator-derived controller navigate it to the requested position. Bow thruster authority provides station keeping and lateral correction upon arrival.",
      },
      {
        label: "Aerial Response",
        vehicle: "UAV InvestiGator 10",
        content:
          "PropaGator relays aerial tasking to InvestiGator over RFD900x radio modems. InvestiGator uses its Here4 GPS module for localization and ArduPilot to navigate to commanded coordinates at a specified relative altitude. Prioritizing the Core Tier allows the team to reuse existing communication, navigation, and station-keeping capabilities while concentrating testing on reliable task interruption, response, and mission resumption.",
      },
    ],
    accentColor: "#7a4aaa",
  },
];

const vehicleTagColor = {
  USV: "#00c8ff",
  UUV: "#2a8a5a",
  UAV: "#c8821a",
};

function ImagePlaceholder({ label }) {
  return (
    
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{
        background: "repeating-linear-gradient(45deg, transparent, transparent 18px, #ffffff04 18px, #ffffff04 36px)",
        border: "1px dashed var(--color-border)",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.2 }}>
        <rect x="3" y="7" width="30" height="22" rx="0" stroke="#dce4f0" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M3 23l9-7 6 5 5-4 10 8" stroke="#dce4f0" strokeWidth="1" />
        <circle cx="11" cy="15" r="2.5" stroke="#dce4f0" strokeWidth="1" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-text-dim)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Competition() {
  const [activeTask, setActiveTask] = useState(0);
  const task = tasks[activeTask];

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "var(--color-background)", color: "var(--color-text)" }}
      >
        
      {/* ── page header ─────────────────────────────────────── */}
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
          RobotX 2026 · NaviGator AMS-SPI
        </div>
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
          Competition Strategy
        </h1>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.65,
            maxWidth: "56rem",
          }}
        >
          NaviGator AMS-SPI is a System of Systems comprising UUV SubjuGator 9, USV PropaGator 3, and UAV
          InvestiGator 10. Following the 2026 RoboSub competition, we decided to scale back to a reliability-first
          strategy. We are targeting the core tier of each task while building up the infrastructure required for
          disruptive-tier tasks for future competitions.
        </p>
      </div>

      {/* ── task selector ───────────────────────────────────── */}
      <div
        className="flex flex-shrink-0 overflow-x-auto"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        {tasks.map((t, i) => {
          const active = i === activeTask;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTask(i)}
              className="flex flex-col gap-1 px-6 py-4 text-left flex-shrink-0 relative transition-colors duration-150"
              style={{
                background: active ? "var(--color-surface-2)" : "transparent",
                borderRight: "1px solid var(--color-border)",
                borderBottom: active ? `2px solid ${t.accentColor}` : "2px solid transparent",
                minWidth: 160,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: active ? t.accentColor : "var(--color-text-dim)",
                }}
              >
                Task {t.number}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  color: active ? "var(--color-text)" : "var(--color-text-muted)",
                  lineHeight: 1.2,
                }}
              >
                {t.name}
              </span>
            </button>
          );
        })}
        <div className="flex-1" style={{ borderBottom: "2px solid transparent" }} />
      </div>

      {/* ── task detail ─────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0" style={{ minHeight: 600 }}>

        {/* left: task overview + sections */}
        <div
          className="flex flex-col overflow-y-auto"
          style={{
            width: "min(52%, 680px)",
            borderRight: "1px solid var(--color-border)",
            flexShrink: 0,
          }}
        >
          {/* overview strip */}
          <div
            className="px-8 py-6 flex-shrink-0"
            style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            <div className="flex items-start justify-between gap-6 mb-4">
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: task.accentColor,
                  }}
                >
                  Task {task.number}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    lineHeight: 1.05,
                    color: "var(--color-text)",
                  }}
                >
                  {task.name}
                </h2>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <div
                  className="px-2 py-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: task.accentColor,
                    border: `1px solid ${task.accentColor}55`,
                    background: task.accentColor + "12",
                  }}
                >
                  {task.tier}
                </div>
                <div className="flex gap-1.5">
                  {task.vehicleTypes.map((vt) => (
                    <span
                      key={vt}
                      className="px-2 py-0.5"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.52rem",
                        letterSpacing: "0.12em",
                        color: vehicleTagColor[vt] ?? "#aaa",
                        border: `1px solid ${vehicleTagColor[vt] ?? "#aaa"}44`,
                        background: (vehicleTagColor[vt] ?? "#aaa") + "10",
                      }}
                    >
                      {vt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
              }}
            >
              {task.summary}
            </p>
          </div>

          {/* detail sections */}
          {task.sections.map((sec, i) => (
            <div
              key={i}
              className="px-8 py-6 flex-shrink-0"
              style={{
                borderBottom: "1px solid var(--color-border)",
                borderLeft: `3px solid ${task.accentColor}`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                  style={{ background: task.accentColor + "22", border: `1px solid ${task.accentColor}55` }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.5rem",
                      color: task.accentColor,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: task.accentColor,
                      marginBottom: "0.1rem",
                    }}
                  >
                    {sec.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {sec.vehicle}
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.72,
                }}
              >
                {sec.content}
              </p>
            </div>
          ))}

          {/* vehicle legend */}
          <div className="px-8 py-5 mt-auto flex-shrink-0" style={{ borderTop: "1px solid var(--color-border)" }}>
            <div
              className="mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.52rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              Vehicles Assigned
            </div>
            <div className="flex flex-wrap gap-3">
              {task.vehicles.map((v, i) => (
                <div key={v} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0"
                    style={{ background: vehicleTagColor[task.vehicleTypes[i]] ?? task.accentColor }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "var(--color-text)",
                    }}
                  >
                    {v}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.52rem",
                      color: "var(--color-text-dim)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    · {task.vehicleTypes[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right: image panels */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* primary image */}
          <div
            className="flex-1 relative"
            style={{ borderBottom: "1px solid var(--color-border)", minHeight: 240 }}
          >
            <ImagePlaceholder label={`${task.name} — Primary Photo`} />
            <div
              className="absolute top-4 left-4 pointer-events-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 800,
                letterSpacing: "0.06em",
                color: task.accentColor,
                opacity: 0.07,
                lineHeight: 1,
              }}
            >
              {task.number}
            </div>
            <div
              className="absolute bottom-4 right-4 pointer-events-none"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              Add image · Primary
            </div>
          </div>

          {/* secondary image pair */}
          <div className="flex flex-1" style={{ minHeight: 160 }}>
            <div
              className="flex-1 relative"
              style={{ borderRight: "1px solid var(--color-border)" }}
            >
              <ImagePlaceholder label={`${task.vehicles[0]} in action`} />
              <div
                className="absolute bottom-3 right-3 pointer-events-none"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-dim)",
                }}
              >
                Secondary A
              </div>
            </div>
            <div className="flex-1 relative">
              <ImagePlaceholder label={task.vehicles[1] ? `${task.vehicles[1]} in action` : "Detail view"} />
              <div
                className="absolute bottom-3 right-3 pointer-events-none"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-dim)",
                }}
              >
                Secondary B
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── task nav strip ──────────────────────────────────── */}
      <div
        className="flex flex-shrink-0 items-center justify-between px-8 py-4"
        style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}
      >
        <div className="flex gap-2">
          {tasks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTask(i)}
              className="w-2 h-2 transition-all duration-150"
              style={{
                background: i === activeTask ? t.accentColor : "var(--color-border)",
                transform: i === activeTask ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTask((p) => Math.max(0, p - 1))}
            disabled={activeTask === 0}
            className="px-4 py-1.5 transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: activeTask === 0 ? "var(--color-text-dim)" : "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
              background: "transparent",
            }}
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveTask((p) => Math.min(tasks.length - 1, p + 1))}
            disabled={activeTask === tasks.length - 1}
            className="px-4 py-1.5 transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: activeTask === tasks.length - 1 ? "var(--color-text-dim)" : "var(--color-accent)",
              border: `1px solid ${activeTask === tasks.length - 1 ? "var(--color-border)" : "var(--color-accent)44"}`,
              background: "transparent",
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
