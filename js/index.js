"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var time = document.getElementById("time");
var HOURS = "12";
var MINUTES = "22";
var SECONDS = "36";
var DATE = "AM";
var hourAlarm = document.getElementById("alarm-hour");
var minuteAlarm = document.getElementById("alarm-min");
var dateAlarm = document.getElementById("alarm-date");
function setCurrentValues() {
  var currentTime = new Date(Date.now());
  if (currentTime.getHours() < 10) {
    HOURS = "0".concat(currentTime.getHours());
  } else if (currentTime.getHours() > 12 && currentTime.getHours() < 20) {
    if (currentTime.getHours() - 12 < 10) {
      HOURS = "0".concat(currentTime.getHours() - 12);
    } else {
      HOURS = "".concat(currentTime.getHours() - 12);
    }
  } else {
    HOURS = "".concat(currentTime.getHours() - 12);
  }
  MINUTES = currentTime.getMinutes() < 10 ? "".concat("0" + currentTime.getMinutes()) : "".concat(currentTime.getMinutes());
  SECONDS = currentTime.getSeconds() < 10 ? "".concat("0" + currentTime.getSeconds()) : "".concat(currentTime.getSeconds());
  DATE = currentTime.getHours() < 12 ? "AM" : "PM";
  if (time) time.innerHTML = "".concat(HOURS, " : ").concat(MINUTES, " : ").concat(SECONDS, " ").concat(DATE);
}

// Update Time Each All Second
setInterval(function () {
  setCurrentValues();
}, 1000);
var submitAlarm = document.getElementById("submit");
var audioPlayer = document.querySelector(".audio-player");
var alertAlarm = document.querySelector(".alert");
var alarmsListContainer = document.getElementById("alarms-list");
var alarmHolders = document.querySelectorAll(".alarm-holder");
var arrayOfAlarmsDOM = Array.from(alarmHolders);
var cancelAlarm = document.getElementById("cancel-alarm");
var snoozeAlarm = document.getElementById("snooze-alarm");
var audio = document.getElementById("audioPlayer");
var addAlarmBtn = document.getElementById("add-alarm");
var addAlarmPopup = document.querySelector(".add-alarm-control");
var removeAlarmsBtn = document.getElementById("remove-alarms");
var arrayOfCloseBtns = Array.from(document.querySelectorAll(".close-popup"));
var alarmDateTitle = document.getElementById("alarm-date-title");
var alarmDate = " 03 : 30 : AM ";
window.addEventListener("load", function () {
  // Start Check Alarms
  alarmCheck();

  // Set Currnet Time On Login Website
  setCurrentValues();
  hourAlarm.value = HOURS;
  minuteAlarm.value = MINUTES;
  dateAlarm.value = DATE.toLowerCase();

  // Make Blob URL From Default Audio SONG
  makeBlobUrl();
});

// Make Blob URL From Default Alarm Song
function makeBlobUrl() {
  return _makeBlobUrl.apply(this, arguments);
}
function _makeBlobUrl() {
  _makeBlobUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var alarmSrc, respownse, audioBlob, blobUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          alarmSrc = audio.src;
          _context.prev = 1;
          _context.next = 4;
          return fetch(alarmSrc);
        case 4:
          respownse = _context.sent;
          if (respownse.ok) {
            _context.next = 7;
            break;
          }
          throw new Error("Failed To Fetch File ");
        case 7:
          _context.next = 9;
          return respownse.blob();
        case 9:
          audioBlob = _context.sent;
          blobUrl = URL.createObjectURL(audioBlob);
          audio.src = blobUrl;
          _context.next = 16;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 14]]);
  }));
  return _makeBlobUrl.apply(this, arguments);
}
var alarmsList = [{
  alarmDate: "03".concat(" : ", "30", " : ", "AM"),
  id: new Date(Date.now()).getTime()
}];
var alarmsInStorege = window.localStorage.getItem("alarms-list");
if (alarmsInStorege) {
  alarmsList = JSON.parse(alarmsInStorege);
  createAlarmsDOM();
} else {
  createAlarmsDOM();
}
if (alarmsList.length == 0) {
  if (alarmsListContainer) alarmsListContainer.innerHTML = "There is no alarm.";
}
var files = document.getElementsByTagName("input")[0];
var file;
var fileURL;
files.addEventListener("change", function (e) {
  var target = e.target;
  if (target.files) {
    file = target.files[0];
  }
  console.log(file);
  localStorage.setItem("file", JSON.stringify(file));
  console.log(file);
  fileURL = URL.createObjectURL(file);
});

// Create URL Of File And Play It

// Create Alarm Player And Actions
function playAlarm(alarmDate) {
  resetAudio();
  if (alarmDateTitle) alarmDateTitle.innerHTML = alarmDate;
  if (file) {
    if (file.type.startsWith("audio")) if (fileURL) audio.src = fileURL;
    audio.play().then(function () {
      if (audioPlayer) audioPlayer.classList.remove("hidden");
    }).catch(function () {
      if (audioPlayer) audioPlayer.classList.add("hidden");
    });
  } else {
    audio.play().then(function () {
      if (audioPlayer) audioPlayer.classList.remove("hidden");
    }).catch(function () {
      if (audioPlayer) audioPlayer.classList.add("hidden");
    });
  }
}
function resetAudio() {
  audio.currentTime = 0;
  audio.volume = 1;
}

// Check If There Alarm Or Not Status
var checking = true;

// Check Second Per Second For Alarms
function alarmCheck() {
  checking = true;
  var checker = setInterval(function () {
    var currnetDate = "".concat(HOURS, " : ").concat(MINUTES, " : ").concat(DATE);
    alarmsList.forEach(function (e) {
      if (e.alarmDate == currnetDate) {
        alarmDate = e.alarmDate;
        playAlarm(alarmDate);
        clearInterval(checker);

        // Diseble Checking Alarms Holder

        checking = false;
      }
    });
  }, 1000);
}
submitAlarm === null || submitAlarm === void 0 || submitAlarm.addEventListener("click", function () {
  var alarmId = new Date(Date.now()).getTime();
  createNewAlarm("".concat(hourAlarm.value, " : ").concat(minuteAlarm.value, " : ").concat(dateAlarm.value.toUpperCase()), alarmId);
  if (alertAlarm) {
    alertAlarm.innerHTML = "We will alert you at the hour : ".concat(hourAlarm.value, ":").concat(minuteAlarm.value, ":").concat(dateAlarm.value);
    alertAlarm.style.animation = "dropAlert 5s 0s 1 ease-in-out forwards";
    setTimeout(function () {
      alertAlarm.style.animation = "none";
    }, 3000);
  }
  addAlarmPopup === null || addAlarmPopup === void 0 || addAlarmPopup.classList.add("hidden");
});
function createNewAlarm(alarmDate, id) {
  var newAlarm = {
    alarmDate: alarmDate,
    id: id
  };
  var equal = false;
  for (var i = 0; i < alarmsList.length; i++) {
    if (alarmsList[i].alarmDate == newAlarm.alarmDate) {
      equal = true;
    }
  }
  if (!equal) {
    alarmsList.push(newAlarm);
    window.localStorage.setItem("alarms-list", JSON.stringify(alarmsList));
    createAlarmsDOM();
  }
}
function createAlarmsDOM() {
  if (alarmsListContainer) alarmsListContainer.innerHTML = "";
  alarmsList.forEach(function (e) {
    var alarmHolder = document.createElement("div");
    alarmHolder.classList.add("alarm-holder", "d-flex", "align-items-center", "justify-content-evenly", "w-100");
    alarmHolder.setAttribute("data-id", "".concat(e.id));
    var alarmDate = document.createElement("p");
    alarmDate.classList.add("text-white", "fs-2");
    alarmDate.innerText = e.alarmDate;
    alarmHolder.appendChild(alarmDate);
    var alarmRemove = document.createElement("span");
    alarmRemove.classList.add("remove-alarm", "d-block", "position-relative");
    var clickLayer = document.createElement("span");
    clickLayer.classList.add("remove", "position-absolute", "w-100", "h-100");
    alarmRemove.appendChild(clickLayer);
    var iconLayer = document.createElement("i");
    iconLayer.classList.add("fa-solid", "fa-trash", "fs-3");
    alarmRemove.appendChild(iconLayer);
    alarmHolder.appendChild(alarmRemove);
    if (alarmsListContainer) alarmsListContainer.appendChild(alarmHolder);
    alarmHolders = document.querySelectorAll(".alarm-holder");
    arrayOfAlarmsDOM = Array.from(alarmHolders);
    arrayOfAlarmsDOM.forEach(function (ele) {
      ele.addEventListener("click", function (e) {
        return checkDelete(e);
      });
    });
  });
}
function checkDelete(e) {
  var _target$parentNode;
  var target = e.target;
  var holder = (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 ? void 0 : _target$parentNode.parentNode;
  var alarmId = holder.getAttribute("data-id");
  if (target.classList.contains("remove")) if (alarmId) deleteAlarm(alarmId);
  if ((alarmsListContainer === null || alarmsListContainer === void 0 ? void 0 : alarmsListContainer.innerHTML) == "") alarmsListContainer.innerHTML = "There is no alarm.";
}
function deleteFromStorege(id) {
  alarmsList = alarmsList.filter(function (e) {
    return e.id != +id;
  });
  localStorage.setItem("alarms-list", JSON.stringify(alarmsList));
}
function deleteAlarm(id) {
  deleteFromStorege(id);
  var removedElement = document.querySelector("div[data-id=\"".concat(id, "\"]"));
  removedElement === null || removedElement === void 0 || removedElement.remove();
}
alarmsListContainer === null || alarmsListContainer === void 0 || alarmsListContainer.addEventListener("click", function () {
  return alarmsListContainer === null || alarmsListContainer === void 0 ? void 0 : alarmsListContainer.classList.toggle("hidden");
});

// Audio Player Controls

// Play/Pause the audio

// Close The Audio Player And Pause Audio
function closeAudioPlayer() {
  audio.pause();
  if (audioPlayer) {
    audioPlayer.classList.add("hidden");
  }
}

// Update progress bar as the audio plays

// Seek audio when progress bar is clicked

addAlarmBtn === null || addAlarmBtn === void 0 || addAlarmBtn.addEventListener("click", function () {
  console.log("clicked");
  addAlarmPopup === null || addAlarmPopup === void 0 || addAlarmPopup.classList.toggle("hidden");
});
removeAlarmsBtn === null || removeAlarmsBtn === void 0 || removeAlarmsBtn.addEventListener("click", function () {
  alarmsList = [];
  localStorage.setItem("alarms-list", JSON.stringify(alarmsList));
  if (alarmsListContainer) alarmsListContainer.innerHTML = "There is no alarm.";
});
arrayOfCloseBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var _btn$parentElement;
    if (btn.nodeName.toLowerCase() == "div") (_btn$parentElement = btn.parentElement) === null || _btn$parentElement === void 0 || _btn$parentElement.classList.add("hidden");
  });
});
snoozeAlarm === null || snoozeAlarm === void 0 || snoozeAlarm.addEventListener("click", function () {
  closeAudioPlayer();
  var excludeSeconds = 60 - +SECONDS;
  setTimeout(function () {
    alarmCheck();
  }, excludeSeconds * 1000);
  var tenMinutesWithMilleSeconds = 10 * 60000;
  setTimeout(function () {
    playAlarm(alarmDate);
  }, tenMinutesWithMilleSeconds);
});
var clickCounter = document.getElementById("click-counter");
cancelAlarm === null || cancelAlarm === void 0 ? void 0 : cancelAlarm.addEventListener("click", function () {
  if (clickCounter) {
    var getClicksTimes = clickCounter.getAttribute("clicks");
    if (getClicksTimes) {
      if (+getClicksTimes >= 10) {
        clickCounter.innerHTML = "0 / 10";
        closeAudioPlayer();
        clickCounter.setAttribute("clicks", "0");
        return false;
      }
      clickCounter.innerHTML = "".concat(+getClicksTimes + 1, " / 10");
      clickCounter.setAttribute("clicks", "".concat(+getClicksTimes + 1));
    }
  } else {
    clickCounter = document.createElement("h3");
    clickCounter.classList.add("position-absolute", "start-50", "top-0", "translate-middle-x", "text-danger", "text-center", "fw-bold");
    clickCounter.innerHTML = "0 / 10";
    clickCounter.setAttribute("clicks", "0");
    clickCounter.id = "click-counter";
    audioPlayer === null || audioPlayer === void 0 || audioPlayer.appendChild(clickCounter);
  }
  var excludeSeconds = 60 - +SECONDS;
  setTimeout(function () {
    alarmCheck();
  }, excludeSeconds * 1000);
});