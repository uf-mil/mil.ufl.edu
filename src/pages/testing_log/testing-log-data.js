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
    date: "2026-09-23",
    hours: 6.0,
    location: "On20 Apartment Pool",
    author: "Russell MacGregor",
    vehicles: ["sub9"],
    items: [
      "Tested new feed-forward controller",
      "Checked how new tubes affected sub's buoyancy",
      "Checked if sub floatation needed to be trimmed to keep sub level",
    ],
    notes: "Feed-forward controller works really well! Carlos wishes we implemented this sooner :D",
  },
  {
    date: "2026-09-23",
    hours: 5.0,
    location: "Lab",
    author: "Russell MMacGregor",
    vehicles: ["prop3"],
    items: [
      "Joe and Dean continued work on localization",
    ],
    notes: "Localization will come from merging data from LiDAR and Infix-V2",
  },
    {
    date: "2026-09-20",
    hours: 12.0,
    location: "Canopy Apartment Pool",
    author: "Russell MacGregor",
    vehicles: ["prop3"],
    items: [
      "localization torture",    
    ],
    notes: "thank you joe, carlos, dean, natalia, ryan, aiden",
  },
  {
    date: "2026-09-19",
    hours: 5.0,
    location: "Drone Testing Park",
    author: "Ethan Mitchell",
    vehicles: ["inv10"],
    items: [
      "There was an error we had to deal with in the beginning that caused the GPS to not talk to the flight controller, but we figured out that I (ethan) had changed some CAN device perams while testing the magnet that prevented that GPS from working correctly. Specifically the param CAN_D1_PROTOCOL needed to be set to 1 for CANDrone and not 10 for scripting.",
      "After this was fixed we were able to test the polygon geofence and show the drone breaking(not leaving) inside a square I made for the test. ",
      "Then Erik was able to get some more practice in manually controlling the drone and was able to land the drone with a white soccer field line between the legs of the drone!!!",
      "I tested my GPS distance condition after that to see if I could give the drone GPS coordinates to fly to and check that it actually went to them which worked perfectly on the first attempt!! This means we are one step closer to getting Task 4 to work on the drone!!",
      "Thank you again to Erik Neff-Flahan and Gabriel Lopez-Garcia for helping with drone development and testing today :)",
    ],
    notes: "Drone did not crash this time 🙌 ",
  },
  {
    date: "2026-09-15",
    hours: 2.0,
    location: "MALA Parking Lot",
    author: "Joe Goodman",
    vehicles: ["prop3"],
    items: [
      "Dean, Carlos, and I dragged the infix as well as the boat's ublox board around a parking lot",
      "we recorded the pose estimates and were able to compare them on a map",
      "it kinda seems like the ublox gps is much better (~20 SV's vs the infixes ~7) than the infixes",
      "in my opinion the final pose estimates are similar in accuracy, but the ublox one lost gps signal less frequently (we were walking besides mala and under trees and in other high interference environments)",
      "we are thinking of taking the best of both worlds: ublox satalite data + infix interital sensors  -------fusion-------> good, stable, pose estimate",
      "so dean carlos and i slaved away 2-7 to get a \"working\" version of that, but lowkey it doesn't work yet. It's \"very\" close",
      "also carlos wrote a starting point for the subs pipeline mission, very early stages but it works in sim",
    ],
    notes: "we are thinking of taking the best of both worlds: ublox satalite data + infix interital sensors  -------fusion-------> good, stable, pose estimate",
  },
  {
    date: "2026-09-13",
    hours: 8.0,
    location: "Canopy Apartment Pool",
    author: "Joe Goodman",
    vehicles: ["prop3"],
    items: [
      "I feel like it was really successful but also have almost nothing to write about",
      "We got a infix -> ros bridge -> robot localization-> tf2 transform working (Meaning the infix is 100% integrated with ros and our sw control stuff, we just need to get it working)",
      "Speaking of the infix we found out that mounting it near the main power bus is a terrible idea. Power events such as kill, unkill, and spinning motors result in visible noise and distortion on the board’s sensors. ",
      "The noise caused from spinning motors made the infix think we were ~40 meters from our current position. After we turned the motors off, the position estimate settled back to a more accurate value",
      "I got a LiDAR -> velocity thing working, needs more testing + hopefully we just don’t need to use it",
      "Got rained on",
      "Got a WiFi jetson driver working so now everything on the boat is connected and has WiFi ",
      "Fought with tam, but it was 5pm so we left",
      "Shout out to Jack, Erik, Ryan, Russell for spending some time cleaning the lab today 🙂",
      "Also Adrian's kill update worked 🙂",
    ],
    notes: "infix should NOT be mounted anywhere near noisy power electronics",
  },
  {
    date: "2026-09-06",
    hours: 10.0,
    location: "Lab",
    author: "Joe Goodman",
    vehicles: ["prop3"],
    items: [
      "At todays long, painful, depressing, 8:25-6:41 testing session with no free food",
      "bow thruster has been added (jack don't look at the wiring)",
      "I blew a 60 amp automotive fuse (boats fine)",
      "dean and I and Carlos \"fixed\" the boats thruster manager",
      "Lidar is now potted and water proof",
      "the next time the boat is in water, we can test the bow thruster and the lidar",
      "Shout out to me, Dean, Ryan, Aiden, and Carlos for showing up on a Sunday after a game to get the boat electrically and mechanically ready"
    ],
    notes: "I was later informed we ARE allowed to order food delivery to the lab",
  },
  {
    date: "2026-08-29",
    hours: 5.0,
    location: "Drone Testing Park",
    author: "Ethan Mitchell",
    vehicles: ["inv10"],
    items: [
        "at today's drone testing session: it crashed 🤯🤯🤯🤯🤯🤯🤯🤯🤯",
        "but............ Emily Diaz-Silva(🐐) and I were able to put it back together with the spare parts and could continue testing!!!",
        "we were able to film the drone in different safety situations including losing connection to the controller, drone breaking (not going past) the geofence, and low battery, which all cause the drone to return to launch.",
        "now there is only one more performance video we need and so more documentation to be filled out and the UAV proof of readiness will be completed!!!",
    ],
    notes: "we need to bring a ton of spare drone parts to competition",
  },
  {
    date: "2026-08-29",
    hours: 7.0,
    location: "On20 Apartment Pool",
    author: "Joe Goodman",
    vehicles: ["sub9"],
    items: [
        "At today’s “the sub is ready to go into the water” testing session",
        "We had the sub do a square test and Ryan H fixed the hydrophones for us. Id like to declare the hydrophones fixed, but we should probably test them more. ",
        "For boat, we recorded some gps data and sent it to some alum for help debugging ",
        "Shout out to Natalia Ray for swimming🐳",
        "Shout out to @Carlos Chavez for driving to the lab 3 total times today",
    ],
    notes: "make sure we have everything before going to testing 😔",
  },
  {
    date: "2026-08-23",
    hours: 5.0,
    location: "Drone Testing Park",
    author: "Ethan Mitchell",
    vehicles: ["inv10"],
    items: [
        "we've been working on getting the materials for the UAV proof of readiness which requires 3 flight patterns for both manual and autonomous control. we were able to get videos of 5/6 of these flight patterns :)) and the only one missing could not be completed since my computer died 😔",
        "there still is the last pattern and proof of saftey systems and some paper work but the progress to complete the UAV proof of readiness is coming along very nicely!!",
        "shoutout to my goat co-pilot @Erik Neff-Flahan  for helping with testing and learning how to fly the drone manually!!",
    ],
    notes: "proof of readiness = proof of pain",
  },
  {
    date: "2026-08-22",
    hours: 10.0,
    location: "Lake Waburg",
    author: "Jack Rainville",
    vehicles: ["prop3"],
    items: [
        "",
    ],
    notes: "",
  },
];


/*
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
*/