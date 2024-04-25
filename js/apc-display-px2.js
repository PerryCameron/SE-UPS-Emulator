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

function printMenus() {
  console.clear();
  console.log("Menu Level: " + menuLevel);
  console.log("0:" + lastMenu[0]);
  if (menuLevel > 0) console.log("1:" + lastMenu[1]);
  if (menuLevel > 1) console.log("2:" + lastMenu[2]);
  if (menuLevel > 2) console.log("3:" + lastMenu[3]);
  if (menuLevel > 3) console.log("4:" + lastMenu[4]);
  if (menuLevel > 4) console.log("5:" + lastMenu[5]);
  if (menuLevel > 5) console.log("6:" + lastMenu[6]);
  if (menuLevel > 6) console.log("7:" + lastMenu[7]);
  console.log(
    "toggle: " + toggle + " inBypass:" + inBypass + " inSelfTest:" + inSelfTest + " anyKeyPress: " + anyKeyPress
  );
  console.log("cursorPosition: " + cursorPosition + " choicePosition: " + choicePosition + " menuSize: " + menuSize);
  console.log("preEditMode: " + preEditMode + " editMode: " + editMode);
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
    case "frame-status-menu":
      return frameStatusMenuScreen(includeCursor);
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
    default:
      return scrollDownScreen(includeCursor);
  }
}

function frameStatusMenuScreen(includeCursor) {
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

function additionalInfoScreen(includeCursor) {
  let onScreen = "";
  if (lastMenu[4] === "Power Modules") {
    selectedObject = menus["Additional Info PM"];
  } else if (lastMenu[5] === "Frame Status") {
    selectedObject = menus["Additional Info Frame Status"];
  }
  return onScreen;
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
    onScreen = printSimpleScreen(menus["Raw Status"]["mim"].menu);
  } else if (lastMenu[5] === "Redundant Intel Mod") {
    onScreen = printSimpleScreen(menus["Raw Status"]["rim"].menu);
  } else if (lastMenu[5] === "Frame Status") {
    onScreen = printSimpleScreen(menus["Raw Status"]["frame"].menu);
  }
  return onScreen;
}

function manufactureDataScreen() {
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
  return Object.values(menu).join("\n");
}

function displayScreen() {
  stopAlternating();
  let onScreen = selectedObject["menu"]["0"] + "\n";
  onScreen += selectedObject["menu"]["1"] + "\n";
  onScreen += selectedObject["menu"]["2"] + "\n";
  onScreen += selectedObject["menu"]["3"] + "\n";
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
  printMenus();
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
  } else if (menuName === "On & Ok") {
    console.log("doing nothing");
  } else {
    menuLevel = level;
    lastMenu[menuLevel] = menuName;
    if (menus[menuName]["menu"] === undefined) {
      console.log("This menu is undefined");
    } else console.log(menus[menuName]["menu"]);
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
