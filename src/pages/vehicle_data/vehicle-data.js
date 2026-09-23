

import sub_bottom from "../../assets/vehicle_photos/subjugator9/sub_bottom.png";
import sub_front from "../../assets/vehicle_photos/subjugator9/sub_front.png";
import sub_ortho from "../../assets/vehicle_photos/subjugator9/sub_ortho.png";

import boat_front from "../../assets/vehicle_photos/propagator3/boat_front.png";
import boat_back from "../../assets/vehicle_photos/propagator3/boat_back.png";
import boat_ortho from "../../assets/vehicle_photos/propagator3/boat_ortho.png";

import drone_ortho from "../../assets/vehicle_photos/investigator10/drone_ortho.png";
import drone_front from "../../assets/vehicle_photos/investigator10/drone_front.png";

import rover_ortho from "../../assets/vehicle_photos/terragator/rover_ortho.png";


export const vehicles = [
  {
    id: "prop3",
    name: "PropaGator3",
    shortName: "ASV",
    type: "Boat",
    tagline: "Autonomous surface vehicle",
    description:
      "Twin-hull pontoon surface vehicle optimized for speedy navigation and tight turns. An off-the-shelf base with custom electronics.",
    specs: {
      Length: "120cm",
      Width: "46cm",
    },
    parts: [
      {
        id: "hull",
        name: "BlueBoat Hull",
        category: "Structure",
        description:
          "Carbon fiber reinforced polymer catamaran hull with wave-piercing bow geometry. Optimized via CFD simulation for minimal drag at transit speed.",
        specs: { "Hull Material": "LDPE", Color: "Mariner Blue", Vendor: "Blue Robotics" },
      },
      {
        id: "front-cam",
        name: "Front Camera",
        category: "Sensors",
        description:
          "Forward-facing cameras enable vision models to identify course elements for completing tasks. A large depth of field simplifies processing required for effective vision model performance.",
        specs: { "Camera": "meow", "Depth of Field": "180deg", Vendor: "dunno" },
      },
      {
        id: "lidar",
        name: "LiDAR",
        category: "Sensors",
        description:
          "A 360deg LiDAR allows PropaGator to identify obstacles before a risk of collision. LiDAR data is merged with the Infix V2 for localization and course navigation.",
        specs: { "Model": "meow", Vendor: "dunno" },
      },
      {
        id: "thrusters",
        name: "M200 Thrusters",
        category: "Propulsion",
        description:
          "2x M200 thrusters with weedless propellers provide the primary propulsion for PropaGator. Due to their position on PropaGator, they help lift the USV out of the water at higher speeds, reducing overall drag.",
        specs: { Motor: "M200", "Peak Current Draw": "24 Amps", "Motor kV": "470 RPM / V", "Max Torque": "0.5Nm", ESC: "Blue Robotics Basic ESC" },
      },
      {
        id: "estop",
        name: "Local E-Stop",
        category: "Safety",
        description:
          "The E-Stop button is one safeguard built into PropaGator's safety systems. If pushed, all motors will instantly be killed regardless of system input.",
        specs: { meow: "meow" },
      },
    ],
    views: [
      {
        id: "front",
        label: "Front View",
        imagePath: boat_front,
        hotspots: [
          { partId: "hull",         x: 10, y: 55 },
          { partId: "front-cam",    x: 50.5, y: 34.5 },
          { partId: "lidar",        x: 50.5, y: 18 },
        ],
      },
      {
        id: "back",
        label: "Back View",
        imagePath: boat_back,
        hotspots: [
          { partId: "hull",         x: 10, y: 55 },
          { partId: "thrusters",    x: 22, y: 77 },
          { partId: "lidar",        x: 50, y: 20 },
          { partId: "estop",        x: 18, y: 48 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: boat_ortho,
        hotspots: [
          { partId: "hull",         x: 45, y: 70 },
          { partId: "estop",        x: 87, y: 44 },
          { partId: "front-cam",    x: 45, y: 39 },
          { partId: "lidar",        x: 50, y: 26 },
          { partId: "thrusters",    x: 94, y: 55 },
        ],
      },
    ],
  },
  {
    id: "sub9",
    name: "SubjuGator9",
    shortName: "AUV",
    type: "Submarine",
    tagline: "Our latest and greatest submarine",
    description:
      "SubjuGator9 is a fully actuated AUV built for the RoboSub and RobotX competitions. Eight Blue Robotics T200 thrusters provide independent control in all axes. An open aluminum frame carries the buoyancy foam, electronics tube, battery system, and sensor payload.",
    specs: {
      Configuration: "Open-frame",
      Thrusters: "8× Blue Robotics T200",
      "Depth Rating": "~30 m",
      Navigation: "DVL + IMU",
      Power: "4S2P 9000mAh LiPo Battery",
      "Kill Switch": "Magnetic",
      "First Year at Competition": "2024",
    },
    parts: [
      {
        id: "frame",
        name: "Aluminum Frame",
        category: "Structure",
        description:
          "Open 6061-T6 aluminum plate-and-extrusion frame. The open architecture allows full water flow for thermal management and provides a modular mounting point for all subsystems.",
        specs: { Material: "Al 6061-T6", Finish: "Anodized", Configuration: "Open-frame", Mounting: "M5 captive nuts" },
      },
      {
        id: "thrusters",
        name: "T200 Thrusters",
        category: "Propulsion",
        description:
          "Eight Blue Robotics T200 thrusters arranged in a vectored configuration: four vertical thrusters for depth and roll/pitch control, four horizontal thrusters for surge, sway, and yaw.",
        specs: { Model: "BR T200", Count: "8×", "Max Thrust": "5.1 kgf ea.", ESC: "BR Basic ESC", Protocol: "PWM" },
      },
      {
        id: "nav-tube",
        name: "Navigation Tube",
        category: "Electronics",
        description:
          "Watertight acrylic tube housing the IMU, connection to the hydrophones, and the Raspberry Pi 4B that accumulates this sensor data and forwards it to Sub9's primary computer within the computer box.",
        specs: { Diameter: "4 in", Seals: "Dual O-ring", "End Caps": "Al 6061", Access: "Forward cap" , Power: "PoE"},
      },
      {
        id: "battery",
        name: "Battery Tube",
        category: "Power",
        description:
          "Sub9's batteries have a dedicated tube external to the primary computer box. Serves as an easy point to change out batteries when recharging is needed. Features a high-current SeaConn connector for an easy waterproof connection.",
        specs: { Chemistry: "LiPo", Voltage: "14.8 V (4S2P)" },
      },
      {
        id: "dvl",
        name: "Doppler Velocity Logger",
        category: "Navigation",
        description:
          "Downward-facing Doppler Velocity Log provides ground-relative velocity estimates for dead-reckoning navigation. Fused with a 9-DOF IMU for full state estimation.",
        specs: { Sensor: "DVL (4-beam)", "Aux IMU": "9-DOF MEMS", Fusion: "EKF", "Update Rate": "up to 100 Hz" },
      },
      {
        id: "hydrophones",
        name: "Hydrophones",
        category: "Navigation",
        description:
          "Allow Sub9 to locate acoustic pingers underwater, critical for navigation towards different tasks.",
        specs: { meow1: ":3", "meow2": ":D", },
      },
      {
        id: "front-cam",
        name: "Front Camera",
        category: "Sensors",
        description:
          "Forward-facing camera for vision models. Critical for most vision-related tasks.",
        specs: { "Camera Model": "Blue Robotics Underwater HD Camera", },
      },
      {
        id: "down-cam",
        name: "Down Camera",
        category: "Sensors",
        description:
          "Downward camera for target acquisition on the course floor.",
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
        imagePath: sub_bottom,
        hotspots: [
          { partId: "thrusters",         x: 25, y: 27 },
          { partId: "frame",             x: 49, y: 47 },
          { partId: "dvl",               x: 63, y: 51 },
          { partId: "buoyancy",          x: 85, y: 80 },
          { partId: "battery",           x: 50, y: 26 },
          { partId: "down-cam",          x: 31, y: 41 },
          { partId: "hydrophones",       x: 20, y: 58 },
        ],
      },
      {
        id: "front",
        label: "Front View",
        imagePath: sub_front,
        hotspots: [
          { partId: "nav-tube",          x: 50, y: 50 },
          { partId: "thrusters",         x: 10, y: 50 },
          { partId: "front-cam",         x: 53, y: 65 },
          { partId: "down-cam",          x: 60, y: 85 },
          { partId: "buoyancy",          x: 50, y: 33 },
          { partId: "frame",             x: 84, y: 55 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: sub_ortho,
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
    id: "investigator10",
    name: "InvestiGator10",
    shortName: "USV",
    type: "Drone",
    tagline: "Autonomous Surveying & Monitoring Vehicle",
    description:
      "Built compact but strong, capable of carrying multiple batteries and mechanisms.",
    specs: {
      Geofence: "Custom Polygon",
      "Mission Planner": "Custom",
      "Flight Time": "20 mins",
      "Comm Range": "2 km",
      "Depth Rating": "Surface",
    },
    parts: [
      {
        id: "frame",
        name: "X650 Frame Kit",
        category: "Structure",
        description:
          "A carbon fiber and stainless steel frame provides InvestiGator with a strong, modular body.",
        specs: { Manufacturer: "Holybro", },
      },
      {
        id: "magnet",
        name: "Electromagnet",
        category: "Mechanism",
        description:
          "A toggleable electromagnet allows InvestiGator to pick up and move objects throughout the competition course. Its toggle topology reduces its current draw, increasing InvestiGator's flight time.",
        specs: { Manufacturer: "dunno", "Communication Interface": "CANBUS" },
      },
      {
        id: "raspberry-pi",
        name: "Raspberry Pi",
        category: "Electronics",
        description:
          "A Raspberry Pi 5 serves as the primary computer on InvestiGator. This device takes in sensor and flight controller data from the CubePilot Orange+ and commands InvestiGator's ESCs.",
        specs: { RAM: "-16GB", Software: ":3" },
      },
      {
        id: "cubepilot",
        name: "CubePilot Orange+",
        category: "Sensors",
        description:
          "The CubePilot Orange+ is InvestiGator's flight controller. This device fuses data from three high-precision IMUs and determines what to do next based on the msision being run.",
        specs: { meow: "cat", },
      },
      {
        id: "radio-modem",
        name: "RFD900x Radio Modem",
        category: "Communication",
        description:
          "The RFD900x is the primary radio between InvestiGator and MIL's Operator Control Station (OCS). This device can also be used to communicate with PropaGator3.",
        specs: { meow: "cat", },
      },
      {
        id: "battery",
        name: "6S2P LiPo Battery",
        category: "Power",
        description:
          "PropaGator hosts a large LiPo which powers all onboard electronics, mechanisms, and motors.",
        specs: { Chemistry: "LiPo", Voltage: "22.2V (6S2P)" },
      },
    ],
    views: [
      {
        id: "front",
        label: "Front View",
        imagePath: drone_front,
        hotspots: [
          { partId: "frame",             x: 44, y: 55 },
          { partId: "magnet",            x: 54, y: 78 },
          { partId: "raspberry-pi",      x: 54, y: 42 },
          { partId: "cubepilot",         x: 54, y: 36 },
          { partId: "radio-modem",       x: 60, y: 36 },
          { partId: "battery",           x: 54, y: 48 },
        ],
      },
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: drone_ortho,
        hotspots: [
          { partId: "frame",             x: 48, y: 50 },
          { partId: "magnet",            x: 51, y: 90 },
          { partId: "radio-modem",       x: 56, y: 54 },
        ],
      },
    ],
  },
  /*
  {
    id: "terragator",
    name: "TerraGator",
    shortName: "Rover",
    type: "Rover",
    tagline: "Mars Rover",
    description:
      "the best vehicle.",
    specs: {
      Purpose: "dunno",
      Architecture: "mystery",
      "Lore": "Unfathomable",
    },
    parts: [
      {
        id: "frame",
        name: "frame",
        category: "Structure",
        description:
          "ARG.",
        specs: { Material: "HDPE + GF ribs", Weight: "28 kg", Freeboard: "0.35 m", "UV Stable": "Yes" },
      },
    ],
    views: [
      {
        id: "ortho",
        label: "Orthographic",
        imagePath: rover_ortho,
        hotspots: [
          { partId: "monohull",     x: 50, y: 55 },
          { partId: "stern-drive",  x: 50, y: 85 },
          { partId: "survey-suite", x: 50, y: 28 },
          { partId: "comms-mast",   x: 65, y: 40 },
          { partId: "gen-power",    x: 35, y: 60 },
        ],
      },
    ],
  },
  */
];
