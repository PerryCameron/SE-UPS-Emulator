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
    type: "labeled-two-choice",
    label: "Frame Main:\nPwr Mod: ",
    data: "Power Modules",
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
    im: "Main Intel Mod\nFW: 05.20     HW: B\nSN: QD2312110554\nMfg Date: 03/24/23",
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
};

let screen = [0, 3];
let toggle = false;
let isScrollDownMenu = false;
let inBypass = false;
let inSelfTest = false;
let anyKeyPress = false; // when ever it says press any key...
let upsOffAllowed = false;
let escapeDisable = false;
let returnDisable = false;
let helpDisable = false;
let cursorPosition = 0;
let choicePosition = 0;
let menuSize = 0;
let menuLevel = 0;
let preEditMode = false;
let editMode = false;
let intervalId = null;
let lastMenu = ["Default", "top-menu", "level 2", "level 3", "level 4", "level 5", "level 6", "level 7"];
let selectedObject = menus["Default"];
let textarea = document.createElement("textarea");
textarea.className = "screen-area";

document.addEventListener("DOMContentLoaded", () => {
  powerOn();
  setMenu(lastMenu[0], 0);
});

// Load the beep sound when the page loads
window.onload = function () {
  loadBeepSound("trimbeep.mp3");
};

function displayScreen() {
  stopAlternating();
  let onScreen = selectedObject["menu"]["0"] + "\n";
  onScreen += selectedObject["menu"]["1"] + "\n";
  onScreen += selectedObject["menu"]["2"] + "\n";
  onScreen += selectedObject["menu"]["3"] + "\n";
  return onScreen;
}

function printMenus() {
  console.clear();
  console.log("Menu Levels, current: " + menuLevel);
  console.log("0:" + lastMenu[0]);
  console.log("1:" + lastMenu[1]);
  console.log("2:" + lastMenu[2]);
  console.log("3:" + lastMenu[3]);
  console.log("4:" + lastMenu[4]);
  console.log("5:" + lastMenu[5]);
  console.log("6:" + lastMenu[6]);
  console.log("7:" + lastMenu[7]);
  console.log(
    "toggle: " + toggle + " inBypass:" + inBypass + " inSelfTest:" + inSelfTest + " anyKeyPress: " + anyKeyPress
  );
  console.log("cursorPosition:" + cursorPosition + " choicePosition" + choicePosition + "menuSize:" + menuSize);
  console.log("menuLevel:" + menuLevel + " preEditMode:" + preEditMode + " editMode:" + editMode);
}

function isAScrollDownMenu(menuKey) {
  if (menus[menuKey]["type"] === "scroll-down") return true;
  else return false;
}

function startAlternating() {
  if (intervalId === null) {
    intervalId = setInterval(function () {
      textarea.value = toggle ? drawScreen(true) : drawScreen(false);
      alternateFunction();
      toggle = !toggle;
    }, 300);
  }
}

function alternateFunction() {
  if (inBypass) {
    if (toggle) changeLight("light-orange", "light2");
    else changeLight("light-off", "light2");
  }
}

function stopAlternating() {
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function upButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else if (editMode) handleEditMode("up");
  else {
    if (isScrollDownMenu) moveScreen("up"); // virtual screen
    else moveArrow("up");
  }
}

function downButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else if (editMode) handleEditMode("down");
  else {
    if (isScrollDownMenu) moveScreen("down"); // virtual screen of 4 lines
    else moveArrow("down");
  }
}

function drawScreen(includeCursor) {
  // below line of code fixes a bug where if you went into a menu that set
  // preEditMode to true and if you exited, you couldn't drill down into
  // any other menus. This fixes that issue but needed document because this is
  // a super ugly hack, but it works and I am going to keep it
  if (preEditMode & (selectedObject["flag"] != "pre")) preEditMode = false;
  switch (selectedObject["type"]) {
    case "all-in-one":
      return allInOneScreen(includeCursor);
    // case "labeled-all-in-one":
    //   return labledAllInOneScreen(includeCursor);
    case "scroll-down":
      return scrollDownScreen(includeCursor);
    case "labeled-two-choice":
      return labeledTwoChoiceScreen(includeCursor);
    case "action-event":
      return actionEvent();
    case "information":
      return displayScreen();
    case "push-out":
      return pushOutScreen();
    // case "editable-choice":
    //   return editableChoiceScreen();
    case "walled-event":
      return walledEvent();
    case "abort":
      return abortAction();
    case "not-yet-available":
      return notAvailableYetScreen();
    case "module-chooser":
      return moduleChooserScreen(includeCursor);
    case "manufacture-data":
      return manufactureDataScreen();
    case "raw-status":
      return rawStatusDataScreen();
    case "bat-mon-chooser":
      return batMonChooserScreen(includeCursor);
    case "mode-switch-menu-item":
      return modeSwitchMenuItemScreen(includeCursor);
    case "four-scroll":
      return fourScrollScreen(includeCursor);
    case "labeled-three-choice":
      return labeledThreeChoiceScreen(includeCursor);
    default:
      return scrollDownScreen(includeCursor);
  }
}

function walledEvent() {
  if (!window[selectedObject["check"]]) setMenu("Not Allowed", 5);
  anyKeyPress = true;
  return displayScreen();
  // else it is allowed and we have to make functionality for this
}

function handleAnyKeyPress() {
  console.log("handle any key press");
  switch (lastMenu[menuLevel]) {
    // case "Yes, UPS into Bypass":
    //   console.log("case 1");
    //   setMenu("ControlInBypass", 2);
    //   break;
    // case "Yes, UPS Out Of Byp":
    //   console.log("case 2");
    //   setMenu("top-menu", 2);
    //   break;
    case "Not Allowed":
      console.log("got to not allowed");
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      break;
    default:
      setMenu("top-menu", 2);
  }
  // console.log("You pressed a key");
  // console.log(selectedObject);
  // console.log(lastMenu);
  anyKeyPress = false;
}

function setEvent() {
  switch (selectedObject["action"]) {
    case "inBypass":
      console.log("event into bypass");
      changeLight("light-orange", "light6");
      inBypass = true;
      anyKeyPress = true;
      break;
    case "outOfBypass":
      textarea.value = selectedObject["message"];
      changeLight("light-green", "light2");
      changeLight("light-off", "light6");
      inBypass = false;
      anyKeyPress = true;
      break;
    case "selfTest":
      textarea.value = selectedObject["message"];
      changeLight("light-orange", "light4");
      runSelfTest();
      break;
  }
}

function runSelfTest() {
  console.log("Running selftest for: " + selectedObject["period"]);
  inSelfTest = true;
  setTimeout(() => changeLight("light-off", "light4"), selectedObject["period"]);
}

function changeLight(changeTo, light) {
  document.getElementById(light).classList.remove("light-green");
  document.getElementById(light).classList.remove("light-off");
  document.getElementById(light).classList.remove("light-orange");
  document.getElementById(light).classList.remove("light-red");
  document.getElementById(light).classList.add(changeTo);
}

function actionEvent() {
  setTimeout(setEvent, selectedObject["duration"]);
  if (inBypass) return selectedObject["message"];
  else if (!inBypass & (selectedObject["action"] === "outOfBypass")) return selectedObject["message"];
  return selectedObject["menu"];
}

function editableChoiceScreen() {
  let onScreen = "";
  let d = selectedObject["menu"]["choices"]["date"];
  let t = selectedObject["menu"]["choices"]["time"];
  switch (selectedObject["subType"]) {
    case "date-time":
      onScreen = " Date:  " + d[0] + "-" + d[1] + "-" + d[2] + "\n";
      onScreen += " Time:    " + t[0] + ":" + t[1] + ":" + t[2];
      break;
  }
  return onScreen;
}

function notAvailableYetScreen() {
  anyKeyPress = 1;
  console.log("notAvailableYetScreen()");
  console.log(selectedObject);
  return displayScreen();
}

function labeledTwoChoiceScreen(includeCursor) {
  menuSize = 2;
  let moduleNumber = menus["Power Modules"]["module"];
  let module = menus["Power Modules"]["choice"][moduleNumber];
  let cursor = [" ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = selectedObject["label"];
  if (selectedObject["data"] === "Power Modules") {
    onScreen += module["mod"] + " at " + module["loc"];
  }
  onScreen += "\n" + cursor[0] + selectedObject["menu"][0] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1];
  return onScreen;
}

function labeledThreeChoiceScreen(includeCursor) {
  menuSize = 3;
  let cursor = [" ", " ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = selectedObject["label"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"][0] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2];
  return onScreen;
}

// five or more items
function selectCursor(includeCursor, cursor) {
  if (includeCursor) {
    switch (cursorPosition) {
      case screen[0]:
        cursor[0] = ">";
        break;
      case screen[0] + 1:
        cursor[1] = ">";
        break;
      case screen[0] + 2:
        cursor[2] = ">";
        break;
      case screen[0] + 3:
        cursor[3] = ">";
        break;
    }
  }
}

// changes menu when static switch is on "UPS Power Control"
function modeSwitchMenuItemScreen(includeCursor) {
  menuSize = 4;
  let cursor = [" ", " ", " ", " "];
  selectCursor(includeCursor, cursor);
  let onScreen = cursor[0] + selectedObject["menu"][screen[0]] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][screen[0] + 1] + "\n";
  if (inBypass && selectedObject["menu"][screen[0] + 2] === "UPS Into Bypass")
    onScreen += cursor[2] + selectedObject["menu"][screen[0] + 4] + "\n";
  else onScreen += cursor[2] + selectedObject["menu"][screen[0] + 2] + "\n";
  onScreen += cursor[3] + selectedObject["menu"][screen[0] + 3] + "\n";
  return onScreen;
}

// four or more items
function scrollDownScreen(includeCursor) {
  let cursor = [" ", " ", " ", " "];
  selectCursor(includeCursor, cursor);
  let onScreen = cursor[0] + selectedObject["menu"][screen[0]] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][screen[0] + 1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][screen[0] + 2] + "\n";
  onScreen += cursor[3] + selectedObject["menu"][screen[0] + 3] + "\n";
  return onScreen;
}

// four or less items
function fourScrollScreen(includeCursor) {
  let cursor = [" ", " ", " ", " "];
  selectCursor(includeCursor, cursor);
  let onScreen = cursor[0] + selectedObject["menu"][screen[0]] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][screen[0] + 1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][screen[0] + 2] + "\n";
  if (selectedObject["menu"][3] != undefined) onScreen += cursor[3] + selectedObject["menu"][screen[0] + 3] + "\n";
  else onScreen += "";
  return onScreen;
}

function rawStatusDataScreen() {
  let onScreen = "";
  if (lastMenu[5] === "Additional Info") {
    let moduleNumber = menus["Power Modules"]["module"];
    let module = menus["Power Modules"]["Raw Status"][moduleNumber];
    onScreen = "PM: " + moduleNumber + " Raw Status\n";
    onScreen += module["RS1"] + "\n";
    onScreen += module["RS2"] + "\n";
    onScreen += module["RS3"] + "\n";
  } else if (lastMenu[5] === "Main Intel Mod") {
    onScreen = "MIM Raw Status\n";
    onScreen += "M State = 50 110\n";
    onScreen += "0000 1110\n";
    onScreen += "00000 #E0 3E 0000";
  } else if (lastMenu[5] === "Redundant Intel Mod") {
    onScreen = "MIM Raw Status\n";
    onScreen += "M State = 50 110\n";
    onScreen += "0000 1110\n";
    onScreen += "00000 3E0 3E 0000";
  }
  return onScreen;
}

function manufactureDataScreen() {
  let onScreen = "";
  if (lastMenu[5] === "Main Intel Mod") {
    onScreen = menus["Manufacturing Data"]["im"];
  } else if (lastMenu[5] === "Additional Info") {
    let moduleNumber = menus["Power Modules"]["module"];
    let module = menus["Power Modules"]["choice"][moduleNumber];
    onScreen = "PM: " + module["mod"] + " Frame: Main\n";
    onScreen += "FW: " + module["FW"] + "     HW: " + module["HW"] + "\n";
    onScreen += "SN: " + module["SN"] + "\n";
    onScreen += "Mfg Date: " + module["mdate"] + "\n";
  } else if (lastMenu[6] === "Redundant Intel Mod") {
    onScreen = "Redundant Intel Mod\n";
    onScreen += "FW: 05.20      HW: B\n";
    onScreen += "SN: QD2312110536\n";
    onScreen += "Mfg Date: 03/24/23";
  }
  return onScreen;
}

// provides funtionality for power module diagnostic tests
function moduleChooserScreen(includeCursor) {
  menuSize = 3;
  let moduleChoice = selectedObject["module"];
  let module = selectedObject["choice"][moduleChoice];
  let cursor = [" ", " ", " "];
  let arrowCursor = [" ", " ", " "];
  if (includeCursor) {
    switch (cursorPosition) {
      case 0:
        returnDisable = false;
        preEditMode = true; // probably put to false under escape
        editMode ? (arrowCursor[0] = "}") : (cursor[0] = ">");
        escapeDisable = false;
        break;
      case 1:
        cursor[1] = ">";
        escapeDisable = true;
        returnDisable = true;
        break;
      case 2:
        returnDisable = false;
        preEditMode = false;
        editMode = false;
        cursor[2] = ">";
        escapeDisable = false;
        break;
    }
  } else if (editMode === true) {
    if (choicePosition > 9) choicePosition = 0; // reset us back around (should be choice length -1)
    selectedObject["module"] = choicePosition; // choicePosition is global !!!READ THIS TO UNDERSTAND!!!
  }
  let onScreen = selectedObject["label"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"][0] + arrowCursor[0] + module["mod"] + "of10 " + module["loc"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + " " + module["Status"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2] + "\n";
  return onScreen;
}

// provides functionality for the battery diagnostic tests
function batMonChooserScreen(includeCursor) {
  menuSize = 3;
  // makes sure choicePosition does not go out of range
  if (editMode === true && choicePosition > 36) choicePosition = 0;
  if (cursorPosition === 0) selectedObject["frameChoice"] = choicePosition % 2 === 0 ? 0 : 1;
  let batteryChoice = selectedObject["Bat Mod"][selectedObject["frameChoice"]];
  let cursor = [" ", " ", " "];
  let arrowCursor = [" ", " ", " "];
  if (includeCursor) {
    switch (cursorPosition) {
      case 0:
        returnDisable = false;
        preEditMode = true; // probably put to false under escape
        editMode ? (arrowCursor[0] = "}") : (cursor[0] = ">");
        escapeDisable = false;
        break;
      case 1:
        returnDisable = false;
        preEditMode = true; // probably put to false under escape
        editMode ? (arrowCursor[1] = "}") : (cursor[1] = ">");
        escapeDisable = false;
        break;
      case 2:
        returnDisable = true;
        preEditMode = false;
        editMode = false;
        cursor[2] = ">";
        escapeDisable = false;
        break;
    }
  }
  let location = menus["XR1"]["batteries"][choicePosition + 1]["loc"];
  let onScreen = cursor[0] + "Frame:" + arrowCursor[0] + selectedObject["frame"][selectedObject["frameChoice"]] + "\n";
  if (batteryChoice !== "NONE") {
    onScreen += cursor[1] + "Bat Mod:" + arrowCursor[1] + choicePosition + batteryChoice + " " + location + "\n";
    onScreen += cursor[2] + "Status:" + " " + menus["XR1"]["batteries"][choicePosition + 1]["Status"] + "\n";
  } else {
    onScreen += cursor[1] + "Bat Mod:" + " " + batteryChoice + "\n";
    onScreen += cursor[2] + "Status:" + " Not Valid\n";
  }
  return onScreen;
}

function pushOutScreen() {
  if (selectedObject["menu"][cursorPosition][0] === "data-block") return dataFedScreen();
  let onScreen = selectedObject["menu"][cursorPosition]["0"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["1"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["2"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["3"] + "\n";
  return onScreen;
}

function dataFedScreen() {
  let onScreen = "\nNo Data To Show";
  let dataMenu = selectedObject["menu"][cursorPosition][1];
  let i = menus[dataMenu]["input"];
  let b = menus[dataMenu]["bypass"];
  let o = menus[dataMenu]["output"];
  let p = menus[dataMenu]["opk"];
  switch (dataMenu) {
    case "VoltageData":
      onScreen = "L Vin   Vbyp  Vout   ^\n";
      onScreen += "1 " + i[1] + " " + b[1] + " " + o[1] + "\n";
      onScreen += "2 " + i[2] + " " + b[2] + " " + o[2] + "\n";
      onScreen += "3 " + i[3] + " " + b[3] + " " + o[3] + "  {\n";
      break;
    case "CurrentData":
      onScreen = "L   Iin  Iout  Iopk  ^\n";
      onScreen += "1    " + i[1] + "    " + o[1] + "    " + p[1] + "\n";
      onScreen += "2    " + i[2] + "    " + o[2] + "    " + p[2] + "\n";
      onScreen += "3    " + i[3] + "    " + o[3] + "    " + p[3] + "  {";
      break;
    case "OutputData":
      onScreen = "Output load (kVA)    ^\n";
      onScreen += "L1:  " + o[1] + "\n";
      onScreen += "L2:  " + o[2] + "\n";
      onScreen += "L3:  " + o[3] + "            {";
      break;
  }
  return onScreen;
}

function allInOneScreen(includeCursor) {
  let onScreen = "";
  let cursor = null;
  switch (selectedObject["style"]) {
    case "8":
      cursor = [" ", " ", " ", " ", " ", " ", " ", " "];
      if (includeCursor) cursor[cursorPosition] = ">";
      onScreen = cursor[0] + selectedObject["menu"]["0"] + "         " + cursor[4] + selectedObject["menu"]["4"] + "\n";
      onScreen += cursor[1] + selectedObject["menu"]["1"] + "  " + cursor[5] + selectedObject["menu"]["5"] + "\n";
      onScreen += cursor[2] + selectedObject["menu"]["2"] + "  " + cursor[6] + selectedObject["menu"]["6"] + "\n";
      onScreen += cursor[3] + selectedObject["menu"]["3"] + " " + cursor[7] + selectedObject["menu"]["7"] + "\n";
      break;
    case "6":
      cursor = [" ", " ", " ", " ", " ", " "];
      if (includeCursor) cursor[cursorPosition] = ">";
      onScreen = cursor[0] + selectedObject["menu"]["0"] + "   " + cursor[3] + selectedObject["menu"]["3"] + "\n";
      onScreen += cursor[1] + selectedObject["menu"]["1"] + "    " + cursor[4] + selectedObject["menu"]["4"] + "\n";
      onScreen += cursor[2] + selectedObject["menu"]["2"] + " " + cursor[5] + selectedObject["menu"]["5"] + "\n";
  }
  return onScreen;
}

function labledAllInOneScreen(includeCursor) {
  let cursor = [" ", " ", " ", " ", " ", " ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = selectedObject["label"] + "     " + cursor[3] + selectedObject["menu"]["3"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"]["0"] + "     " + cursor[4] + selectedObject["menu"]["4"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"]["1"] + "     " + cursor[5] + selectedObject["menu"]["5"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"]["2"] + "  " + cursor[6] + selectedObject["menu"]["6"] + "\n";
  return onScreen;
}

function moveArrow(arrowKey) {
  switch (arrowKey) {
    case "up":
      if (cursorPosition > 0) cursorPosition--;
      break;
    case "down":
      if (cursorPosition < menuSize - 1) cursorPosition++;
      break;
  }
  console.log(
    "cursor position=" +
      cursorPosition +
      " choicePosition=" +
      choicePosition +
      " preEditMode=" +
      preEditMode +
      " editMode=" +
      editMode
  );
}

function handleEditMode(arrowKey) {
  switch (arrowKey) {
    case "up":
      choicePosition++;
      break;
    case "down":
      if (choicePosition > 0) choicePosition--;
      break;
  }
}

function abortAction() {
  setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
  return "";
}

function moveScreen(arrowKey) {
  // virtual screen representing what we are looking at
  switch (arrowKey) {
    case "up":
      if (cursorPosition > 0) {
        cursorPosition--;
        if (cursorPosition < screen[0]) {
          screen[0]--;
          screen[1]--; // doesn't do anything
        }
      }
      break;
    case "down":
      if (cursorPosition < menuSize - 1) {
        cursorPosition++;
        if (cursorPosition > screen[1]) {
          screen[0]++;
          screen[1]++; // doesn't do anything
        }
      }
      break;
  }
}

// function handleSelfTest() {
//   anyKeyPress = true;
//   selectedObject = menus["self-test-started"];
//   textarea.value = displayScreen();
// }

function escapeButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  // if (preEditMode) preEditMode = false;
  else if (editMode) backToNormalMode();
  else if (escapeDisable);
  else {
    // do nothing
    // else if (inSelfTest && lastMenu[menuLevel] === "Yes, Do Self Test") handleSelfTest();
    cursorPosition = 0;
    switch (menuLevel) {
      case 0: // to all-in-one menu
        setMenu(lastMenu[1], 1);
        break;
      default: // coming back from 2 deep, this works
        setMenu(lastMenu[menuLevel - 1], menuLevel - 1);
    }
  }
}

function backToNormalMode() {
  editMode = false;
}

function returnButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else if (returnDisable);
  else if (editMode) {
    backToNormalMode();
  } else if (preEditMode) {
    editMode = true;
    preEditMode = false;
  } else {
    // some magic in case we are in bypass
    if (inBypass && selectedObject["menu"][4] === "UPS Out Of Bypass")
      menuName = selectedObject["menu"][cursorPosition + 2];
    // this is default
    else menuName = selectedObject["menu"][cursorPosition];
    selectedObject = menuName;
    if (menuLevel != 0) setMenu(menuName, menuLevel + 1);
  }
}

function questionMarkButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else console.log("you click the question Mark button");
}

function setMenu(menuName, level) {
  stopAlternating();
  if (menuName === "Cancel") {
    escapeButton();
  } else {
    menuLevel = level;
    lastMenu[menuLevel] = menuName;
    console.log(menus[menuName]["menu"]);
    menuSize = Object.keys(menus[menuName]["menu"]).length;
    isScrollDownMenu = isAScrollDownMenu(menuName);
    selectedObject = menus[menuName];
    cursorPosition = 0;
    printMenus();
    startAlternating();
  }
}

var audioContext = new window.AudioContext();

// Function to load and decode audio file
function loadBeepSound(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    audioContext.decodeAudioData(
      request.response,
      function (buffer) {
        beepBuffer = buffer;
      },
      function (error) {
        console.error("decodeAudioData error", error);
      }
    );
  };

  request.onerror = function () {
    console.error("BufferLoader: XHR error");
  };

  request.send();
}

var beepBuffer = null;
function playBeep() {
  // Resume the audio context and play the beep in the same interaction
  audioContext
    .resume()
    .then(() => {
      if (beepBuffer) {
        var source = audioContext.createBufferSource();
        source.buffer = beepBuffer;
        source.connect(audioContext.destination);
        source.start(0); // Play immediately
      } else {
        console.error("Beep sound not loaded");
      }
    })
    .catch((error) => {
      console.error("Error resuming audio context:", error);
    });
}

function updateScreen(imageIndex) {
  const basePath = "/../images/dots";
  const container = document.getElementById("viewscreen-div");
  container.innerHTML = "";
  if (imageIndex === 6) {
    textarea.id = "viewscreen";
    container.appendChild(textarea);
    changeLight("light-green", "light2");
    changeLight("light-green", "light4");
  } else {
    switch (imageIndex) {
      case 1:
        changeLight("light-green", "light2");
        break;
      case 2:
        changeLight("light-orange", "light4");
        break;
      case 3:
        changeLight("light-orange", "light6");
        break;
      case 4:
        changeLight("light-red", "light8");
        break;
      case 5:
        changeLight("light-off", "light2");
        changeLight("light-off", "light4");
        changeLight("light-off", "light6");
        changeLight("light-off", "light8");
        break;
    }
    var img = document.createElement("img");
    img.src = `${basePath}${imageIndex}.png`;
    img.alt = `Dots ${imageIndex}`;
    img.className = "screen-area";
    container.appendChild(img);
  }
}

function powerOn() {
  const intervals = [300, 600, 900, 1200, 1500, 1800, 3000];
  intervals.forEach((interval, index) => {
    setTimeout(() => updateScreen(index), interval);
  });
}
