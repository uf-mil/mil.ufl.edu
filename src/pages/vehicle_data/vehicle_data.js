
import sub_images from "../../assets/vehicle_photos/subjugator9";

export const vehicles = [
  {
    id: "asv-mk2",
    name: "ASV Mk.II",
    shortName: "ASV",
    type: "Autonomous Surface Vehicle",
    tagline: "Long-Endurance Surface Reconnaissance",
    description:
      "Twin-hull autonomous surface vehicle designed for persistent coastal monitoring. Capable of 72-hour autonomous missions with AI-guided obstacle avoidance and multi-modal sensor fusion.",
    specs: {
      Length: "2.4 m",
      Beam: "1.1 m",
      Draft: "0.18 m",
      "Max Speed": "4.2 kn",
      Endurance: "72 hr",
      Payload: "12 kg",
      "Comm Range": "15 km LOS",
      "Depth Rating": "Surface",
    },
    parts: [
      {
        id: "hull",
        name: "Hydrodynamic Hull",
        category: "Structure",
        description:
          "Carbon fiber reinforced polymer catamaran hull with wave-piercing bow geometry. Optimized via CFD simulation for minimal drag at transit speed.",
        specs: { Material: "CFRP", Weight: "4.2 kg", "Drag Coeff.": "0.031", "IP Rating": "IP68" },
      },
      {
        id: "propulsion",
        name: "Propulsion Module",
        category: "Propulsion",
        description:
          "Dual brushless DC thruster pods with hydrodynamically optimized propellers. Independent port/starboard control enables zero-radius turning.",
        specs: { Thrust: "18 N ea.", Power: "180 W ea.", RPM: "0–3600", Protocol: "PWM / CAN" },
      },
      {
        id: "sensor-array",
        name: "Sensor Array",
        category: "Sensors",
        description:
          "Forward-facing sensor mast with stereo RGB cameras, LIDAR, and mmWave radar for autonomous navigation and target detection.",
        specs: { LIDAR: "32-ch, 200 m", Camera: "4K stereo", Radar: "76 GHz mmWave", Update: "20 Hz" },
      },
      {
        id: "avionics",
        name: "Avionics Bay",
        category: "Electronics",
        description:
          "Waterproof avionics enclosure housing the mission computer, GNSS receiver, IMU, and communication radios. Triple-redundant power regulation.",
        specs: { CPU: "ARM Cortex-A72", RAM: "8 GB", GNSS: "RTK ±2 cm", "Data Link": "900 MHz / LTE" },
      },
      {
        id: "power",
        name: "Power System",
        category: "Power",
        description:
          "Hot-swappable lithium-polymer battery pack with onboard BMS, state-of-charge telemetry, and thermal management.",
        specs: { Capacity: "22 Ah / 44.4 V", Chemistry: "LiPo", BMS: "Active balancing", Cycles: ">500" },
      },
    ],
    views: [
      {
        id: "top",
        label: "Top View",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "hull",         x: 50, y: 60 },
          { partId: "propulsion",   x: 50, y: 85 },
          { partId: "sensor-array", x: 50, y: 18 },
          { partId: "avionics",     x: 65, y: 45 },
          { partId: "power",        x: 35, y: 45 },
        ],
      },
      {
        id: "front",
        label: "Front View",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "hull",         x: 50, y: 65 },
          { partId: "sensor-array", x: 50, y: 20 },
          { partId: "avionics",     x: 65, y: 40 },
          { partId: "power",        x: 35, y: 40 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "hull",         x: 45, y: 60 },
          { partId: "propulsion",   x: 20, y: 75 },
          { partId: "sensor-array", x: 72, y: 20 },
          { partId: "avionics",     x: 55, y: 42 },
          { partId: "power",        x: 38, y: 50 },
        ],
      },
    ],
  },
  {
    id: "auv-delta",
    name: "SubjuGator",
    shortName: "AUV",
    type: "Autonomous Underwater Vehicle",
    tagline: "Full 6-DOF Competition AUV",
    description:
      "SubjuGator is a fully actuated 6-DOF AUV built for the RoboSub competition. Eight Blue Robotics T200 thrusters provide independent control in all axes. An open aluminum frame carries the buoyancy foam, electronics tube, battery system, and sensor payload.",
    specs: {
      Configuration: "Open-frame",
      DOF: "6 (full actuation)",
      Thrusters: "8× BR T200",
      "Depth Rating": "~30 m",
      Navigation: "DVL + IMU",
      Power: "14.8 V LiPo",
      "Kill Switch": "Magnetic",
      Team: "Machine Intelligence Lab",
    },
    parts: [
      {
        id: "frame",
        name: "Aluminum Frame",
        category: "Structure",
        description:
          "Open 6061-T6 aluminum plate-and-extrusion frame. The open architecture allows full water flow for thermal management and provides mounting points for all subsystems.",
        specs: { Material: "Al 6061-T6", Finish: "Anodized", Configuration: "Open-frame", Mounting: "M5 captive nuts" },
      },
      {
        id: "thrusters",
        name: "Thruster Array",
        category: "Propulsion",
        description:
          "Eight Blue Robotics T200 thrusters arranged in a vectored configuration: four vertical thrusters for depth and roll/pitch control, four horizontal thrusters for surge, sway, and yaw.",
        specs: { Model: "BR T200", Count: "8×", "Max Thrust": "5.1 kgf ea.", ESC: "BR Basic ESC", Protocol: "PWM" },
      },
      {
        id: "electronics-tube",
        name: "Electronics Pressure Vessel",
        category: "Electronics",
        description:
          "Watertight acrylic tube housing the mission computer, motor controllers, power distribution board, and sensor interfaces. Sealed with aluminum end caps and dual O-rings at each penetrator.",
        specs: { Diameter: "4 in", Seals: "Dual O-ring", "End Caps": "Al 6061", Access: "Forward cap" },
      },
      {
        id: "battery",
        name: "Battery System",
        category: "Power",
        description:
          "Orange watertight enclosure housing the main LiPo battery packs. Provides both power storage and a significant portion of the vehicle's positive buoyancy. Includes a waterproof XT90 connector and magnetic kill switch.",
        specs: { Chemistry: "LiPo", Voltage: "14.8 V (4S)", "Kill Switch": "Magnetic reed", Connector: "XT90 waterproof" },
      },
      {
        id: "dvl",
        name: "DVL & Navigation",
        category: "Navigation",
        description:
          "Downward-facing Doppler Velocity Log provides ground-relative velocity estimates for dead-reckoning navigation. Fused with a 9-DOF IMU for full state estimation.",
        specs: { Sensor: "DVL (4-beam)", "Aux IMU": "9-DOF MEMS", Fusion: "EKF", "Update Rate": "up to 100 Hz" },
      },
      {
        id: "vision",
        name: "Vision & Sonar",
        category: "Sensors",
        description:
          "Forward-facing stereo camera pair for visual servoing and task recognition. Downward camera for target acquisition on the pool floor. Optional forward-looking sonar for acoustic landmark detection.",
        specs: { Forward: "Stereo RGB", Downward: "Single RGB", Sonar: "Forward-look", Processing: "Onboard GPU" },
      },
      {
        id: "buoyancy",
        name: "Buoyancy Foam",
        category: "Structure",
        description:
          "Custom-cut closed-cell polyethylene foam blocks mounted at the four upper corners of the frame. Tuned to achieve slightly positive buoyancy so the vehicle surfaces passively on a kill-switch event.",
        specs: { Material: "Closed-cell PE", "Net Buoyancy": "Slightly positive", Mounting: "Bolted brackets", Color: "Safety orange" },
      },
    ],
    views: [
      {
        id: "bottom",
        label: "Bottom View",
        imagePath: sub_images["sub_bottom.png"],
        hotspots: [
          { partId: "thrusters",         x: 13, y: 14 },
          { partId: "frame",             x: 50, y: 47 },
          { partId: "dvl",               x: 21, y: 51 },
          { partId: "buoyancy",          x: 87, y: 57 },
          { partId: "electronics-tube",  x: 50, y: 12 },
          { partId: "vision",            x: 65, y: 44 },
        ],
      },
      {
        id: "front",
        label: "Front View",
        imagePath: sub_images["sub_front.png"],
        hotspots: [
          { partId: "battery",           x: 50, y: 29 },
          { partId: "electronics-tube",  x: 50, y: 47 },
          { partId: "thrusters",         x: 8,  y: 48 },
          { partId: "vision",            x: 50, y: 65 },
          { partId: "buoyancy",          x: 27, y: 84 },
          { partId: "frame",             x: 75, y: 55 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: sub_images["sub_ortho.png"],
        hotspots: [
          { partId: "battery",           x: 47, y: 21 },
          { partId: "frame",             x: 44, y: 57 },
          { partId: "thrusters",         x: 13, y: 53 },
          { partId: "electronics-tube",  x: 63, y: 30 },
          { partId: "dvl",               x: 38, y: 73 },
          { partId: "buoyancy",          x: 82, y: 68 },
        ],
      },
    ],
  },
  {
    id: "usv-harbor",
    name: "USV Harbor",
    shortName: "USV",
    type: "Unmanned Survey Vessel",
    tagline: "Port & Harbor Intelligence Platform",
    description:
      "Compact unmanned survey vessel purpose-built for port security, bathymetric charting, and environmental monitoring in confined waterways.",
    specs: {
      Length: "3.2 m",
      Beam: "1.4 m",
      Draft: "0.22 m",
      "Max Speed": "6.5 kn",
      Endurance: "48 hr",
      Payload: "25 kg",
      "Comm Range": "30 km",
      "Depth Rating": "Surface",
    },
    parts: [
      {
        id: "monohull",
        name: "Survey Monohull",
        category: "Structure",
        description:
          "Injection-molded high-density polyethylene monohull with internal reinforcement ribs. Designed for repeated beaching and shallow-water deployment.",
        specs: { Material: "HDPE + GF ribs", Weight: "28 kg", Freeboard: "0.35 m", "UV Stable": "Yes" },
      },
      {
        id: "stern-drive",
        name: "Stern Drive Unit",
        category: "Propulsion",
        description:
          "Diesel-electric stern drive with articulating nozzle for tight-space maneuvering. Direct integration with the vessel management system.",
        specs: { Type: "Diesel-electric", Power: "4 kW", Nozzle: "±35°", Fuel: "10 L diesel" },
      },
      {
        id: "survey-suite",
        name: "Survey Sensor Suite",
        category: "Sensors",
        description:
          "Integrated survey package including single-beam echosounder, water quality sonde, and GNSS antenna array for precise georeferencing.",
        specs: { Echo: "200 kHz SBS", GNSS: "L1/L2 + L5", "Water Quality": "7-param sonde", Georef: "RTK ±3 cm" },
      },
      {
        id: "comms-mast",
        name: "Communications Mast",
        category: "Electronics",
        description:
          "Retractable communications mast with AIS transponder, VHF radio, cellular LTE modem, and maritime satcom terminal.",
        specs: { AIS: "Class B", VHF: "Ch 1–88", LTE: "Cat-M1", Satcom: "Iridium Certus" },
      },
      {
        id: "gen-power",
        name: "Generator & Power Bus",
        category: "Power",
        description:
          "Onboard diesel generator with 48 V DC power bus, smart load management, and shore-power charging interface.",
        specs: { Generator: "2 kW diesel", Bus: "48 V DC", "Shore Power": "230 V AC", Monitoring: "CAN bus" },
      },
    ],
    views: [
      {
        id: "top",
        label: "Top View",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "monohull",     x: 50, y: 55 },
          { partId: "stern-drive",  x: 50, y: 85 },
          { partId: "survey-suite", x: 50, y: 28 },
          { partId: "comms-mast",   x: 65, y: 40 },
          { partId: "gen-power",    x: 35, y: 60 },
        ],
      },
      {
        id: "side",
        label: "Side View",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "monohull",     x: 50, y: 65 },
          { partId: "stern-drive",  x: 82, y: 72 },
          { partId: "survey-suite", x: 35, y: 38 },
          { partId: "comms-mast",   x: 55, y: 18 },
          { partId: "gen-power",    x: 60, y: 55 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: sub_ortho,
        hotspots: [
          { partId: "monohull",     x: 48, y: 58 },
          { partId: "stern-drive",  x: 25, y: 75 },
          { partId: "survey-suite", x: 60, y: 28 },
          { partId: "comms-mast",   x: 68, y: 18 },
          { partId: "gen-power",    x: 42, y: 52 },
        ],
      },
    ],
  },
];
