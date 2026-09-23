import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const vehicles = [
  {
    id: "subjugator",
    name: "SubjuGator 9",
    shortName: "SUB9",
    type: "UUV · Autonomous Underwater Vehicle",
    accentColor: "#2a8a5a",
    intro:
      "SubjuGator 9 was designed to complete every RoboSub task at the highest tier. As deadlines approached, the strategy shifted to delivering robust Core-tier performance with infrastructure in place for higher-tier expansion.",
    subsystems: [
      {
        id: "gnc",
        label: "GNC",
        title: "Guidance, Navigation & Control",
        status: "complete",
        body: [
          "SubjuGator 9 localizes using three primary sensors: a WaterLinked A50 DVL provides linear velocity, a Vectornav VN100 IMU provides attitude, angular velocity, and linear acceleration, and a BlueRobotics barometric depth sensor provides absolute Z position from the water surface.",
          "Data from all three sensors is fused using an Extended Kalman Filter, enabling accurate pose estimation relative to the sub's initial position. Navigation paths are planned using the Sub9 Mission Planner behavior tree, informed by camera data from the Sub9 vision pipeline.",
          "A manual override system allows operators to take direct control during testing or in the event of an autonomous system failure.",
        ],
        imageSlots: [
          { label: "GNC System Overview Diagram" },
          { label: "Sensor Integration Block Diagram" },
        ],
        figureNote: "Figure 2: Overview of SubjuGator 9 GNC System",
      },
      {
        id: "vision",
        label: "Vision",
        title: "Vision Pipeline",
        status: "complete",
        body: [
          "SubjuGator 9 carries two monoscopic BlueRobotics Low-Light USB cameras: a downward-facing camera (down cam) for pipeline tracking and a front-facing camera (front cam) for detection and approach. Stereoscopic depth sensing is not required for the planned mission profile.",
          "Both cameras connect to the Jetson Orin via USB 2.0. A YOLO model running on the Jetson detects the pipeline and returns position and angle data. A second YOLO model identifies the red LED fault indicator. The pipeline-following algorithm uses these detections to visually track the pipeline from the pinger approach through to fault localization.",
          "Once the red LED is detected, SubjuGator transmits its location to PropaGator via the onboard acoustic modems. The mission sequence is: navigate to pinger → rotate to acquire front-cam view → advance until down cam sees pipeline → follow pipeline and log LED states → transmit on red-LED detection.",
        ],
        imageSlots: [
          { label: "Vision Pipeline Block Diagram" },
          { label: "YOLO Detection Example — Pipeline" },
        ],
      },
      {
        id: "power",
        label: "Power",
        title: "Power Distribution",
        status: "complete",
        body: [
          "At RoboSub 2025, Sub9 had no active regulation between the battery and downstream electronics. Sensor drop-outs during pool-wall contact and degrading data at low voltage revealed a need for stable, regulated power. A 13.9 V / 10 A buck-boost regulator was added between the batteries and all downstream electronics (excluding thrusters), ensuring constant voltage across the full battery discharge cycle.",
          "Battery overdischarge was a secondary concern: the prior single 9000 mAh 14.8 V 4S2P pack provided roughly one hour of runtime, and the only low-voltage alert was an audible cell-monitor chirp — insufficient to prevent a battery retirement from overdraw in 2025.",
          "The cell monitor was replaced with a custom board stack providing battery monitoring and power ORing. Sub9 can now run from two 4S2P batteries simultaneously; power ORing draws from the higher-voltage pack automatically, doubling effective runtime. Cell voltages are reported directly to Sub9's computers. If voltages fall below safe thresholds and are not addressed, back-to-back N-channel MOSFETs electrically isolate the depleted battery.",
        ],
        imageSlots: [
          { label: "Power Distribution Schematic" },
          { label: "Custom Battery Monitor Board" },
        ],
      },
      {
        id: "sonar",
        label: "Sonar",
        title: "Passive Sonar System",
        status: "complete",
        body: [
          "SubjuGator 9 uses a passive sonar system to locate the Task 2 acoustic pinger. Four onboard hydrophones feed a Sylphase sonar_rev3 board, which reports the bearing of the pinger signal to the mission planner.",
          "Rather than full triangulation for an exact fix, the system uses simple directional pursuit: orient toward the bearing and advance until the pinger is reached. This avoids the processing overhead and testing complexity of full position estimation while reliably achieving the same practical result.",
        ],
        imageSlots: [
          { label: "Hydrophone Placement Diagram" },
        ],
      },
    ],
  },
  {
    id: "propagator",
    name: "PropaGator 3",
    shortName: "PROP3",
    type: "USV · Unmanned Surface Vehicle",
    accentColor: "#00c8ff",
    intro:
      "PropaGator 3 is the communications nucleus of the NaviGator AMS-SPI system. It relays all messages between the SoS and RoboCommand, and its new bow thruster significantly expands docking and station-keeping capability.",
    subsystems: [
      {
        id: "gnc",
        label: "GNC",
        title: "Guidance, Navigation & Control",
        status: "complete",
        body: [
          "PropaGator relies on an mRobotics Neo M9N GPS module for position, a Sylphase Infix IMU board for attitude and inertial data, and a Velodyne LiDAR for planar velocity via the open-source rf2o_laser_odometry package. All data is fused with an Extended Kalman Filter for accurate pose estimation.",
          "Unlike SubjuGator, PropaGator does not use a formal behavior-tree mission planner. Mission logic is implemented in Python scripts that interface directly with the fused pose output. A manual override system is available for operator intervention during testing or failure scenarios.",
          "The controller architecture was migrated from SubjuGator 9, reducing development effort and leveraging a well-tested control framework.",
        ],
        imageSlots: [
          { label: "PropaGator GNC Architecture Diagram" },
          { label: "EKF Sensor Fusion Block Diagram" },
        ],
      },
      {
        id: "vision",
        label: "Vision",
        title: "Vision Pipeline",
        status: "in-progress",
        body: [
          "PropaGator's forward-facing camera feeds a YOLO model running on an NVIDIA Jetson Orin Nano for object detection and classification. This pipeline supports buoy status identification (Task 1), docking structure recognition (Task 3), and general obstacle awareness.",
          "Vision pipeline integration and task-specific model training are ongoing.",
        ],
        imageSlots: [
          { label: "Camera Placement & FOV Diagram" },
        ],
      },
      {
        id: "power",
        label: "Power",
        title: "Power Distribution",
        status: "in-progress",
        body: [
          "Power distribution design for PropaGator 3 is in progress. Details will be published following system integration and testing.",
        ],
        imageSlots: [
          { label: "Power Architecture Diagram" },
        ],
      },
    ],
  },
  {
    id: "investigator",
    name: "InvestiGator 10",
    shortName: "INV10",
    type: "UAV · Unmanned Aerial Vehicle",
    accentColor: "#c8821a",
    intro:
      "InvestiGator 10 provides aerial reconnaissance and payload delivery capability to the NaviGator SoS. It communicates with PropaGator via RFD900x radio modems and operates autonomously using ArduPilot.",
    subsystems: [
      {
        id: "nav",
        label: "Navigation",
        title: "Navigation & Localization",
        status: "complete",
        body: [
          "InvestiGator 10 uses a Here4 GPS module for position fixes. With a GPS fix, the UAV executes relative North-East-Down (NED) movements and navigates to absolute GPS coordinates at a commanded relative altitude — the primary mode used for Task 4 incident response.",
          "A polygon geofence can be defined that causes the UAV to brake as it approaches within 2 meters of the boundary, preventing the vehicle from leaving the established inclusion zone regardless of commanded movement.",
        ],
        imageSlots: [
          { label: "UAV Navigation Architecture" },
          { label: "Geofence Zone Diagram" },
        ],
      },
      {
        id: "vision",
        label: "Vision",
        title: "Vision Pipeline",
        status: "in-progress",
        body: [
          "Two camera options are under active development. Option 1 is a Raspberry Pi camera module running a Computer Vision pipeline (OpenCV) to classify buoy LED colors and resource platform indicators for Tasks 1, 2, and 3. If CV classification proves insufficiently reliable, a YOLO Nano model can be substituted at the cost of higher processing and battery load.",
          "Option 2 is a Luxonis OAK-D, which can execute detection models onboard the camera itself. Testing is ongoing to determine whether the OAK-D's power draw is acceptable given the UAV's current flight endurance budget.",
        ],
        imageSlots: [
          { label: "Camera Options Comparison" },
          { label: "Detection Pipeline Block Diagram" },
        ],
      },
      {
        id: "manipulator",
        label: "Manipulator",
        title: "Magnetic Manipulator",
        status: "complete",
        body: [
          "InvestiGator integrates a FluxGrip FG40 electro-permanent magnet for payload manipulation in Tasks 2 and 3. Electro-permanent magnets combine the power efficiency of permanent magnets with the controllability of electromagnets — the magnet holds its state (on or off) without consuming power, requiring only a brief pulse to toggle.",
          "The magnet is toggled via a script on the UAV's Raspberry Pi 5 through an open CAN port on the CubePilot flight controller. The mechanical mount was designed to sustain more than 25× the expected payload load, providing a large safety margin against in-flight failure.",
        ],
        imageSlots: [
          { label: "FG40 Mount Assembly" },
          { label: "CAN Control Interface Diagram" },
        ],
      },
    ],
  },
  {
    id: "comms",
    name: "Communications",
    shortName: "COMMS",
    type: "SoS · Cross-Vehicle Architecture",
    accentColor: "#7a4aaa",
    intro:
      "PropaGator 3 serves as the communications nucleus of the NaviGator AMS-SPI system. All messages between the SoS and RoboCommand pass through PropaGator, which bridges the surface, sub-surface, and aerial domains.",
    subsystems: [
      {
        id: "architecture",
        label: "Architecture",
        title: "System Communications Architecture",
        status: "complete",
        body: [
          "All RoboCommand traffic flows through the team's Operator Control Station (OCS) on shore and reaches PropaGator via a 2.4 GHz Ubiquiti transmitter/receiver link. PropaGator then relays tasking to subordinate vehicles: acoustic modems for SubjuGator (underwater) and RFD900x radio modems for InvestiGator (aerial).",
          "In the event of a communications failure affecting the primary link, SubjuGator is equipped with an antenna tube that can establish a direct shore connection while the sub is surfaced, providing a fallback channel.",
          "Intravehicle communication (between subsystems within a single vehicle) is handled over Ethernet, providing low-latency, high-reliability connections that are essential in dynamic operational environments.",
        ],
        imageSlots: [
          { label: "SoS Communications Architecture Diagram" },
          { label: "Radio Link Budget / Range Map" },
        ],
      },
      {
        id: "links",
        label: "Links",
        title: "Radio & Acoustic Links",
        status: "complete",
        body: [
          "Shore ↔ PropaGator: 2.4 GHz Ubiquiti (primary command link)",
          "PropaGator ↔ SubjuGator: Acoustic modems (subsurface data relay)",
          "PropaGator ↔ InvestiGator: RFD900x radio modems (aerial tasking)",
          "SubjuGator ↔ Shore (fallback): Antenna tube surfaced link",
          "Intravehicle: Ethernet (all subsystem-to-computer connections)",
        ],
        imageSlots: [
          { label: "Link Topology Diagram" },
        ],
      },
    ],
  },
];

const statusConfig = {
  complete: { label: "Complete", color: "#2a8a5a" },
  "in-progress": { label: "In Progress", color: "#c8821a" },
};

function ImageSlot({ label }) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-2"
      style={{
        minHeight: 140,
        background:
          "repeating-linear-gradient(45deg, transparent, transparent 16px, #ffffff03 16px, #ffffff03 32px)",
        border: "1px dashed var(--color-border)",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.18 }}>
        <rect x="2" y="5" width="24" height="18" rx="0" stroke="#dce4f0" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M2 18l7-5.5 5 4 4-3 8 6" stroke="#dce4f0" strokeWidth="1" />
        <circle cx="9" cy="12" r="2" stroke="#dce4f0" strokeWidth="1" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.52rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-text-dim)",
          textAlign: "center",
          padding: "0 0.75rem",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SubsystemCard({ subsystem, accentColor, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const status = statusConfig[subsystem.status] ?? statusConfig.complete;

  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
        borderLeft: open ? `3px solid ${accentColor}` : "3px solid transparent",
        transition: "border-color 0.15s",
      }}
    >
      {/* header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        style={{ background: open ? accentColor + "08" : "transparent" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 28,
              height: 28,
              background: accentColor + "18",
              border: `1px solid ${accentColor}44`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                color: accentColor,
                letterSpacing: "0.08em",
              }}
            >
              {subsystem.label}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              color: open ? "var(--color-text)" : "var(--color-text-muted)",
            }}
          >
            {subsystem.title}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="px-2 py-0.5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: status.color,
              border: `1px solid ${status.color}44`,
              background: status.color + "12",
            }}
          >
            {status.label}
          </span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{
              color: "var(--color-text-dim)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.15s",
            }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </button>

      {/* expanded content */}
      {open && (
        <div className="px-6 pb-6">
          {/* body text */}
          <div className="flex flex-col gap-3 mb-5">
            {subsystem.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.72,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {subsystem.figureNote && (
            <div
              className="mb-5 px-3 py-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                color: accentColor,
                borderLeft: `2px solid ${accentColor}44`,
                background: accentColor + "08",
              }}
            >
              {subsystem.figureNote}
            </div>
          )}

          {/* image slots */}
          {subsystem.imageSlots && subsystem.imageSlots.length > 0 && (
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: subsystem.imageSlots.length > 1 ? "1fr 1fr" : "1fr",
              }}
            >
              {subsystem.imageSlots.map((slot, i) => (
                <ImageSlot key={i} label={slot.label} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function DesignStrategy() {
  const [activeVehicleId, setActiveVehicleId] = useState("subjugator");
  const vehicle = vehicles.find((v) => v.id === activeVehicleId) ?? vehicles[0];

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
          Design Strategy
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
          NaviGator AMS-SPI was initially designed to complete every task at maximum capability. As competition
          deadlines approached, strategy shifted to prioritizing reliable Core-tier execution — each system retains
          the infrastructure for higher-tier expansion while concentrating testing on proven fundamentals.
        </p>
      </div>

      {/* ── body ────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0" style={{ minHeight: 600 }}>

        {/* left nav */}
        <div
          className="flex-shrink-0 flex flex-col"
          style={{
            width: 220,
            borderRight: "1px solid var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          <div
            className="px-4 py-4"
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.52rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              Systems
            </div>
          </div>

          {vehicles.map((v) => {
            const active = v.id === activeVehicleId;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVehicleId(v.id)}
                className="flex flex-col gap-1 px-4 py-4 text-left relative"
                style={{
                  background: active ? v.accentColor + "10" : "transparent",
                  borderBottom: "1px solid var(--color-border)",
                  borderLeft: active ? `3px solid ${v.accentColor}` : "3px solid transparent",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.52rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: active ? v.accentColor : "var(--color-text-dim)",
                  }}
                >
                  {v.shortName}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    color: active ? "var(--color-text)" : "var(--color-text-muted)",
                    lineHeight: 1.15,
                  }}
                >
                  {v.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.48rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-dim)",
                    marginTop: "0.1rem",
                  }}
                >
                  {v.subsystems.length} subsystem{v.subsystems.length !== 1 ? "s" : ""}
                </span>
              </button>
            );
          })}

          {/* status legend */}
          <div className="px-4 py-4 mt-auto" style={{ borderTop: "1px solid var(--color-border)" }}>
            <div
              className="mb-2.5"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.48rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              Status Key
            </div>
            {Object.entries(statusConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: cfg.color }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {cfg.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* main content */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">

          {/* vehicle header */}
          <div
            className="px-8 py-6 flex-shrink-0 flex items-start justify-between gap-6"
            style={{
              borderBottom: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              borderLeft: `4px solid ${vehicle.accentColor}`,
            }}
          >
            <div className="flex-1 min-w-0">
              <div
                className="mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: vehicle.accentColor,
                }}
              >
                {vehicle.type}
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
                {vehicle.name}
              </h2>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.65,
                  maxWidth: "52rem",
                }}
              >
                {vehicle.intro}
              </p>
            </div>

            {/* subsystem count chips */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              {vehicle.subsystems.map((s) => {
                const sc = statusConfig[s.status] ?? statusConfig.complete;
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <div className="w-1 h-1 flex-shrink-0" style={{ background: sc.color }} />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.5rem",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-dim)",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* subsystem accordions */}
          <div className="flex-1">
            {vehicle.subsystems.map((sub, i) => (
              <SubsystemCard
                key={sub.id}
                subsystem={sub}
                accentColor={vehicle.accentColor}
                defaultOpen={i === 0}
              />
            ))}
          </div>

          {/* vehicle watermark footer */}
          <div
            className="px-8 py-4 flex-shrink-0 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: vehicle.accentColor,
                opacity: 0.06,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {vehicle.shortName}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.52rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              {vehicle.subsystems.length} subsystems documented
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
