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
let debugMode = true;
let isAlternating = false;
let cursorPosition = 0;
let choicePosition = 0;
let menuSize = 0;
let menuLevel = 0;
let lastMenuLevel = 0;
let preEditMode = false;
let editMode = false;
let intervalId = null;
let lastMenu = ["Default", "top-menu", "level 2", "level 3", "level 4", "level 5", "level 6", "level 7"];
let selectedObject = menus["Default"];
let textarea = document.createElement("textarea");
let currentFunction = "";
textarea.className = "screen-area";

document.addEventListener("DOMContentLoaded", () => {
  powerOn();
  setMenu(lastMenu[0], 0);
});

// Load the beep sound when the page loads
window.onload = function () {
  loadBeepSound("trimbeep.mp3");
};

function isAScrollDownMenu(menuKey) {
  if (debugMode) console.log("Function: isAScrollDownMenu(menuKey)");
  if (menus[menuKey]["type"] === "scroll-down") return true;
  else return false;
}

function startAlternating() {
  if (debugMode) console.log("Function: startAlternating()");
  if (intervalId === null) {
    intervalId = setInterval(function () {
      textarea.value = toggle ? drawScreen(true) : drawScreen(false);
      alternateFunction();
      toggle = !toggle;
    }, 300);
  }
  isAlternating = true;
  printAlternateStatus(); // debug function
}

function alternateFunction() {
  if (debugMode) console.log("Function: alternateFunction()");
  if (inBypass) {
    if (toggle) changeLight("light-orange", "light2");
    else changeLight("light-off", "light2");
  }
  debugMode = false;
}

function stopAlternating() {
  if (debugMode) console.log("Function: stopAlternating()");
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  isAlternating = false;
  printAlternateStatus(); // debug function
}

function upButton() {
  console.clear();
  debugMode = true;
  if (debugMode) console.log("Function: upButton()");
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else if (editMode) handleEditMode("up");
  else {
    if (isScrollDownMenu) moveScreen("up"); // virtual screen
    else moveArrow("up");
  }
}

function downButton() {
  console.clear();
  debugMode = true;
  if (debugMode) console.log("Function: downButton()");
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else if (editMode) handleEditMode("down");
  else {
    if (isScrollDownMenu) moveScreen("down"); // virtual screen of 4 lines
    else moveArrow("down");
  }
}

function drawScreen(includeCursor) {
  // console.clear();
  if (debugMode) console.log("Function: drawScreen() Current Function: " + currentFunction);
  // below line of code fixes a bug where if you went into a menu that set
  // preEditMode to true and if you exited, you couldn't drill down into
  // any other menus. This fixes that issue but needed document because this is
  // a super ugly hack, but it works and I am going to keep it
  if (preEditMode & (selectedObject["flag"] != "pre")) preEditMode = false;
  currentFunction = selectedObject["type"];
  if (debugMode) printTestData();
  switch (currentFunction) {
    case "all-in-one":
      return allInOneScreen(includeCursor);
    case "frame-status-menu":
      return frameStatusMenuScreen(includeCursor);
    case "scroll-down":
      return scrollDownScreen(includeCursor);
    case "labeled-two-choice":
      return labeledTwoChoiceScreen(includeCursor);
    case "configuration-defaults":
      return configurationDefaults(includeCursor);

    case "action-event":
      return actionEvent();
    case "information":
      return displayScreen();
    case "push-out":
      return pushOutScreen();
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
    case "additional-info":
      return additionalInfoScreen(includeCursor);
    case "status-ok":
      console.log("status is ok");
    case "print-simple-screen":
      return displayScreen();
    case "setting-choice-screen":
      return settingChoiceScreen(includeCursor);
    case "configuration-alarm-Screen":
      return configurationAlarmScreen(includeCursor);
    case "configuration-output-screen":
      return configurationOutputScreen(includeCursor);
    default:
      return scrollDownScreen(includeCursor);
  }
}

// debug function
function printTestData() {
  let ml = document.getElementById("menu-level");
  ml.innerText = "Menu Level: " + menuLevel;
  let cp = document.getElementById("cursor-position");
  cp.innerText = "Cursor Position: " + cursorPosition;
  let cf = document.getElementById("current-function");
  cf.innerText = "Current Function: " + currentFunction;
  let b = document.getElementById("bypass");
  b.innerText = "In Bypass: " + inBypass;
  let s = document.getElementById("self-test");
  s.innerText = "In Self Test: " + inSelfTest;
  let a = document.getElementById("any");
  a.innerText = "Anykey Pressed: " + anyKeyPress;
  let chp = document.getElementById("choice-position");
  chp.innerText = "Choice Position: " + choicePosition;
  let ms = document.getElementById("menu-size");
  ms.innerText = "Menu Size: " + menuSize;
  let pe = document.getElementById("pre-edit");
  pe.innerText = "Pre-Edit Mode: " + preEditMode;
  let e = document.getElementById("edit");
  e.innerText = "Edit Mode: " + editMode;
  let lml = document.getElementById("last-menu-level");
  lml.innerText = "Last Menu Level: " + lastMenuLevel;

  let rd = document.getElementById("menu-history");
  let rdString = "0: " + lastMenu[0];
  if (menuLevel > 0) rdString += "<br>1: " + lastMenu[1];
  if (menuLevel > 1) rdString += "<br>2: " + lastMenu[2];
  if (menuLevel > 2) rdString += "<br>3: " + lastMenu[3];
  if (menuLevel > 3) rdString += "<br>4: " + lastMenu[4];
  if (menuLevel > 4) rdString += "<br>5: " + lastMenu[5];
  if (menuLevel > 5) rdString += "<br>6: " + lastMenu[6];
  if (menuLevel > 6) rdString += "<br>7: " + lastMenu[7];
  rd.innerHTML = rdString;
}

// debug function
function printAlternateStatus() {
  let t = document.getElementById("alternating");
  t.innerText = "Alternating: " + isAlternating;
}

function frameStatusMenuScreen(includeCursor) {
  if (debugMode) console.log("Function: frameStatusMenuScreen(includeCursor)");
  menuSize = 3;
  let cursor = [" ", " ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = cursor[0] + selectedObject["menu"][0] + "\n";
  onScreen += selectedObject["label"] + " 20/36\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2];
  return onScreen;
}

function walledEvent() {
  if (debugMode) console.log("Function: walledEvent()");
  if (!window[selectedObject["check"]]) setMenu("Not Allowed", 5);
  anyKeyPress = true;
  return displayScreen();
  // else it is allowed and we have to make functionality for this
}

function handleAnyKeyPress() {
  if (debugMode) console.log("Function: handleAnyKeyPress()");
  switch (lastMenu[menuLevel]) {
    case "Not Allowed":
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      break;
    case "YES, Simulate Fail":
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      break;
    case "YES, Do Self Test":
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      break;
    case "YES, Start Cal":
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      break;
    case "Output":
      setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
      cursorPosition = 3;
      break;
    default:
      setMenu("top-menu", 2);
  }
  anyKeyPress = false;
}

function setEvent() {
  if (debugMode) console.log("Function: setEvent()");
  switch (selectedObject["action"]) {
    case "inBypass":
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
  if (debugMode) console.log("Function: runSelfTest()");
  inSelfTest = true;
  setTimeout(() => changeLight("light-off", "light4"), selectedObject["period"]);
}

function changeLight(changeTo, light) {
  if (debugMode) console.log("Function: changeLight(changeTo, light)");
  document.getElementById(light).classList.remove("light-green");
  document.getElementById(light).classList.remove("light-off");
  document.getElementById(light).classList.remove("light-orange");
  document.getElementById(light).classList.remove("light-red");
  document.getElementById(light).classList.add(changeTo);
}

function actionEvent() {
  if (debugMode) console.log("Function: actionEvent()");
  setTimeout(setEvent, selectedObject["duration"]);
  if (inBypass) return selectedObject["message"];
  else if (!inBypass & (selectedObject["action"] === "outOfBypass")) return selectedObject["message"];
  return selectedObject["menu"];
}

function editableChoiceScreen() {
  if (debugMode) console.log("Function: editableChoiceScreen()");
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
  if (debugMode) console.log("Function: notAvailableYetScreen()");
  anyKeyPress = 1;
  return displayScreen();
}

function additionalInfoScreen() {
  if (debugMode) console.log("Function: additionalInfoScreen()");
  let onScreen = "";
  if (lastMenu[4] === "Power Modules") {
    selectedObject = menus["Additional Info PM"];
  } else if (lastMenu[5] === "Frame Status") {
    selectedObject = menus["Additional Info Frame Status"];
  }
  return onScreen;
}

function configurationDefaults(includeCursor) {
  if (debugMode) console.log("Function: labeledTwoChoiceScreen(" + includeCursor + ")");
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

function labeledTwoChoiceScreen(includeCursor) {
  if (debugMode) console.log("Function: labeledTwoChoiceScreen(" + includeCursor + ")");
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
  if (debugMode) console.log("Function: labeledThreeChoiceScreen(" + includeCursor + ")");
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
  if (debugMode) console.log("Function: selectCursor(" + includeCursor + "," + cursor + ")");
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
  if (debugMode) console.log("Function: modeSwitchMenuItemScreen(" + includeCursor + ")");
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
  if (debugMode) console.log("Function: scrollDownScreen(" + includeCursor + ")");
  let cursor = [" ", " ", " ", " "];
  selectCursor(includeCursor, cursor);
  let onScreen = cursor[0] + selectedObject["menu"][+screen[0]] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][+screen[0] + 1] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][+screen[0] + 2] + "\n";
  onScreen += cursor[3] + selectedObject["menu"][+screen[0] + 3] + "\n";
  return onScreen;
}

// four or less items
function fourScrollScreen(includeCursor) {
  if (debugMode) console.log("Function: fourScrollScreen(" + includeCursor + ")");
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
  if (debugMode) console.log("Function: rawStatusDataScreen()");
  let onScreen = "";
  if (lastMenu[5] === "Additional Info") {
    let moduleNumber = menus["Power Modules"]["module"];
    let module = menus["Power Modules"]["Raw Status"][moduleNumber];
    onScreen = "PM: " + moduleNumber + " Raw Status\n";
    onScreen += module["RS1"] + "\n";
    onScreen += module["RS2"] + "\n";
    onScreen += module["RS3"] + "\n";
  } else if (lastMenu[5] === "Main Intel Mod") {
    onScreen = printSimpleScreen(menus["Raw Status"]["mim"].menu);
  } else if (lastMenu[5] === "Redundant Intel Mod") {
    onScreen = printSimpleScreen(menus["Raw Status"]["rim"].menu);
  } else if (lastMenu[5] === "Frame Status") {
    onScreen = printSimpleScreen(menus["Raw Status"]["frame"].menu);
  }
  return onScreen;
}

function manufactureDataScreen() {
  if (debugMode) console.log("Function: manufactureDataScreen()");
  // "Manufacturing Data"
  let onScreen = "";
  if (lastMenu[5] === "Main Intel Mod") {
    onScreen = printSimpleScreen(menus["Manufacturing Data"]["mim"].menu);
  } else if (lastMenu[5] === "Frame Status") {
    onScreen = printSimpleScreen(menus["Manufacturing Data"]["frame"].menu);
  } else if (lastMenu[5] === "Redundant Intel Mod") {
    onScreen = printSimpleScreen(menus["Manufacturing Data"]["rim"].menu);
  } else if (lastMenu[5] === "Bypass Switch Mod   {") {
    onScreen = printSimpleScreen(menus["Manufacturing Data"]["bypass"].menu);
  } else if (lastMenu[4] === "Power Modules") {
    let moduleNumber = menus["Power Modules"]["module"];
    let module = menus["Power Modules"]["choice"][moduleNumber];
    onScreen = "PM: " + module["mod"] + " Frame: Main\n";
    onScreen += "FW: " + module["FW"] + "     HW: " + module["HW"] + "\n";
    onScreen += "SN: " + module["SN"] + "\n";
    onScreen += "Mfg Date: " + module["mdate"] + "\n";
  }
  return onScreen;
}

function printSimpleScreen(menu) {
  if (debugMode) console.log("Function: printSimpleScreen(" + menu + ")");
  return Object.values(menu).join("\n");
}

function displayScreen() {
  if (debugMode) console.log("Function: displayScreen()");
  onScreen = printSimpleScreen(selectedObject.menu);
  return onScreen;
}

// provides funtionality for UPS Configuration > Output
function configurationOutputScreen(includeCursor) {
  if (debugMode) console.log("Function: configurationAlarmScreen(" + includeCursor + ")");
  menuSize = 3;
  let cursor = [" ", " ", " "];
  let arrowCursor = [" ", " ", " "];
  // below handles all cursor positions
  if (includeCursor) {
    returnDisable = false;
    preEditMode = true; // probably put to false under escape
    editMode ? (arrowCursor[cursorPosition] = "}") : ((cursor[cursorPosition] = ">"), (choicePosition = 1));
    escapeDisable = false;
  }
  if (editMode) {
    switch (cursorPosition) {
      case 0:
        if (inBypass) {
          setChoicePositionLimits(1, 2);
          setDefault("Voltage");
        } else {
          anyKeyPress = true;
          return printOutputLockOutScreen();
        }
        // show screen that it can't do it
        break;
      case 1:
        if (inBypass) {
          setChoicePositionLimits(1, 2);
          setDefault("Freq");
        } else {
          anyKeyPress = true;
          return printOutputLockOutScreen();
        }
        break;
      case 2:
        setChoicePositionLimits(1, 6);
        setDefault("Slew Rate");
        break;
    }
    // use new function here
  }
  let onScreen = selectedObject["label"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"][0] + arrowCursor[0] + selectedObject["Voltage"]["default"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + arrowCursor[1] + selectedObject["Freq"]["default"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2] + arrowCursor[2] + selectedObject["Slew Rate"]["default"] + "\n";
  return onScreen;
}

function printOutputLockOutScreen() {
  return "This setting cannot\nbe changed while the\nUPS output is on.\nPress any key...";
}

// provides funtionality for UPS Configuration > Alarms
function configurationAlarmScreen(includeCursor) {
  if (debugMode) console.log("Function: configurationAlarmScreen(" + includeCursor + ")");
  menuSize = 3;
  let cursor = [" ", " ", " "];
  let arrowCursor = [" ", " ", " "];
  // below handles all cursor positions
  if (includeCursor) {
    returnDisable = false;
    preEditMode = true; // probably put to false under escape
    editMode ? (arrowCursor[cursorPosition] = "}") : ((cursor[cursorPosition] = ">"), (choicePosition = 1));
    escapeDisable = false;
  }
  if (editMode) {
    switch (cursorPosition) {
      case 0:
        setChoicePositionLimits(1, 3);
        setDefault("Redundancy");
        break;
      case 1:
        setChoicePositionLimits(1, 11);
        setDefault("Load");
        break;
      case 2:
        setChoicePositionLimits(1, 14);
        setDefault("Runtime");
        break;
    }
    // use new function here
  }
  let onScreen = selectedObject["label"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"][0] + arrowCursor[0] + selectedObject["Redundancy"]["default"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + arrowCursor[1] + selectedObject["Load"]["default"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2] + arrowCursor[2] + selectedObject["Runtime"]["default"] + "\n";
  return onScreen;
}

// provides funtionality for shutdown
function settingChoiceScreen(includeCursor) {
  if (debugMode) console.log("Function: settingChoiceScreen(" + includeCursor + ")");
  menuSize = 4;
  let cursor = [" ", " ", " ", " "];
  let arrowCursor = [" ", " ", " ", " "];
  // below handles all cursor positions
  if (includeCursor) {
    returnDisable = false;
    preEditMode = true; // probably put to false under escape
    editMode ? (arrowCursor[cursorPosition] = "}") : ((cursor[cursorPosition] = ">"), (choicePosition = 1));
    escapeDisable = false;
  }
  if (editMode) {
    switch (cursorPosition) {
      case 0:
        setChoicePositionLimits(1, 4);
        setDefault("Low Bat Dur");
        break;
      case 1:
        setChoicePositionLimits(1, 4);
        setDefault("Shutdwn Dly");
        break;
      case 2:
        setChoicePositionLimits(1, 8);
        setDefault("Return Dly");
        break;
      case 3:
        setChoicePositionLimits(1, 4);
        setDefault("Return Bat Cap");
        break;
    }
    // use new function here
  }
  let onScreen =
    cursor[0] + selectedObject["menu"][0] + arrowCursor[0] + selectedObject["Low Bat Dur"]["default"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"][1] + arrowCursor[1] + selectedObject["Shutdwn Dly"]["default"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"][2] + arrowCursor[2] + selectedObject["Return Dly"]["default"] + "\n";
  onScreen +=
    cursor[3] + selectedObject["menu"][3] + arrowCursor[3] + selectedObject["Return Bat Cap"]["default"] + "\n";
  return onScreen;
}

function setDefault(option) {
  selectedObject[option]["default"] = selectedObject[option][choicePosition];
}

function setChoicePositionLimits(start, end) {
  if (choicePosition > end) choicePosition = start;
  if (choicePosition < start) choicePosition = end;
}

// provides funtionality for power module diagnostic tests
function moduleChooserScreen(includeCursor) {
  if (debugMode) console.log("Function: moduleChooserScreen(" + includeCursor + ")");
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
  } else if (editMode) {
    setChoicePositionLimits(0, 9);
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
  if (debugMode) console.log("Function: batMonChooserScreen(" + includeCursor + ")");
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
  if (debugMode) console.log("Function: pushOutScreen()");
  if (selectedObject["menu"][cursorPosition][0] === "data-block") return dataFedScreen();
  let onScreen = selectedObject["menu"][cursorPosition]["0"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["1"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["2"] + "\n";
  onScreen += selectedObject["menu"][cursorPosition]["3"] + "\n";
  return onScreen;
}

function dataFedScreen() {
  if (debugMode) console.log("Function: dataFedScreen()");
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
  if (debugMode) console.log("Function: allInOneScreen(" + includeCursor + ")");
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
      break;
    case "labled6":
      cursor = [" ", " ", " ", " ", " ", " "];
      if (includeCursor) cursor[cursorPosition] = ">";
      onScreen = selectedObject["label"] + "\n";
      onScreen += cursor[0] + selectedObject["menu"]["0"] + "   " + cursor[3] + selectedObject["menu"]["3"] + "\n";
      onScreen += cursor[1] + selectedObject["menu"]["1"] + "     " + cursor[4] + selectedObject["menu"]["4"] + "\n";
      onScreen += cursor[2] + selectedObject["menu"]["2"] + "   " + cursor[5] + selectedObject["menu"]["5"] + "\n";
      break;
  }
  return onScreen;
}

function labledAllInOneScreen(includeCursor) {
  if (debugMode) console.log("Function: labeledAllInOneScreen(" + includeCursor + ")");
  let cursor = [" ", " ", " ", " ", " ", " ", " "];
  if (includeCursor) cursor[cursorPosition] = ">";
  let onScreen = selectedObject["label"] + "     " + cursor[3] + selectedObject["menu"]["3"] + "\n";
  onScreen += cursor[0] + selectedObject["menu"]["0"] + "     " + cursor[4] + selectedObject["menu"]["4"] + "\n";
  onScreen += cursor[1] + selectedObject["menu"]["1"] + "     " + cursor[5] + selectedObject["menu"]["5"] + "\n";
  onScreen += cursor[2] + selectedObject["menu"]["2"] + "  " + cursor[6] + selectedObject["menu"]["6"] + "\n";
  return onScreen;
}

function moveArrow(arrowKey) {
  if (debugMode) console.log("Function: moveArrow(" + arrowKey + ")");
  switch (arrowKey) {
    case "up":
      if (cursorPosition > 0) cursorPosition--;
      break;
    case "down":
      if (cursorPosition < menuSize - 1) cursorPosition++;
      break;
  }
  // printMenus();
}

function handleEditMode(arrowKey) {
  if (debugMode) console.log("Function: HandleEditMode(" + arrowKey + ")");
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
  if (debugMode) console.log("Function: abortAction()");
  setMenu(lastMenu[menuLevel - 2], menuLevel - 2);
  return "";
}

function moveScreen(arrowKey) {
  if (debugMode) console.log("Function: moveScreen()");
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

function escapeButton() {
  console.clear();
  debugMode = true;
  if (debugMode) console.log("Function: escapeButton()");
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  // if (preEditMode) preEditMode = false;
  else if (editMode) backToNormalMode();
  // else if (escapeDisable);
  else {
    // if we are at a dead end screen don't set cursor to 0
    switch (menuLevel) {
      case 0: // to all-in-one menu
        setMenu(lastMenu[1], 1);
        break;
      default: // coming back from 2 deep, this works
        setMenu(lastMenu[menuLevel - 1], menuLevel - 1);
        break;
    }
  }
}

function backToNormalMode() {
  if (debugMode) console.log("Function: backToNormalMode()");
  editMode = false;
}

function returnButton() {
  console.clear();
  debugMode = true;
  if (debugMode) console.log("Function: returnButton()");
  playBeep();
  if (anyKeyPress) {
    handleAnyKeyPress();
  } else if (editMode) {
    backToNormalMode();
  } else if (preEditMode) {
    editMode = true;
    preEditMode = false;
  } else {
    // some magic in case we are in bypass
    if (inBypass && selectedObject["menu"][4] === "UPS Out Of Bypass")
      menuName = selectedObject["menu"][cursorPosition + 2];
    // this is default
    else {
      if (menuItemIsNotIgnored(selectedObject["menu"][cursorPosition]))
        menuName = selectedObject["menu"][cursorPosition];
    }
    selectedObject = menuName;
    console.log("Menu Name: " + menuName);
    if (menuLevel != 0) setMenu(menuName, menuLevel + 1);
  }
}

function menuItemIsNotIgnored(item) {
  if (item === "Status:On & Ok") {
    if (debugMode) console.log("Function: menuItemIsNotIgnored(): ignored");
    return false;
  }
  return true;
}

function questionMarkButton() {
  if (debugMode) console.log("Function: questionMarkButton()");
  playBeep();
  if (anyKeyPress) handleAnyKeyPress();
  else console.log("you click the question Mark button");
}

function setMenu(menuName, level) {
  if (debugMode) console.log("Function: setMenu(" + menuName + ", " + level + ")");
  stopAlternating();
  if (menuName === "Cancel") {
    escapeButton();
  } else {
    // we will save last menu level
    lastMenuLevel = menuLevel;
    // change to new menu level
    menuLevel = level;
    // record new menuLevel to array
    lastMenu[menuLevel] = menuName;
    // how many elements are in our current Menu
    menuSize = Object.keys(menus[menuName]["menu"]).length;
    isScrollDownMenu = isAScrollDownMenu(menuName);
    // point to current menu
    selectedObject = menus[menuName];
    // does this object have settings info?
    if (menus[menuName] && menus[menuName].settings) {
      // alternate?
      if (menus[menuName].settings.alternate) {
        startAlternating();
        console.log("function: setMenu() alternating: started");
      } else console.log("function: setMenu() alternating: not started");
      // we have gone to a deeper level
      if (menuLevel > lastMenuLevel) {
        // save cursor position for last menu
        menus[lastMenu[lastMenuLevel]].settings.lastCursorPosition = cursorPosition;
        console.log("(if) function: setMenu() previous screen cursor position: set to " + cursorPosition);
        // new menu must start fresh
        cursorPosition = 0;
      } else if (menuLevel < lastMenuLevel) {
        cursorPosition = menus[menuName].settings.lastCursorPosition;
        console.log("(else if) function: setMenu() previous screen cursor position: set to " + cursorPosition);
      } else {
        menus[menuName].settings.lastCursorPosition = 0;
        cursorPosition = 0;
        console.log("(else) function: setMenu() cursor position: reset to 0");
      }
    } else {
      // default in case data object doesn't have settings
      console.log("No settings specified: setting to default");
      startAlternating();
      cursorPosition = 0;
    }
  }
}

var audioContext = new window.AudioContext();

// Function to load and decode audio file
function loadBeepSound(url) {
  if (debugMode) console.log("Function: loadBeepSound(url)");
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
        // source.start(0); // Play immediatly  (uncomment to bring back beep)
      } else {
        console.error("Beep sound not loaded");
      }
    })
    .catch((error) => {
      console.error("Error resuming audio context:", error);
    });
}

function updateScreen(imageIndex) {
  if (debugMode) console.log("Function: updateScreen(imageIndex)");
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
  if (debugMode) console.log("Function: powerOn()");
  const intervals = [300, 600, 900, 1200, 1500, 1800, 3000];
  intervals.forEach((interval, index) => {
    setTimeout(() => updateScreen(index), interval);
  });
}
