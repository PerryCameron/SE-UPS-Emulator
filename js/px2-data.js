let menus = {
  Default: {
    type: "information",
    menu: {
      0: " Volts In  Volts Out",
      1: " L1: 119    L1: 121",
      2: " L2: 118    L2: 121",
      3: " L3: 129    L3: 120",
    },
  },
  "Not Allowed": {
    type: "info-any-press",
    menu: {
      0: "Command not allowed,",
      1: "UPS configured to",
      2: "never shutdown",
      3: "Press any key...",
    },
  },
  "top-menu": {
    type: "all-in-one",
    style: "8",
    menu: {
      0: "UPS",
      1: "Power Dist",
      2: "Switchgear",
      3: "Environment",
      4: "Alarms",
      5: "Log",
      6: "Admin",
      7: "Help",
    },
  },
  "Turn UPS Off": {
    type: "walled-event",
    check: "upsOffAllowed",
    menu: { 0: "Not Allowed" },
  },
  "Reboot UPS": {
    type: "walled-event",
    check: "upsOffAllowed",
    menu: { 0: "Not Allowed" },
  },
  "UPS To Sleep": {
    type: "walled-event",
    check: "upsOffAllowed",
    menu: { 0: "Not Allowed" },
  },
  "YES, Simulate Fail": {
    type: "not-yet-available",
    menu: {
      0: "Not yet Implemented",
      1: "For this Emulator",
      2: "",
      3: "Press any key...",
    },
  },
  "YES, Do Self Test": {
    type: "not-yet-available",
    menu: {
      0: "Not yet Implemented",
      1: "For this Emulator",
      2: "",
      3: "Press any key...",
    },
  },
  "YES, Start Cal": {
    type: "not-yet-available",
    menu: {
      0: "Not yet Implemented",
      1: "For this Emulator",
      2: "",
      3: "Press any key...",
    },
  },
  "UPS Power Control": {
    type: "mode-switch-menu-item",
    menu: {
      0: "Turn UPS Off",
      1: "Reboot UPS",
      2: "UPS Into Bypass",
      3: "UPS To Sleep",
      4: "UPS Out Of Bypass",
    },
  },
  UPS: {
    type: "scroll-down",
    menu: {
      0: "UPS Power Control",
      1: "UPS Status",
      2: "UPS Tests & Diags",
      3: "UPS Configuration",
    },
  },
  "UPS Tests & Diags": {
    type: "scroll-down",
    menu: {
      0: "Diagnostic Tests",
      1: "Power Modules",
      2: "Battery Modules",
      3: "Other Diagnostics",
    },
  },
  "Diagnostic Tests": {
    type: "four-scroll",
    menu: {
      0: "Simulate Power Fail",
      1: "Perform Self Test",
      2: "Start Runtime Cal",
    },
  },
  "Other Diagnostics": {
    type: "scroll-down",
    menu: {
      0: "Main Intel Mod",
      1: "Redundant Intel Mod",
      2: "Frame Status",
      3: "Bypass Switch Mod   }",
      4: "Frame Status",
    },
  },
  "Other Diagnostics": {
    type: "scroll-down",
    menu: {
      0: "Main Intel Mod",
      1: "Redundant Intel Mod",
      2: "Frame Status",
      3: "Bypass Switch Mod   {",
      4: "Frame Status",
    },
  },
  "UPS Status": {
    type: "push-out",
    menu: {
      0: { 0: "Symmetra 100K", 1: "Status: On Line, No", 2: " Alarms Present", 3: "                     {" },
      1: { 0: "data-block", 1: "OutputData" },
      2: { 0: "data-block", 1: "VoltageData" },
      3: { 0: "data-block", 1: "CurrentData" },
      4: { 0: "% load (W/VA) with   ^", 1: "no redundancy", 2: "1  28/31  2  36/38", 3: "3  24/25             {" },
      5: { 0: "% load (W/VA) with   ^", 1: "n+0 redundancy", 2: "1  28/31  2  36/38", 3: "3  24/25             {" },
      6: { 0: "Frequencies (Hz)     ^", 1: "Input: 60.01", 2: "Output: 60.01", 3: "                     {" },
      7: { 0: "Battery Voltages     ^", 1: "Nominal: 192.0", 2: "Actual:  216.4", 3: "                     {" },
      8: { 0: "Battery Modules      ^", 1: "Total: 20  Bad: 0", 2: "Runtime: 28min", 3: "Capacity: 80.4%      {" },
      9: { 0: "Power Modules        ^", 1: "Total: 5   Bad: 0", 2: "Capacity: 50kVA", 3: "Redundancy: n+3      {" },
      10: {
        0: "Last self test       ^",
        1: "Not Available Unknown",
        2: "Last calibration",
        3: "Not Available Unknown{",
      },
      11: { 0: "Last transfer cause: ^", 1: "Detection of low", 2: "utility voltage", 3: "" },
    },
  },
  "NO, ABORT": {
    type: "abort",
    menu: { 0: "" },
  },
  "Power Modules": {
    type: "module-chooser",
    flag: "pre",
    choice: {
      0: { mod: "1", loc: "L2", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240127", mdate: "09/14/23" },
      1: { mod: "2", loc: "L3", Status: "Not Installed", FW: "", HW: "", SN: "", mdate: "" },
      2: { mod: "3", loc: "L4", Status: "Not Installed", FW: "", HW: "", SN: "", mdate: "" },
      3: { mod: "4", loc: "L5", Status: "Not Installed", FW: "", HW: "", SN: "", mdate: "" },
      4: { mod: "5", loc: "L6", Status: "Not Installed", FW: "", HW: "", SN: "", mdate: "" },
      5: { mod: "6", loc: "L7", Status: "Not Installed", FW: "", HW: "", SN: "", mdate: "" },
      6: { mod: "7", loc: "L8", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240134", mdate: "09/14/23" },
      7: { mod: "8", loc: "L9", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240147", mdate: "09/14/23" },
      8: { mod: "9", loc: "L10", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240141", mdate: "09/14/23" },
      9: { mod: "10", loc: "L11", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240140", mdate: "09/14/23" },
    },
    "Raw Status": {
      0: { mod: "1", RS1: "00 00 00 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      1: { mod: "2", RS1: "00 00 00 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      2: { mod: "3", RS1: "00 00 00 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      3: { mod: "4", RS1: "00 00 00 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      4: { mod: "5", RS1: "00 00 00 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      5: { mod: "6", RS1: "07 1F 08 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      6: { mod: "7", RS1: "07 1F 08 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      7: { mod: "8", RS1: "07 1F 08 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      8: { mod: "9", RS1: "07 1F 08 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
      9: { mod: "10", RS1: "07 1F 08 00 00", RS2: "00 00 00 00 00 00", RS3: "00 00 00 00 00" },
    },
    label: "Frame: Main",
    menu: {
      0: "Pwr Mod:",
      1: "Status:",
      2: "Additional Info",
    },
    module: "0",
    mode: "0",
  },
  "Battery Modules": {
    type: "bat-mon-chooser",
    flag: "pre",
    menu: {
      0: "Frame:",
      1: "Bat Mod:",
      2: "Status:",
    },
    frame: {
      0: "Main of 2",
      1: "2 of 2",
    },
    "Bat Mod": {
      0: "NONE",
      1: "/36 ",
    },
    frameChoice: "0",
    batteryChoice: "0",
    module: "0",
  },
  XR1: {
    batteries: {
      0: { sn: "", loc: "L1A", Status: "Not Installed" },
      1: { sn: "", loc: "L1B", Status: "Not Installed" },
      2: { sn: "", loc: "L1C", Status: "Not Installed" },
      3: { sn: "", loc: "L1D", Status: "Not Installed" },
      4: { sn: "", loc: "L2A", Status: "Not Installed" },
      5: { sn: "", loc: "L2B", Status: "Not Installed" },
      6: { sn: "", loc: "L2C", Status: "Not Installed" },
      7: { sn: "", loc: "L2D", Status: "Not Installed" },
      8: { sn: "", loc: "L3A", Status: "Not Installed" },
      9: { sn: "", loc: "L3B", Status: "Not Installed" },
      10: { sn: "", loc: "L3C", Status: "Not Installed" },
      11: { sn: "", loc: "L3D", Status: "Not Installed" },
      12: { sn: "", loc: "L4A", Status: "Not Installed" },
      13: { sn: "", loc: "L4B", Status: "Not Installed" },
      14: { sn: "", loc: "L4C", Status: "Not Installed" },
      15: { sn: "", loc: "L4D", Status: "Not Installed" },
      16: { sn: "PD1346350212", loc: "L5A", Status: "OK" },
      17: { sn: "PD2319941331", loc: "L5B", Status: "OK" },
      18: { sn: "5D2320T37247", loc: "L5C", Status: "OK" },
      19: { sn: "0H2321L00139", loc: "L5D", Status: "OK" },
      20: { sn: "5D2320T37212", loc: "L6A", Status: "OK" },
      21: { sn: "0H2320L00257", loc: "L6B", Status: "OK" },
      22: { sn: "0H2320L03992", loc: "L6C", Status: "OK" },
      23: { sn: "0H2320L00253", loc: "L6D", Status: "OK" },
      24: { sn: "0H2320L00247", loc: "L7A", Status: "OK" },
      25: { sn: "0H2312L11587", loc: "L7B", Status: "OK" },
      26: { sn: "5D2320T46970", loc: "L7C", Status: "OK" },
      27: { sn: "0H2321L00084", loc: "L7D", Status: "OK" },
      28: { sn: "0H2320L00259", loc: "L8A", Status: "OK" },
      29: { sn: "0H2321L00167", loc: "L8B", Status: "OK" },
      30: { sn: "0H2320L00261", loc: "L8C", Status: "OK" },
      31: { sn: "0H2320L00256", loc: "L8D", Status: "OK" },
      32: { sn: "0H2320L00252", loc: "L9A", Status: "OK" },
      33: { sn: "0H2320L00278", loc: "L9B", Status: "OK" },
      34: { sn: "0H2320L00275", loc: "L9C", Status: "OK" },
      35: { sn: "0H2320L03993", loc: "L9D", Status: "OK" },
    },
  },
  "Raw Status Data": {
    type: "raw-status",
    menu: {
      0: "PM:",
      1: "Raw Status",
    },
  },
  "Additional Info": {
    // this made to direct to method tree
    type: "additional-info",
    menu: {
      0: "no use",
      1: "no use",
    },
  },
  "Additional Info PM": {
    type: "labeled-two-choice",
    label: "Frame Main:\nPwr Mod: ",
    data: "Power Modules",
    menu: {
      0: "Manufacturing Data",
      1: "Raw Status Data",
    },
  },
  "Additional Info Frame Status": {
    type: "labeled-two-choice",
    label: "Frame: 2",
    menu: {
      0: "Manufacturing Data",
      1: "Raw Status Data",
    },
  },
  "UPS Into Bypass": {
    type: "labeled-two-choice",
    label: "Confirm:\n UPS Into Bypass?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Into Bypass",
    },
  },
  "UPS Out Of Bypass": {
    type: "labeled-two-choice",
    label: "Confirm:\n UPS Out Of Bypass?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Out Of Bypass",
    },
  },
  "YES, Into Bypass": {
    type: "action-event",
    menu: "Putting UPS into\nbypass.\nPlease Wait...",
    message: "UPS is now in\nbypass\nPress any key...",
    duration: "1500",
    action: "inBypass",
  },
  "YES, Out Of Bypass": {
    type: "action-event",
    menu: "Taking UPS out\n of bypass.\nPlease Wait...",
    message: "UPS is now out\nof bypass\nPress any key...",
    duration: "1500",
    action: "outOfBypass",
  },
  "Simulate Power Fail": {
    type: "labeled-two-choice",
    label: "Confirm:\n Simulate Power Fail?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Simulate Fail",
    },
  },
  "Perform Self Test": {
    type: "labeled-two-choice",
    label: "Confirm:\n Perform Self Test?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Do Self Test",
    },
  },
  "Start Runtime Cal": {
    type: "labeled-two-choice",
    label: "Confirm:\n Start Runtime Cal?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Start Cal",
    },
  },
  VoltageData: {
    input: { 1: "119.3", 2: "119.3", 3: "121.1" },
    bypass: { 1: "119.1", 2: "119.2", 3: "121.0" },
    output: { 1: "121.8", 2: "120.5", 3: "120.9" },
  },
  CurrentData: {
    input: { 1: "47", 2: "48", 3: "48" },
    bypass: { 1: "0.0", 2: "0.0", 3: "0.0" },
    output: { 1: "44", 2: "53", 3: "34" },
    opk: { 1: "74", 2: "84", 3: "56" },
  },
  OutputData: {
    output: { 1: "5.28", 2: "6.47", 3: "4.15" },
  },
  "Manufacturing Data": {
    type: "manufacture-data",
    menu: "none",
  },
  "Manufacturing Data Frame": {
    type: "manufacture-data",
    menu: {
      0: "Frame: 2",
      1: "FW: 03.00     HW: NA",
      2: "SN: 000000000000",
      3: "Mfg Date: 01/01/01",
    },
  },
  "Manufacturing Data MIM": {
    type: "manufacture-data",
    menu: {
      0: "Main Intel Mod",
      1: "FW: 05.20      HW: B",
      2: "SN: QD2312110554",
      3: "Mfg Date: 03/24/23",
    },
  },
  "Manufacturing Data RIM": {
    type: "manufacture-data",
    menu: {
      0: "Main Intel Mod",
      1: "FW: 05.20      HW: B",
      2: "SN: QD2312110536",
      3: "Mfg Date: 03/24/23",
    },
  },
  "Raw Status": {
    menu: "none",
    mim: {
      menu: {
        0: "MIM Raw Status",
        1: "M State = 50 110",
        2: "0000 1110",
        3: "00000 3E0 3E 0000",
      },
    },
    rim: {
      menu: {
        0: "RIM Raw Status",
        1: "M State = 50 110",
        2: "0000 1110",
        3: "00000 3E0 3E 0000",
      },
    },
    frame: {
      menu: {
        0: "Frame: 2 Raw Status",
        1: "000000000000000000 0",
        2: "0000000DD0DD0DD0DD 0",
        3: "0DD0DD0DD0DD0DD0DD 4",
      },
    },
  },
  "Main Intel Mod": {
    type: "labeled-three-choice",
    label: "Main Intel Mod",
    data: "Power Modules",
    menu: {
      0: "Status:On & Ok",
      1: "Manufacturing Data",
      2: "Raw Status Data",
    },
  },
  "Redundant Intel Mod": {
    type: "labeled-three-choice",
    label: "Redundant Intel Mod",
    data: "Power Modules",
    menu: {
      0: "Status:On & Ok",
      1: "Manufacturing Data",
      2: "Raw Status Data",
    },
  },
  "Frame Status": {
    type: "frame-status-menu",
    label: "Bat Modules:",
    menu: {
      0: "Frame: 2 of 2",
      1: "Battery Subsystems",
      2: "Additional Info",
    },
  },
  "Battery Subsystems": {
    type: "push-out",
    menu: {
      0: { 0: "Frame: 2", 1: "Battery Monitor Bds", 2: " #1: OK", 3: " #2: OK              {" },
      1: { 0: "DC Breaker / Fuse:   ^", 1: " Closed", 2: "System Power Supply:", 3: " OK" },
    },
  },
  "Status:On & OK": {
    type: "none",
    label: "none",
    menu: {
      0: "none",
    },
  },
};
