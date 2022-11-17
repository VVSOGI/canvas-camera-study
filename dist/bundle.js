/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function() {

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d", {
  willReadFrequently: true
});
// ctx.scale(0.5, 0.5);
var video = document.getElementById("video");
video.onloadeddata = function () {
  render(300, 150, [0, 0, 0, 255]);
  canvas.width = 1000;
  canvas.height = 400;
  var stream = canvas.captureStream(30);
  var makeVideo = document.createElement("video");
  makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");
  document.body.appendChild(makeVideo);
};
function render(width, height, color) {
  ctx.drawImage(video, 0, 0, width, height);
  var totalRatio = 30;
  var sideRatio = totalRatio * 16;
  var rowRatio = width * height * 4 / height + sideRatio;
  var array = new Array(rowRatio * totalRatio).fill(0);
  var data = ctx.getImageData(0, 0, width, height).data;
  var rgbaArray = [];
  for (var i = 0; i < data.length; i += 4) {
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    var a = data[i + 3];
    rgbaArray.push([r, g, b, a]);
  }
  for (var i = 0; i < rgbaArray.length; i += width) {
    // middle rgba fix color
    rgbaArray[i + width / 2 - 1] = color;
    console.log(color);
    var frontRgbaCoordinates = rgbaArray[i];
    var backRgbaCoordinates = rgbaArray[i + width - 1];
    var middleRgbaCoordinates = rgbaArray[i + width / 2 - 1];
    for (var j = 0; j < totalRatio; j += 1) {
      frontRgbaCoordinates.unshift.apply(frontRgbaCoordinates, __spreadArray([], __read(color), false));
      backRgbaCoordinates.push.apply(backRgbaCoordinates, __spreadArray([], __read(color), false));
      middleRgbaCoordinates.push.apply(middleRgbaCoordinates, __spreadArray([], __read(color), false));
      middleRgbaCoordinates.unshift.apply(middleRgbaCoordinates, __spreadArray([], __read(color), false));
    }
  }
  var fixedArray = rgbaArray.flat();
  for (var i = 0; i < array.length - 3; i += 4) {
    array[i] = 120;
    array[i + 1] = 120;
    array[i + 2] = 120;
    array[i + 3] = 255;
  }
  var testing = __spreadArray(__spreadArray(__spreadArray([], __read(array), false), __read(fixedArray), false), __read(array), false);
  var arr = new Uint8ClampedArray(testing);
  var imageData = new ImageData(arr, width + totalRatio * 4, height + totalRatio * 2);
  ctx.putImageData(imageData, 0, 0);
  setTimeout(function () {
    render(width, height, color);
  }, 1000 / 15);
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[0]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFFbkQsSUFBTXVCLEdBQUcsR0FBRyxJQUFJQyxpQkFBaUIsQ0FBQ0YsT0FBTyxDQUFDO0VBQzFDLElBQU1HLFNBQVMsR0FBRyxJQUFJQyxTQUFTLENBQzdCSCxHQUFHLEVBQ0h2QyxLQUFLLEdBQUdhLFVBQVUsR0FBRyxDQUFDLEVBQ3RCWixNQUFNLEdBQUdZLFVBQVUsR0FBRyxDQUFDLENBQ3hCO0VBQ0RuQixHQUFHLENBQUNpRCxZQUFZLENBQUNGLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBRWpDRyxVQUFVLENBQUM7SUFDVDdDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUVVLEtBQUssQ0FBQztFQUM5QixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNmOzs7Ozs7VUVsRkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhcy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG4gIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSxcbn0pO1xuXG4vLyBjdHguc2NhbGUoMC41LCAwLjUpO1xuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cbnZpZGVvLm9ubG9hZGVkZGF0YSA9ICgpID0+IHtcbiAgcmVuZGVyKDMwMCwgMTUwLCBbMCwgMCwgMCwgMjU1XSk7XG4gIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gIGNhbnZhcy5oZWlnaHQgPSA0MDA7XG4gIGNvbnN0IHN0cmVhbSA9IGNhbnZhcy5jYXB0dXJlU3RyZWFtKDMwKTtcblxuICBjb25zdCBtYWtlVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxuICAgIFwidmlkZW9cIlxuICApIGFzIEhUTUxFbGVtZW50IGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgbWFrZVZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgbWFrZVZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgbWFrZVZpZGVvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFrZWQtdmlkZW9cIik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlVmlkZW8pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogbnVtYmVyW10pIHtcbiAgY3R4LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IHRvdGFsUmF0aW8gPSAzMDtcbiAgY29uc3Qgc2lkZVJhdGlvID0gdG90YWxSYXRpbyAqIDE2O1xuICBjb25zdCByb3dSYXRpbyA9ICh3aWR0aCAqIGhlaWdodCAqIDQpIC8gaGVpZ2h0ICsgc2lkZVJhdGlvO1xuXG4gIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KHJvd1JhdGlvICogdG90YWxSYXRpbykuZmlsbCgwKTtcbiAgY29uc3QgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcbiAgY29uc3QgcmdiYUFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgY29uc3QgciA9IGRhdGFbaV07XG4gICAgY29uc3QgZyA9IGRhdGFbaSArIDFdO1xuICAgIGNvbnN0IGIgPSBkYXRhW2kgKyAyXTtcbiAgICBjb25zdCBhID0gZGF0YVtpICsgM107XG4gICAgcmdiYUFycmF5LnB1c2goW3IsIGcsIGIsIGFdKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmdiYUFycmF5Lmxlbmd0aDsgaSArPSB3aWR0aCkge1xuICAgIC8vIG1pZGRsZSByZ2JhIGZpeCBjb2xvclxuICAgIHJnYmFBcnJheVtpICsgd2lkdGggLyAyIC0gMV0gPSBjb2xvcjtcbiAgICBjb25zb2xlLmxvZyhjb2xvcik7XG5cbiAgICBjb25zdCBmcm9udFJnYmFDb29yZGluYXRlcyA9IHJnYmFBcnJheVtpXTtcbiAgICBjb25zdCBiYWNrUmdiYUNvb3JkaW5hdGVzID0gcmdiYUFycmF5W2kgKyB3aWR0aCAtIDFdO1xuICAgIGNvbnN0IG1pZGRsZVJnYmFDb29yZGluYXRlcyA9IHJnYmFBcnJheVtpICsgd2lkdGggLyAyIC0gMV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsUmF0aW87IGogKz0gMSkge1xuICAgICAgZnJvbnRSZ2JhQ29vcmRpbmF0ZXMudW5zaGlmdCguLi5jb2xvcik7XG4gICAgICBiYWNrUmdiYUNvb3JkaW5hdGVzLnB1c2goLi4uY29sb3IpO1xuICAgICAgbWlkZGxlUmdiYUNvb3JkaW5hdGVzLnB1c2goLi4uY29sb3IpO1xuICAgICAgbWlkZGxlUmdiYUNvb3JkaW5hdGVzLnVuc2hpZnQoLi4uY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZpeGVkQXJyYXkgPSByZ2JhQXJyYXkuZmxhdCgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoIC0gMzsgaSArPSA0KSB7XG4gICAgYXJyYXlbaV0gPSAxMjA7XG4gICAgYXJyYXlbaSArIDFdID0gMTIwO1xuICAgIGFycmF5W2kgKyAyXSA9IDEyMDtcbiAgICBhcnJheVtpICsgM10gPSAyNTU7XG4gIH1cblxuICBjb25zdCB0ZXN0aW5nID0gWy4uLmFycmF5LCAuLi5maXhlZEFycmF5LCAuLi5hcnJheV07XG5cbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHRlc3RpbmcpO1xuICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKFxuICAgIGFycixcbiAgICB3aWR0aCArIHRvdGFsUmF0aW8gKiA0LFxuICAgIGhlaWdodCArIHRvdGFsUmF0aW8gKiAyXG4gICk7XG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZW5kZXIod2lkdGgsIGhlaWdodCwgY29sb3IpO1xuICB9LCAxMDAwIC8gMTUpO1xufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bMF0oKTtcbiIsIiJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsInZpZGVvIiwib25sb2FkZWRkYXRhIiwicmVuZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJlYW0iLCJjYXB0dXJlU3RyZWFtIiwibWFrZVZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInNyY09iamVjdCIsImF1dG9wbGF5Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29sb3IiLCJkcmF3SW1hZ2UiLCJ0b3RhbFJhdGlvIiwic2lkZVJhdGlvIiwicm93UmF0aW8iLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsImRhdGEiLCJnZXRJbWFnZURhdGEiLCJyZ2JhQXJyYXkiLCJpIiwibGVuZ3RoIiwiciIsImciLCJiIiwiYSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZnJvbnRSZ2JhQ29vcmRpbmF0ZXMiLCJiYWNrUmdiYUNvb3JkaW5hdGVzIiwibWlkZGxlUmdiYUNvb3JkaW5hdGVzIiwiaiIsInVuc2hpZnQiLCJmaXhlZEFycmF5IiwiZmxhdCIsInRlc3RpbmciLCJhcnIiLCJVaW50OENsYW1wZWRBcnJheSIsImltYWdlRGF0YSIsIkltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9