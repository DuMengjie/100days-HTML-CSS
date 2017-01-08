// "Baby monitor"
// from Dribbble to codepen.
// Designer : Paul Flavius Nechita <@npaulflavius>
// Original shot : https://dribbble.com/shots/2230782-Day-069-Baby-Monitor
//
// Credits :
//
// I used Hammer.js for the few interactions, such as the menu expander,
// and the pink "pad" in the controls.
//
// The majority of the pad related javascript code, was shamelessly & in majority
// copy pasted from the sources of the homepage of http://hammerjs.github.io/
// I just added a few modifications to fit my wishes

// Control Pad button
"use strict";

var screen = document.querySelector(".pad");
var el = document.querySelector(".thumb");

screen.addEventListener('mouseout', function () {
  el.style.transform = 'translate3d(15px,15px,0)';
});
el.addEventListener('mouseup', function () {
  el.style.transform = 'translate3d(15px,15px,0)';
});

// Expand the controls
var element = document.getElementById('menu-expander');
var hammertime = Hammer(element).on("tap", function (event) {
  var menu = document.querySelector('.content-menu');
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
});

var START_X = Math.round((screen.offsetWidth - el.offsetWidth) / 2);
var START_Y = Math.round((screen.offsetHeight - el.offsetHeight) / 2);

var ticking = false;
var transform;
var timer;

var mc = new Hammer.Manager(el);
mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
mc.add(new Hammer.Tap());

mc.on("panstart panmove", onPan);

var reqAnimationFrame = (function () {
  return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

var transform = {
  translate: { x: START_X, y: START_Y },
  scale: 1,
  angle: 0,
  rx: 0,
  ry: 0,
  rz: 0
};
function resetElement() {
  el.className = 'animate thumb';
  transform = {
    translate: { x: START_X, y: START_Y },
    scale: 1,
    angle: 0,
    rx: 0,
    ry: 0,
    rz: 0
  };
  requestElementUpdate();
}

function updateElementTransform() {
  var value = ['translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)', 'scale(' + transform.scale + ', ' + transform.scale + ')', 'rotate3d(' + transform.rx + ',' + transform.ry + ',' + transform.rz + ',' + transform.angle + 'deg)'];

  value = value.join(" ");
  el.style.webkitTransform = value;
  el.style.mozTransform = value;
  el.style.transform = value;
  ticking = false;
}

function requestElementUpdate() {
  if (!ticking) {
    reqAnimationFrame(updateElementTransform);
    ticking = true;
  }
}
function onPan(ev) {
  el.className = 'thumb';
  transform.translate = {
    x: START_X + ev.deltaX,
    y: START_Y + ev.deltaY
  };

  requestElementUpdate();
}

var initScale = 1;
function onPinch(ev) {
  if (ev.type == 'pinchstart') {
    initScale = transform.scale || 1;
  }

  el.className = 'thumb';
  transform.scale = initScale * ev.scale;

  requestElementUpdate();
}

var initAngle = 0;
function onRotate(ev) {
  if (ev.type == 'rotatestart') {
    initAngle = transform.angle || 0;
  }

  el.className = 'thumb';
  transform.rz = 1;
  transform.angle = initAngle + ev.rotation;

  requestElementUpdate();
}
resetElement();

// Fill input range
var sheet = document.createElement('style'),
    $rangeInput = document.querySelector('.range'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function getTrackStyle(el) {
  var curVal = el.value,
      style = '';

  for (var i = 0; i < prefs.length; i++) {
    style += '.range::-' + prefs[i] + '{background: linear-gradient(to right, #EC909F 0%, #EC909F ' + curVal + '%, #E7E7E7 ' + curVal + '%, #E7E7E7 100%)}';
  }

  return style;
};

$rangeInput.addEventListener('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Open webcam
// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
  // Grab elements, create settings, etc.
  var video = document.getElementById("video"),
      videoObj = { "video": true },
      errBack = function errBack(error) {
    console.log("Video capture error: ", error.code);
  };

  // Put video listeners into place
  if (navigator.getUserMedia) {
    // Standard
    navigator.getUserMedia(videoObj, function (stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if (navigator.webkitGetUserMedia) {
    // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  } else if (navigator.mozGetUserMedia) {
    // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
}, false);

// Zoom in
var rangeInput = document.querySelector('input');
rangeInput.addEventListener("input", function () {
  document.getElementById('video').style.transform = 'scale(' + rangeInput.value / 10 + ')';
}, false);

// menu active tab
var menuItems = document.querySelectorAll('.menu-item');
var i;
for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function () {
    Array.prototype.forEach.call(menuItems, function (item) {
      item.classList.remove('active');
    });
    if (!this.classList.contains('active')) {
      this.classList.add('active');
    }
  });
}