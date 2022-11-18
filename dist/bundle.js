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
// const double = document.getElementById("double") as HTMLdoubleElement;
var ctx = canvas.getContext("2d", {
  willReadFrequently: true
});
// ctx.scale(0.5, 0.5);
var video = document.getElementById("video");
var viewpt = document.getElementById("viewpt");
viewpt.onloadeddata = function () {
  window.viewpt = viewpt;
  viewpt.autoplay = true;
};
video.onloadeddata = function () {
  var black = [122, 122, 122, 255];
  var ratio = 10;
  var width = 1200;
  var height = 600;
  render(video, width, height, ratio, black);
  canvas.width = width + ratio * 4;
  canvas.height = height + ratio * 4;
  var stream = canvas.captureStream(60);
  var makeVideo = document.createElement("video");
  // makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");
  // document.body.appendChild(makeVideo);
};

function findFrontPosition() {}
function findBackPosition() {}
function render(video, width, height, ratio, coveredColor) {
  // console.time();
  ctx.drawImage(video, 0, 0, width, height);
  var _a = __read(coveredColor, 4),
    red = _a[0],
    green = _a[1],
    blue = _a[2],
    alpha = _a[3];
  var widthNumbers = width * height * 4 / height;
  var sideRatio = ratio * 16;
  var rowRatio = widthNumbers + sideRatio;
  var array = new Array(rowRatio * ratio).fill(0);
  console.time("좌우 영상");
  var data = __spreadArray([], __read(ctx.getImageData(0, 0, width, height).data), false);
  console.timeEnd("좌우 영상");
  var fixedData = [];
  for (var i = 0; i < ratio; i += 1) {
    fixedData.push(red);
    fixedData.push(green);
    fixedData.push(blue);
    fixedData.push(alpha);
  }
  // console.time("좌우 영상");
  for (var i = 0; i < data.length - 1; i += widthNumbers) {
    data.splice(i, 1, __spreadArray(__spreadArray([], __read(fixedData), false), [data[i]], false));
    data.splice(i + widthNumbers - 1, 1, __spreadArray([data[i + widthNumbers - 1]], __read(fixedData), false));
    data.splice(i + widthNumbers / 2, 1, __spreadArray(__spreadArray(__spreadArray([], __read(fixedData), false), __read(fixedData), false), [data[i + widthNumbers / 2]], false));
  }
  // console.timeEnd("좌우 영상");
  var createdUint8Array = [];
  // console.time("이중 배열");
  for (var i = 0; i < data.length; i++) {
    if (typeof data[i] === "object") {
      createdUint8Array.push.apply(createdUint8Array, __spreadArray([], __read(data[i]), false));
      continue;
    }
    createdUint8Array.push(data[i]);
  }
  // console.timeEnd("이중 배열");
  // console.time("위아래 여백");
  for (var i = 0; i < array.length - 3; i += 4) {
    array[i] = red;
    array[i + 1] = green;
    array[i + 2] = blue;
    array[i + 3] = alpha;
  }
  // console.timeEnd("위아래 여백");
  // console.time("최종 병합");
  var testing = __spreadArray(__spreadArray(__spreadArray([], __read(array), false), __read(createdUint8Array), false), __read(array), false);
  // console.timeEnd("최종 병합");
  var arr = new Uint8ClampedArray(testing);
  var imageData = new ImageData(arr, width + ratio * 4, height + ratio * 2);
  ctx.putImageData(imageData, 0, 0);
  // console.timeEnd();
  setTimeout(function () {
    render(video, width, height, ratio, coveredColor);
  }, 1000 / 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUZJLGlCQUFpQixDQUFDSCxJQUFJLENBQUNMLElBQUksQ0FBQ0ksQ0FBQyxDQUFDLENBQUM7O0VBR2pDO0VBQ0E7RUFFQSxLQUFLLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1QsS0FBSyxDQUFDVyxNQUFNLEdBQUcsQ0FBQyxFQUFFRixDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzVDVCxLQUFLLENBQUNTLENBQUMsQ0FBQyxHQUFHaEIsR0FBRztJQUNkTyxLQUFLLENBQUNTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2YsS0FBSztJQUNwQk0sS0FBSyxDQUFDUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdkLElBQUk7SUFDbkJLLEtBQUssQ0FBQ1MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHYixLQUFLOztFQUV0QjtFQUNBO0VBQ0EsSUFBTWtCLE9BQU8sd0RBQU9kLEtBQUssa0JBQUthLGlCQUFpQixrQkFBS2IsS0FBSyxTQUFDO0VBQzFEO0VBQ0EsSUFBTWUsR0FBRyxHQUFHLElBQUlDLGlCQUFpQixDQUFDRixPQUFPLENBQUM7RUFDMUMsSUFBTUcsU0FBUyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0gsR0FBRyxFQUFFbEMsS0FBSyxHQUFHRCxLQUFLLEdBQUcsQ0FBQyxFQUFFRSxNQUFNLEdBQUdGLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDM0VULEdBQUcsQ0FBQ2dELFlBQVksQ0FBQ0YsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFFakM7RUFDQUcsVUFBVSxDQUFDO0lBQ1RyQyxNQUFNLENBQUNULEtBQUssRUFBRU8sS0FBSyxFQUFFQyxNQUFNLEVBQUVGLEtBQUssRUFBRVcsWUFBWSxDQUFDO0VBQ25ELENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2Y7Ozs7OztVRWxIQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4vLyBjb25zdCBkb3VibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdWJsZVwiKSBhcyBIVE1MZG91YmxlRWxlbWVudDtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG4gIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSxcbn0pO1xuXG4vLyBjdHguc2NhbGUoMC41LCAwLjUpO1xuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5jb25zdCB2aWV3cHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdwdFwiKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuXG52aWV3cHQub25sb2FkZWRkYXRhID0gKCkgPT4ge1xuICAod2luZG93IGFzIGFueSkudmlld3B0ID0gdmlld3B0O1xuICB2aWV3cHQuYXV0b3BsYXkgPSB0cnVlO1xufTtcblxudmlkZW8ub25sb2FkZWRkYXRhID0gKCkgPT4ge1xuICBjb25zdCBibGFjayA9IFsxMjIsIDEyMiwgMTIyLCAyNTVdO1xuICBjb25zdCByYXRpbyA9IDEwO1xuICBjb25zdCB3aWR0aCA9IDEyMDA7XG4gIGNvbnN0IGhlaWdodCA9IDYwMDtcbiAgcmVuZGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCByYXRpbywgYmxhY2spO1xuICBjYW52YXMud2lkdGggPSB3aWR0aCArIHJhdGlvICogNDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodCArIHJhdGlvICogNDtcbiAgY29uc3Qgc3RyZWFtID0gY2FudmFzLmNhcHR1cmVTdHJlYW0oNjApO1xuXG4gIGNvbnN0IG1ha2VWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJ2aWRlb1wiXG4gICkgYXMgSFRNTEVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudDtcblxuICAvLyBtYWtlVmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICBtYWtlVmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICBtYWtlVmlkZW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWtlZC12aWRlb1wiKTtcblxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VWaWRlbyk7XG59O1xuXG5mdW5jdGlvbiBmaW5kRnJvbnRQb3NpdGlvbigpIHt9XG5cbmZ1bmN0aW9uIGZpbmRCYWNrUG9zaXRpb24oKSB7fVxuXG5mdW5jdGlvbiByZW5kZXIoXG4gIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgcmF0aW86IG51bWJlcixcbiAgY292ZXJlZENvbG9yOiBudW1iZXJbXVxuKSB7XG4gIC8vIGNvbnNvbGUudGltZSgpO1xuICBjdHguZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXSA9IGNvdmVyZWRDb2xvcjtcbiAgY29uc3Qgd2lkdGhOdW1iZXJzID0gKHdpZHRoICogaGVpZ2h0ICogNCkgLyBoZWlnaHQ7XG4gIGNvbnN0IHNpZGVSYXRpbyA9IHJhdGlvICogMTY7XG4gIGNvbnN0IHJvd1JhdGlvID0gd2lkdGhOdW1iZXJzICsgc2lkZVJhdGlvO1xuXG4gIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KHJvd1JhdGlvICogcmF0aW8pLmZpbGwoMCk7XG4gIGNvbnNvbGUudGltZShcIuyijOyasCDsmIHsg4FcIik7XG4gIGNvbnN0IGRhdGE6IGFueVtdID0gWy4uLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YV07XG4gIGNvbnNvbGUudGltZUVuZChcIuyijOyasCDsmIHsg4FcIik7XG4gIGNvbnN0IGZpeGVkRGF0YSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGlvOyBpICs9IDEpIHtcbiAgICBmaXhlZERhdGEucHVzaChyZWQpO1xuICAgIGZpeGVkRGF0YS5wdXNoKGdyZWVuKTtcbiAgICBmaXhlZERhdGEucHVzaChibHVlKTtcbiAgICBmaXhlZERhdGEucHVzaChhbHBoYSk7XG4gIH1cblxuICAvLyBjb25zb2xlLnRpbWUoXCLsoozsmrAg7JiB7IOBXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC0gMTsgaSArPSB3aWR0aE51bWJlcnMpIHtcbiAgICBkYXRhLnNwbGljZShpLCAxLCBbLi4uZml4ZWREYXRhLCBkYXRhW2ldXSk7XG4gICAgZGF0YS5zcGxpY2UoaSArIHdpZHRoTnVtYmVycyAtIDEsIDEsIFtcbiAgICAgIGRhdGFbaSArIHdpZHRoTnVtYmVycyAtIDFdLFxuICAgICAgLi4uZml4ZWREYXRhLFxuICAgIF0pO1xuICAgIGRhdGEuc3BsaWNlKGkgKyB3aWR0aE51bWJlcnMgLyAyLCAxLCBbXG4gICAgICAuLi5maXhlZERhdGEsXG4gICAgICAuLi5maXhlZERhdGEsXG4gICAgICBkYXRhW2kgKyB3aWR0aE51bWJlcnMgLyAyXSxcbiAgICBdKTtcbiAgfVxuICAvLyBjb25zb2xlLnRpbWVFbmQoXCLsoozsmrAg7JiB7IOBXCIpO1xuICBjb25zdCBjcmVhdGVkVWludDhBcnJheSA9IFtdO1xuXG4gIC8vIGNvbnNvbGUudGltZShcIuydtOykkSDrsLDsl7RcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjcmVhdGVkVWludDhBcnJheS5wdXNoKC4uLmRhdGFbaV0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNyZWF0ZWRVaW50OEFycmF5LnB1c2goZGF0YVtpXSk7XG4gIH1cblxuICAvLyBjb25zb2xlLnRpbWVFbmQoXCLsnbTspJEg67Cw7Je0XCIpO1xuICAvLyBjb25zb2xlLnRpbWUoXCLsnITslYTrnpgg7Jes67CxXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoIC0gMzsgaSArPSA0KSB7XG4gICAgYXJyYXlbaV0gPSByZWQ7XG4gICAgYXJyYXlbaSArIDFdID0gZ3JlZW47XG4gICAgYXJyYXlbaSArIDJdID0gYmx1ZTtcbiAgICBhcnJheVtpICsgM10gPSBhbHBoYTtcbiAgfVxuICAvLyBjb25zb2xlLnRpbWVFbmQoXCLsnITslYTrnpgg7Jes67CxXCIpO1xuICAvLyBjb25zb2xlLnRpbWUoXCLstZzsooUg67OR7ZWpXCIpO1xuICBjb25zdCB0ZXN0aW5nID0gWy4uLmFycmF5LCAuLi5jcmVhdGVkVWludDhBcnJheSwgLi4uYXJyYXldO1xuICAvLyBjb25zb2xlLnRpbWVFbmQoXCLstZzsooUg67OR7ZWpXCIpO1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkodGVzdGluZyk7XG4gIGNvbnN0IGltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoYXJyLCB3aWR0aCArIHJhdGlvICogNCwgaGVpZ2h0ICsgcmF0aW8gKiAyKTtcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuXG4gIC8vIGNvbnNvbGUudGltZUVuZCgpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZW5kZXIodmlkZW8sIHdpZHRoLCBoZWlnaHQsIHJhdGlvLCBjb3ZlcmVkQ29sb3IpO1xuICB9LCAxMDAwIC8gNjApO1xufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bMF0oKTtcbiIsIiJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpbGxSZWFkRnJlcXVlbnRseSIsInZpZGVvIiwidmlld3B0Iiwib25sb2FkZWRkYXRhIiwid2luZG93IiwiYXV0b3BsYXkiLCJibGFjayIsInJhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXIiLCJzdHJlYW0iLCJjYXB0dXJlU3RyZWFtIiwibWFrZVZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImZpbmRGcm9udFBvc2l0aW9uIiwiZmluZEJhY2tQb3NpdGlvbiIsImNvdmVyZWRDb2xvciIsImRyYXdJbWFnZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwid2lkdGhOdW1iZXJzIiwic2lkZVJhdGlvIiwicm93UmF0aW8iLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsImNvbnNvbGUiLCJ0aW1lIiwiZGF0YSIsImdldEltYWdlRGF0YSIsInRpbWVFbmQiLCJmaXhlZERhdGEiLCJpIiwicHVzaCIsImxlbmd0aCIsInNwbGljZSIsImNyZWF0ZWRVaW50OEFycmF5IiwidGVzdGluZyIsImFyciIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiaW1hZ2VEYXRhIiwiSW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=