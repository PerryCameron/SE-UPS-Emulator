let menus = {
  Default: {
    type: "information",
    menu: {
      0: "Chrg  80% ||||||||||~~",
      1: "Load  13% |~~~~~~~~~~~",
      2: "208Vin 208Vout 60Hz",
      3: "Runtime:  1hr  39min",
    },
  },
  "top-menu": {
    type: "all-in-one",
    style: "8",
    menu: {
      0: "Control",
      1: "Status",
      2: "Setup",
      3: "Accessories",
      4: "Logging",
      5: "Display",
      6: "Diags",
      7: "Help",
    },
  },
  Display: {
    type: "all-in-one",
    style: "6",
    menu: {
      0: "Date/Time",
      1: "Password",
      2: "Information",
      3: "Beeper",
      4: "Contrast",
      5: "Config",
    },
  },
  Setup: {
    type: "labeled-all-in-one",
    label: "Settings:",
    menu: {
      0: "Shutdown",
      1: "Defaults",
      2: "Output Freq",
      3: "Alarms",
      4: "Bypass",
      5: "Copy",
      6: "Other",
    },
  },
  Control: {
    type: "scroll-down",
    menu: {
      0: "UPS into Bypass",
      1: "Do Self Test",
      2: "Simulate Power Fail",
      3: "Graceful Reboot",
      4: "Graceful Turn Off",
      5: "Start Runtime Cal",
      6: "Turn Load On/Off",
    },
  },
  ControlInBypass: {
    type: "scroll-down",
    menu: {
      0: "UPS out of Bypass",
      1: "Do Self Test",
      2: "Simulate Power Fail",
      3: "Graceful Reboot",
      4: "Graceful Turn Off",
      5: "Start Runtime Cal",
      6: "Turn Load On/Off",
    },
  },
  Status: {
    type: "push-out",
    menu: {
      0: { 0: "Symmetra 40K", 1: "     Output kVA", 2: " $1: 1.30  $2: 0.65", 3: "       $3: 0.89      {" },
      1: { 0: "data-block", 1: "VoltageData" },
      2: { 0: "data-block", 1: "CurrentData" },
      3: "Graceful Reboot",
      4: "Graceful Turn Off",
      5: "Start Runtime Cal",
      6: "Turn Load On/Off",
    },
  },
  Diags: {
    type: "scroll-down",
    menu: {
      0: "Fault & Diagnostics",
      1: "Frame Status",
      2: "Aux. Device Status",
      3: "Comm Bus Status",
    },
  },
  "Frame Status": {
    type: "scroll-down",
    menu: {
      0: "Main Frame of 2",
      1: "Rev, SN, Mfg Date",
      2: "Sub-Systems",
      3: "Raw Status Data",
    },
  },
  Other: {
    type: "scroll-down",
    menu: {
      0: "Self Test: Disabled",
      1: "UPS ID: CCC_PX",
      2: "VoutReporting: AUTO",
      3: "Output: 208V       {",
    },
    selfTest: { 0: "At PwrOn", 1: "7 days", 2: "14 days", 3: "disabled" },
  },
  "UPS into Bypass": {
    type: "labeled-two-choice",
    label: "Confirm:\n UPS into Bypass",
    menu: {
      0: "Cancel",
      1: "Yes, UPS into Bypass",
    },
  },
  "UPS out of Bypass": {
    type: "labeled-two-choice",
    label: "Confirm:\n UPS Out Of Bypass",
    menu: {
      0: "Cancel",
      1: "Yes, UPS Out Of Byp",
    },
  },
  "Do Self Test": {
    type: "labeled-two-choice",
    label: "Confirm:\n Do Self Test",
    menu: {
      0: "Cancel",
      1: "Yes, Do Self Test",
    },
  },
  Password: {
    type: "labeled-two-choice",
    label: "Password:\n ('_'= end)",
    menu: {
      0: "Timeout: Forever",
      1: "Invalidate NOW",
    },
  },
  "Date/Time": {
    type: "editable-choice",
    subType: "date-time",
    label: "Confirm:\n Do Self Test",
    menu: {
      0: "Date:",
      1: "Time:",
      choices: {
        date: { 0: "14", 1: "Sep", 2: "2024" },
        time: { 0: "10", 1: "19", 2: "50" },
      },
    },
  },
  Cancel: {
    type: "cancel",
    menu: "none",
  },
  "Yes, UPS into Bypass": {
    type: "action-event",
    menu: "\n Bypass attempted\n\nPlease Wait...",
    message: "\n  UPS IS BYPASSED\n\nPress any key...",
    duration: "1500",
    action: "inBypass",
  },
  "Yes, Do Self Test": {
    type: "action-event",
    menu: "\n SelfTest In Progress\n      On Line\nPlease Wait...",
    message: "\n SelfTest In Progress\n     On Battery\nPlease Wait...",
    duration: "2000",
    period: "100000",
    action: "selfTest",
  },
  "Yes, UPS Out Of Byp": {
    type: "action-event",
    menu: " Attempting to exit\n        bypass\n\nPlease Wait...",
    message: "\n UPS IS OUT OF BYPASS\n\nPress any key...",
    duration: "1500",
    action: "outOfBypass",
  },
  "Raw Status Data": {
    type: "scroll-down",
    menu: {
      0: "Intelligence Module",
      1: "Redundant Intel Mod",
      2: "Power Modules",
      3: "Sys Power Supplies",
      4: "Power Modules",
    },
  },
  NetworkData: {
    type: "data",
    IP: { aa: "0", ab: "1", ac: "0", ba: "2", bb: "1", bc: "8", ca: "0", cb: "4", cc: "4", da: "1", db: "4", dc: "4" },
    Mask: {
      aa: "2",
      ab: "5",
      ac: "5",
      ba: "2",
      bb: "5",
      bc: "5",
      ca: "2",
      cb: "5",
      cc: "2",
      da: "0",
      db: "0",
      dc: "0",
    },
    Gway: {
      aa: "0",
      ab: "1",
      ac: "0",
      ba: "1",
      bb: "1",
      bc: "8",
      ca: "0",
      cb: "4",
      cc: "4",
      da: "0",
      db: "0",
      dc: "1",
    },
  },
  VoltageData: {
    input: { 1: "122.4", 2: "121.9", 3: "122.4" },
    bypass: { 1: "122.1", 2: "121.9", 3: "122.4" },
    output: { 1: "121.0", 2: "121.0", 3: "120.9" },
  },
  CurrentData: {
    input: { 1: "18.4", 2: "18.5", 3: "18.4" },
    bypass: { 1: "0.0", 2: "0.0", 3: "0.0" },
    output: { 1: "12.6", 2: "12.7", 3: "12.2" },
  },
  "View Network Setup": {
    type: "network-setup-display",
    menu: "none",
    label: "Network Setup",
    dataSource: "NetworkData",
  },
  "Intelligence Module": {
    type: "labeled-two-choice",
    label: "Status: On & OK",
    menu: {
      0: "Rev, SN, Mfg Date",
      1: "Raw Status Data",
    },
  },
  Accessories: {
    type: "labeled-two-choice",
    label: "    Network Card",
    menu: {
      0: "View Network Setup",
      1: "Network Setup",
    },
  },
  Information: {
    type: "information",
    menu: {
      0: "Model #: AP9215RM",
      1: "SN: JB23453193849",
      2: "Mfg Date: 14-Sep-2018",
      3: "Revs:HW=b3    FW=0014",
    },
  },
  Beeper: {
    type: "information",
    menu: {
      0: " ------- Beep -------",
      1: " >At UPS: Never",
      2: "  At Disp: PwrFail+30",
      3: "  Vol: Off Click: On",
    },
    volume: { 0: "Off", 1: "Low", 2: "Med", 3: "Hi" },
    click: { 0: "On", 1: "Off" },
  },
  Contrast: {
    type: "information",
    menu: {
      0: "",
      1: ">Contrast: 0",
      2: "",
      3: "",
    },
  },
};

let screen = [0, 3];
let toggle = false;
let isScrollDownMenu = false;
let inBypass = false;
let anyKeyPress = false; // when ever it says press any key...
let cursorPosition = 0;
let menuSize = 0;
let menuLevel = 0;
let intervalId = null;
let lastMenu = ["Default", "top-menu", "level 2", "level 3", "level 4", "level 5", "level 6", "level 7"];
var textarea = document.getElementById("viewscreen");
let selectedObject = menus["Default"];

document.addEventListener("DOMContentLoaded", () => {
  setMenu(lastMenu[0], 0);
});

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
    default:
      return scrollDownScreen(includeCursor);
  }
}

function handleAnyKeyPress() {
  switch (lastMenu[menuLevel]) {
    case "Yes, UPS into Bypass":
      setMenu("ControlInBypass", 2);
      break;
    case "Yes, UPS Out Of Byp":
      setMenu("Control", 2);
      break;
  }
  console.log("You pressed a key");
  console.log(selectedObject);
  console.log(lastMenu);
  anyKeyPress = false;
}

function setEvent() {
  switch (selectedObject["action"]) {
    case "inBypass":
      textarea.value = selectedObject["message"];
      document.getElementById("light6").classList.remove("light-off");
      document.getElementById("light6").classList.add("light-orange");
      inBypass = true;
      anyKeyPress = true;
      break;
    case "outOfBypass":
      textarea.value = selectedObject["message"];
      document.getElementById("light6").classList.remove("light-orange");
      document.getElementById("light6").classList.add("light-off");
      inBypass = false;
      anyKeyPress = true;
      break;
    case "selfTest":
      textarea.value = selectedObject["message"];
      document.getElementById("light4").classList.remove("light-off");
      document.getElementById("light4").classList.add("light-orange");
      break;
  }
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
  onScreen += cursor[0] + selectedObject["menu"][0] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1];
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
  onScreen += cursor[3] + selectedObject["menu"][screen[0] + 3] + "\n";
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
  switch (dataMenu) {
    case "VoltageData":
      onScreen = "$ Vin   Vbyp  Vout   ^\n";
      onScreen += "1 " + i[1] + " " + b[1] + " " + o[1] + "\n";
      onScreen += "2 " + i[2] + " " + b[2] + " " + o[2] + "\n";
      onScreen += "3 " + i[3] + " " + b[3] + " " + o[3] + "  {\n";
      break;
    case "CurrentData":
      onScreen = "$     Iin    Iout    ^\n";
      onScreen += "1     " + i[1] + "A  " + o[1] + "A\n";
      onScreen += "2     " + i[2] + "A  " + o[2] + "A\n";
      onScreen += "3     " + i[3] + "A  " + o[3] + "A   {\n";
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
      onScreen = cursor[0] + selectedObject["menu"]["0"] + "     " + cursor[4] + selectedObject["menu"]["4"] + "\n";
      onScreen += cursor[1] + selectedObject["menu"]["1"] + "      " + cursor[5] + selectedObject["menu"]["5"] + "\n";
      onScreen += cursor[2] + selectedObject["menu"]["2"] + "       " + cursor[6] + selectedObject["menu"]["6"] + "\n";
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

function escapeButton() {
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
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

// Load the beep sound when the page loads
window.onload = function () {
  loadBeepSound("trimbeep.mp3");
};
