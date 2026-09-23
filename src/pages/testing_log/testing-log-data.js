// ─────────────────────────────────────────────────────────────────────────────
// Testing Log Data
//
// To add a new session, copy one of the entries below and paste it at the TOP
// of the `sessions` array (newest first). Fill in all fields:
//
//   date      — "YYYY-MM-DD"
//   hours     — number, e.g. 2.5
//   location  — short description, e.g. "Flavet Field Pool"
//   vehicles  — array of vehicle IDs: "sub9", "prop3", "inv10"
//               (used for color-coding; include all vehicles present)
//   items     — array of strings, one per bullet point
//   notes     — optional string for a brief summary line (can be "")
// ─────────────────────────────────────────────────────────────────────────────

export const sessions = [
  {
    date: "2026-09-15",
    hours: 3.5,
    location: "Flavet Field Pool — Lanes 3–4",
    vehicles: ["sub9"],
    items: [
      "DVL integration with EKF — verified velocity output at depth",
      "Passive sonar bearing accuracy test with pinger at 8 m",
      "Power ORing failover: verified battery isolation on low-cell trigger",
      "Front-cam YOLO pipeline: pipeline detection at 2 m standoff",
    ],
    notes: "DVL dropouts resolved after cable re-seating. Sonar bearing within 5° at all test angles.",
  },
  {
    date: "2026-09-10",
    hours: 2.0,
    location: "Lake Wauburg — North Dock",
    vehicles: ["prop3", "inv10"],
    items: [
      "PropaGator GPS fix acquisition time — average 18 s cold start",
      "RFD900x radio link range test: reliable at 400 m LOS",
      "InvestiGator geofence polygon upload and brake test",
      "Ubiquiti shore link at 200 m — zero packet loss",
    ],
    notes: "Wind 12 kn from SW. PropaGator station-keeping drift <0.3 m at 1-min hold.",
  },
  {
    date: "2026-09-04",
    hours: 4.0,
    location: "Flavet Field Pool — Full Width",
    vehicles: ["sub9", "prop3"],
    items: [
      "Acoustic modem SubjuGator ↔ PropaGator end-to-end message relay",
      "SubjuGator pipeline-follow algorithm: 3 full runs",
      "PropaGator bow thruster station-keeping during docking approach",
      "Manual override handoff latency — SubjuGator and PropaGator",
      "Battery runtime logged: Sub9 hit 15.2 V at 58 min",
    ],
    notes: "Acoustic modem drop at pool edge — antenna depth sensitivity confirmed. Bow thruster improved lateral hold significantly.",
  },
  {
    date: "2026-08-28",
    hours: 2.5,
    location: "MIL Lab — Dry Bench",
    vehicles: ["sub9"],
    items: [
      "Custom battery monitor board bench test — cell voltage reporting verified",
      "Buck-boost regulator load testing at 10 A draw",
      "MOSFET isolation trigger at 3.4 V/cell threshold",
      "Sensor noise floor measurement with new regulated power rail",
    ],
    notes: "Regulation improved IMU noise floor by ~40%. Battery monitor comms stable over 2-hour bench run.",
  },
  {
    date: "2026-08-21",
    hours: 3.0,
    location: "Flavet Field Pool — Lanes 1–2",
    vehicles: ["sub9"],
    items: [
      "Depth sensor calibration — fresh and salt water offset comparison",
      "EKF tuning: process noise matrix adjustment for DVL+IMU fusion",
      "Red LED detection YOLO model — 15 test images, 93% recall",
      "Down-cam pipeline detection at 0.5 m altitude",
    ],
    notes: "YOLO red LED model needs more training data under varied lighting. Down-cam alignment adjusted 3° forward.",
  },
  {
    date: "2026-08-14",
    hours: 1.5,
    location: "Lake Wauburg — South Dock",
    vehicles: ["prop3"],
    items: [
      "LiDAR rf2o_laser_odometry planar velocity accuracy vs GPS groundtruth",
      "EKF convergence time after GPS fix loss and re-acquisition",
      "PropaGator mission Python script: waypoint nav test — 4 waypoints",
    ],
    notes: "LiDAR odometry drifts ~1.5% over 100 m. GPS re-acquisition takes avg 6 s after 30 s blackout.",
  },
  {
    date: "2026-08-07",
    hours: 2.0,
    location: "MIL Lab — Dry Bench",
    vehicles: ["inv10"],
    items: [
      "FluxGrip FG40 CAN toggle script — on/off latency measured",
      "Here4 GPS module cold-start time indoors (simulated)",
      "OAK-D power draw measurement: 3.8 W idle, 6.2 W under inference",
      "ArduPilot firmware update and parameter review",
    ],
    notes: "OAK-D power draw may be marginal for current battery budget. Pi camera fallback remains primary option.",
  },
  {
    date: "2026-07-31",
    hours: 3.5,
    location: "Flavet Field Pool — Full Width",
    vehicles: ["sub9", "prop3", "inv10"],
    items: [
      "Full SoS integration test — all three vehicles in water simultaneously",
      "SubjuGator → PropaGator → OCS message relay end-to-end",
      "InvestiGator aerial recon of buoy field at 5 m AGL",
      "PropaGator buoy status classification from front-cam feed",
      "Task 1 Safe Passage dry run — Core tier only",
    ],
    notes: "First full SoS integration. Message relay successful. Safe Passage Core run completed in 4:12.",
  },
];
