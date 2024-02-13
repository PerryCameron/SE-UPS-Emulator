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
    type: "scroll-down",
    menu: {
      0: "Turn UPS Off",
      1: "Reboot UPS",
      2: "UPS Into Bypass",
      3: "UPS To Sleep",
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
    type: "scroll-down",
    menu: {
      0: "Simulate Power Fail",
      1: "Perform Self Test",
      2: "Start Runtime Cal",
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
    choice: {
      0: { mod: "1", loc: "L2", Status: "Not Installed", FW: "", HW: "", SN: "", MDATE: "" },
      1: { mod: "2", loc: "L3", Status: "Not Installed", FW: "", HW: "", SN: "", MDATE: "" },
      2: { mod: "3", loc: "L4", Status: "Not Installed", FW: "", HW: "", SN: "", MDATE: "" },
      3: { mod: "4", loc: "L5", Status: "Not Installed", FW: "", HW: "", SN: "", MDATE: "" },
      4: { mod: "5", loc: "L6", Status: "Not Installed", FW: "", HW: "", SN: "", MDATE: "" },
      5: { mod: "6", loc: "L7", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240147", MDATE: "09/14/23" },
      6: { mod: "7", loc: "L8", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240141", MDATE: "09/14/23" },
      7: { mod: "8", loc: "L9", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240142", MDATE: "09/14/23" },
      8: { mod: "9", loc: "L10", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240143", MDATE: "09/14/23" },
      9: { mod: "10", loc: "L11", Status: "On & Ok", FW: "05.05", HW: "6", SN: "QD2337240144", MDATE: "09/14/23" },
    },
    menu: {
      0: "Frame: Main",
      1: "Pwr Mod: ",
      2: "Status: ",
      3: "Additional Info",
    },
    selection: "0",
    mode: "0",
  },
  "UPS Into Bypass": {
    type: "labeled-two-choice",
    label: "Confirm:\n UPS Into Bypass?",
    menu: {
      0: "NO, ABORT",
      1: "YES, Into Bypass",
    },
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
};

let screen = [0, 3];
let toggle = false;
let isScrollDownMenu = false;
let inBypass = false;
let inSelfTest = false;
let anyKeyPress = false; // when ever it says press any key...
let upsOffAllowed = false;
let cursorPosition = 0;
let menuSize = 0;
let menuLevel = 0;
let intervalId = null;
let lastMenu = ["Default", "top-menu", "level 2", "level 3", "level 4", "level 5", "level 6", "level 7"];
// var textarea = document.getElementById("viewscreen");
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
}

function isAScrollDownMenu(menuKey) {
  if (menus[menuKey]["type"] === "scroll-down") return true;
  else return false;
}

function startAlternating() {
  if (intervalId === null) {
    intervalId = setInterval(function () {
      textarea.value = toggle ? drawScreen(true) : drawScreen(false);
      toggle = !toggle;
    }, 300);
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
  else {
    if (isScrollDownMenu) moveScreen("up"); // virtual screen
    else moveArrow("up");
  }
}

function downButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else {
    if (isScrollDownMenu) moveScreen("down"); // virtual screen of 4 lines
    else moveArrow("down");
  }
}

function drawScreen(includeCursor) {
  switch (selectedObject["type"]) {
    case "all-in-one":
      return allInOneScreen(includeCursor);
    case "labeled-all-in-one":
      return labledAllInOneScreen(includeCursor);
    case "scroll-down":
      return scrollDownScreen(includeCursor);
    case "labeled-two-choice":
      return labeledTwoChoiceScreen(includeCursor);
    case "action-event":
      return actionEvent();
    case "network-setup-display":
      return displayNetworkSetupScreen();
    case "information":
      return displayScreen();
    case "push-out":
      return pushOutScreen();
    case "editable-choice":
      return editableChoiceScreen();
    case "walled-event":
      return walledEvent();
    case "abort":
      return abortAction();
    case "not-yet-available":
      return notAvailableYetScreen();
    case "module-chooser":
      return moduleChooserScreen(includeCursor);
    // case "info-any-press":
    //   return infoWithAnyPress();
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
      console.log("case 3");
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
      textarea.value = selectedObject["message"];
      changeLight("light-off", "light-orange", "light6");
      inBypass = true;
      anyKeyPress = true;
      break;
    case "outOfBypass":
      textarea.value = selectedObject["message"];
      changeLight("light-orange", "light-off", "light6");
      inBypass = false;
      anyKeyPress = true;
      break;
    case "selfTest":
      textarea.value = selectedObject["message"];
      changeLight("light-off", "light-orange", "light4");
      runSelfTest();
      break;
  }
}

function runSelfTest() {
  console.log("Running selftest for: " + selectedObject["period"]);
  inSelfTest = true;
  setTimeout(() => changeLight("light-orange", "light-off", "light4"), selectedObject["period"]);
}

function changeLight(changeFrom, changeTo, light) {
  document.getElementById(light).classList.remove(changeFrom);
  document.getElementById(light).classList.add(changeTo);
}

function actionEvent() {
  stopAlternating();
  setTimeout(setEvent, selectedObject["duration"]);
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

function displayNetworkSetupScreen() {
  stopAlternating();
  let d = menus[selectedObject["dataSource"]];
  let ip = d["IP"];
  let m = d["Mask"];
  let g = d["Gway"];
  let onScreen = "    " + selectedObject["label"] + "\n";
  onScreen += "   IP:" + ip["aa"] + ip["ab"] + ip["ac"] + "." + ip["ba"] + ip["bb"] + ip["bc"] + ".";
  onScreen += ip["ca"] + ip["cb"] + ip["cc"] + "." + ip["da"] + ip["db"] + ip["dc"] + "\n";
  onScreen += " Mask:" + m["aa"] + m["ab"] + m["ac"] + "." + m["ba"] + m["bb"] + m["bc"] + ".";
  onScreen += m["ca"] + m["cb"] + m["cc"] + "." + m["da"] + m["db"] + m["dc"] + "\n";
  onScreen += " Gway:" + g["aa"] + g["ab"] + g["ac"] + "." + g["ba"] + g["bb"] + g["bc"] + ".";
  onScreen += g["ca"] + g["cb"] + g["cc"] + "." + g["da"] + g["db"] + g["dc"] + "\n";
  return onScreen;
}

function labeledTwoChoiceScreen(includeCursor) {
  menuSize = 2;
  let cursor = [" ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = selectedObject["label"] + "\n";
  onScreen += " " + cursor[0] + selectedObject["menu"][0] + "\n";
  onScreen += " " + cursor[1] + selectedObject["menu"][1];
  return onScreen;
}

function scrollDownScreen(includeCursor) {
  let cursor = [" ", " ", " ", " "];
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
  let onScreen = cursor[0] + selectedObject["menu"][screen[0]] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][screen[0] + 1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][screen[0] + 2] + "\n";
  if (selectedObject["menu"][screen[0] + 3] != undefined)
    onScreen += cursor[3] + selectedObject["menu"][screen[0] + 3] + "\n";
  else onScreen += "";
  return onScreen;
}

function moduleChooserScreen(includeCursor) {
  let cursor = [" ", " ", " "];
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
    }
  }
  let onScreen = selectedObject["menu"][screen[0]] + "\n";
  onScreen += cursor[0] + selectedObject["menu"][screen[0] + 1] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][screen[0] + 2] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][screen[0] + 3] + "\n";
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
          screen[1]--;
        }
      }
      break;
    case "down":
      if (cursorPosition < menuSize - 1) {
        cursorPosition++;
        if (cursorPosition > screen[1]) {
          screen[0]++;
          screen[1]++;
        }
      }
      break;
  }
}

function handleSelfTest() {
  anyKeyPress = true;
  selectedObject = menus["self-test-started"];
  textarea.value = displayScreen();
}

function escapeButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  if (inSelfTest && lastMenu[menuLevel] === "Yes, Do Self Test") handleSelfTest();
  else {
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

function returnButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else {
    menuName = selectedObject["menu"][cursorPosition];
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
    changeLight("light-off", "light-green", "light2");
    changeLight("light-off", "light-green", "light4");
  } else {
    switch (imageIndex) {
      case 1:
        changeLight("light-off", "light-green", "light2");
        break;
      case 2:
        changeLight("light-off", "light-orange", "light4");
        break;
      case 3:
        changeLight("light-off", "light-orange", "light6");
        break;
      case 4:
        changeLight("light-off", "light-red", "light8");
        break;
      case 5:
        changeLight("light-green", "light-off", "light2");
        changeLight("light-orange", "light-off", "light4");
        changeLight("light-orange", "light-off", "light6");
        changeLight("light-red", "light-off", "light8");
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
