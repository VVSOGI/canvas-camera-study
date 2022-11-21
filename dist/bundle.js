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
  var ratio = 100;
  var width = 1024;
  var height = 500;
  render(video, width, height, ratio, black);
  canvas.width = width + ratio * 4;
  canvas.height = height + ratio * 4;
  var stream = canvas.captureStream(60);
  var makeVideo = document.createElement("video");
  makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");
  // document.body.appendChild(makeVideo);
};

function findFrontPosition() {}
function findBackPosition() {}
function render(video, width, height, ratio, coveredColor) {
  console.time();
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
  var totalData = ctx.getImageData(0, 0, width, height).data;
  var data = [];
  for (var i = 0; i < totalData.length; i++) {
    data[i] = totalData[i];
  }
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
      for (var j = 0; j < data[i].length; j++) {
        createdUint8Array.push(data[i][j]);
      }
      continue;
    }
    createdUint8Array.push(data[i]);
  }
  // console.timeEnd("이중 배열");
  for (var i = 0; i < array.length - 3; i += 4) {
    array[i] = red;
    array[i + 1] = green;
    array[i + 2] = blue;
    array[i + 3] = alpha;
  }
  // console.time("최종 병합");
  // const testing = [...array, ...createdUint8Array, ...array];
  var testing = [];
  for (var i = 0; i < array.length; i++) {
    testing[i] = array[i];
  }
  for (var i = 0; i < createdUint8Array.length; i++) {
    testing[testing.length] = createdUint8Array[i];
  }
  for (var i = 0; i < array.length; i++) {
    testing[testing.length] = array[i];
  }
  // console.timeEnd("최종 병합");
  var arr = new Uint8ClampedArray(testing);
  var imageData = new ImageData(arr, width + ratio * 4, height + ratio * 2);
  ctx.putImageData(imageData, 0, 0);
  console.timeEnd();
  setTimeout(function () {
    render(video, width, height, ratio, coveredColor);
  }, 1000 / 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFzQjtBQUNyRTtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxFQUFFO0VBQ2xDQyxrQkFBa0IsRUFBRTtDQUNyQixDQUFDO0FBRUY7QUFDQSxJQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBcUI7QUFDbEUsSUFBTUssTUFBTSxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQXFCO0FBRXBFSyxNQUFNLENBQUNDLFlBQVksR0FBRztFQUNuQkMsTUFBYyxDQUFDRixNQUFNLEdBQUdBLE1BQU07RUFDL0JBLE1BQU0sQ0FBQ0csUUFBUSxHQUFHLElBQUk7QUFDeEIsQ0FBQztBQUVESixLQUFLLENBQUNFLFlBQVksR0FBRztFQUNuQixJQUFNRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDbEMsSUFBTUMsS0FBSyxHQUFHLEdBQUc7RUFDakIsSUFBTUMsS0FBSyxHQUFHLElBQUk7RUFDbEIsSUFBTUMsTUFBTSxHQUFHLEdBQUc7RUFDbEJDLE1BQU0sQ0FBQ1QsS0FBSyxFQUFFTyxLQUFLLEVBQUVDLE1BQU0sRUFBRUYsS0FBSyxFQUFFRCxLQUFLLENBQUM7RUFDMUNYLE1BQU0sQ0FBQ2EsS0FBSyxHQUFHQSxLQUFLLEdBQUdELEtBQUssR0FBRyxDQUFDO0VBQ2hDWixNQUFNLENBQUNjLE1BQU0sR0FBR0EsTUFBTSxHQUFHRixLQUFLLEdBQUcsQ0FBQztFQUNsQyxJQUFNSSxNQUFNLEdBQUdoQixNQUFNLENBQUNpQixhQUFhLENBQUMsRUFBRSxDQUFDO0VBRXZDLElBQU1DLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FDdEMsT0FBTyxDQUMyQjtFQUVwQ0QsU0FBUyxDQUFDRSxTQUFTLEdBQUdKLE1BQU07RUFDNUJFLFNBQVMsQ0FBQ1IsUUFBUSxHQUFHLElBQUk7RUFDekJRLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7RUFFM0M7QUFDRixDQUFDOztBQUVELFNBQVNDLGlCQUFpQixJQUFJO0FBRTlCLFNBQVNDLGdCQUFnQixJQUFJO0FBRTdCLFNBQVNSLE1BQU0sQ0FDYlQsS0FBdUIsRUFDdkJPLEtBQWEsRUFDYkMsTUFBYyxFQUNkRixLQUFhLEVBQ2JZLFlBQXNCO0VBRXRCQyxPQUFPLENBQUNDLElBQUksRUFBRTtFQUNkdkIsR0FBRyxDQUFDd0IsU0FBUyxDQUFDckIsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVPLEtBQUssRUFBRUMsTUFBTSxDQUFDO0VBQ25DLGdCQUE0QlUsWUFBWTtJQUF2Q0ksR0FBRztJQUFFQyxLQUFLO0lBQUVDLElBQUk7SUFBRUMsS0FBSyxRQUFnQjtFQUM5QyxJQUFNQyxZQUFZLEdBQUluQixLQUFLLEdBQUdDLE1BQU0sR0FBRyxDQUFDLEdBQUlBLE1BQU07RUFDbEQsSUFBTW1CLFNBQVMsR0FBR3JCLEtBQUssR0FBRyxFQUFFO0VBQzVCLElBQU1zQixRQUFRLEdBQUdGLFlBQVksR0FBR0MsU0FBUztFQUV6QyxJQUFNRSxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDRixRQUFRLEdBQUd0QixLQUFLLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDakQsSUFBTUMsU0FBUyxHQUFHbkMsR0FBRyxDQUFDb0MsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUxQixLQUFLLEVBQUVDLE1BQU0sQ0FBQyxDQUFDMEIsSUFBSTtFQUM1RCxJQUFNQSxJQUFJLEdBQVUsRUFBRTtFQUN0QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsU0FBUyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3pDRCxJQUFJLENBQUNDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNHLENBQUMsQ0FBQzs7RUFFeEIsSUFBTUUsU0FBUyxHQUFHLEVBQUU7RUFDcEIsS0FBSyxJQUFJRixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc3QixLQUFLLEVBQUU2QixDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2pDRSxTQUFTLENBQUNDLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQztJQUNuQmUsU0FBUyxDQUFDQyxJQUFJLENBQUNmLEtBQUssQ0FBQztJQUNyQmMsU0FBUyxDQUFDQyxJQUFJLENBQUNkLElBQUksQ0FBQztJQUNwQmEsU0FBUyxDQUFDQyxJQUFJLENBQUNiLEtBQUssQ0FBQzs7RUFHdkI7RUFDQSxLQUFLLElBQUlVLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLElBQUlULFlBQVksRUFBRTtJQUN0RFEsSUFBSSxDQUFDSyxNQUFNLENBQUNKLENBQUMsRUFBRSxDQUFDLHlDQUFNRSxTQUFTLFlBQUVILElBQUksQ0FBQ0MsQ0FBQyxDQUFDLFVBQUU7SUFDMUNELElBQUksQ0FBQ0ssTUFBTSxDQUFDSixDQUFDLEdBQUdULFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFDakNRLElBQUksQ0FBQ0MsQ0FBQyxHQUFHVCxZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQ3ZCVyxTQUFTLFVBQ1o7SUFDRkgsSUFBSSxDQUFDSyxNQUFNLENBQUNKLENBQUMsR0FBR1QsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLHVEQUM5QlcsU0FBUyxrQkFDVEEsU0FBUyxZQUNaSCxJQUFJLENBQUNDLENBQUMsR0FBR1QsWUFBWSxHQUFHLENBQUMsQ0FBQyxVQUMxQjs7RUFHSjtFQUNBLElBQU1jLGlCQUFpQixHQUFHLEVBQUU7RUFFNUI7RUFFQSxLQUFLLElBQUlMLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3BDLElBQUksT0FBT0QsSUFBSSxDQUFDQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7TUFDL0IsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLENBQUNDLE1BQU0sRUFBRUssQ0FBQyxFQUFFLEVBQUU7UUFDdkNELGlCQUFpQixDQUFDRixJQUFJLENBQUNKLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLENBQUNNLENBQUMsQ0FBQyxDQUFDOztNQUVwQzs7SUFFRkQsaUJBQWlCLENBQUNGLElBQUksQ0FBQ0osSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQzs7RUFHakM7RUFDQSxLQUFLLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR04sS0FBSyxDQUFDTyxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzVDTixLQUFLLENBQUNNLENBQUMsQ0FBQyxHQUFHYixHQUFHO0lBQ2RPLEtBQUssQ0FBQ00sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHWixLQUFLO0lBQ3BCTSxLQUFLLENBQUNNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR1gsSUFBSTtJQUNuQkssS0FBSyxDQUFDTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdWLEtBQUs7O0VBRXRCO0VBQ0E7RUFFQSxJQUFNaUIsT0FBTyxHQUFHLEVBQUU7RUFDbEIsS0FBSyxJQUFJUCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNyQ08sT0FBTyxDQUFDUCxDQUFDLENBQUMsR0FBR04sS0FBSyxDQUFDTSxDQUFDLENBQUM7O0VBR3ZCLEtBQUssSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSyxpQkFBaUIsQ0FBQ0osTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNqRE8sT0FBTyxDQUFDQSxPQUFPLENBQUNOLE1BQU0sQ0FBQyxHQUFHSSxpQkFBaUIsQ0FBQ0wsQ0FBQyxDQUFDOztFQUdoRCxLQUFLLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR04sS0FBSyxDQUFDTyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDTyxPQUFPLENBQUNBLE9BQU8sQ0FBQ04sTUFBTSxDQUFDLEdBQUdQLEtBQUssQ0FBQ00sQ0FBQyxDQUFDOztFQUdwQztFQUNBLElBQU1RLEdBQUcsR0FBRyxJQUFJQyxpQkFBaUIsQ0FBQ0YsT0FBTyxDQUFDO0VBQzFDLElBQU1HLFNBQVMsR0FBRyxJQUFJQyxTQUFTLENBQUNILEdBQUcsRUFBRXBDLEtBQUssR0FBR0QsS0FBSyxHQUFHLENBQUMsRUFBRUUsTUFBTSxHQUFHRixLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzNFVCxHQUFHLENBQUNrRCxZQUFZLENBQUNGLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBRWpDMUIsT0FBTyxDQUFDNkIsT0FBTyxFQUFFO0VBQ2pCQyxVQUFVLENBQUM7SUFDVHhDLE1BQU0sQ0FBQ1QsS0FBSyxFQUFFTyxLQUFLLEVBQUVDLE1BQU0sRUFBRUYsS0FBSyxFQUFFWSxZQUFZLENBQUM7RUFDbkQsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZjs7Ozs7O1VFbElBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbi8vIGNvbnN0IGRvdWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG91YmxlXCIpIGFzIEhUTUxkb3VibGVFbGVtZW50O1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHtcbiAgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlLFxufSk7XG5cbi8vIGN0eC5zY2FsZSgwLjUsIDAuNSk7XG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudDtcbmNvbnN0IHZpZXdwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld3B0XCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cbnZpZXdwdC5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG4gICh3aW5kb3cgYXMgYW55KS52aWV3cHQgPSB2aWV3cHQ7XG4gIHZpZXdwdC5hdXRvcGxheSA9IHRydWU7XG59O1xuXG52aWRlby5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGJsYWNrID0gWzEyMiwgMTIyLCAxMjIsIDI1NV07XG4gIGNvbnN0IHJhdGlvID0gMTAwO1xuICBjb25zdCB3aWR0aCA9IDEwMjQ7XG4gIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgcmVuZGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCByYXRpbywgYmxhY2spO1xuICBjYW52YXMud2lkdGggPSB3aWR0aCArIHJhdGlvICogNDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodCArIHJhdGlvICogNDtcbiAgY29uc3Qgc3RyZWFtID0gY2FudmFzLmNhcHR1cmVTdHJlYW0oNjApO1xuXG4gIGNvbnN0IG1ha2VWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJ2aWRlb1wiXG4gICkgYXMgSFRNTEVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudDtcblxuICBtYWtlVmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICBtYWtlVmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICBtYWtlVmlkZW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWtlZC12aWRlb1wiKTtcblxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VWaWRlbyk7XG59O1xuXG5mdW5jdGlvbiBmaW5kRnJvbnRQb3NpdGlvbigpIHt9XG5cbmZ1bmN0aW9uIGZpbmRCYWNrUG9zaXRpb24oKSB7fVxuXG5mdW5jdGlvbiByZW5kZXIoXG4gIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgcmF0aW86IG51bWJlcixcbiAgY292ZXJlZENvbG9yOiBudW1iZXJbXVxuKSB7XG4gIGNvbnNvbGUudGltZSgpO1xuICBjdHguZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXSA9IGNvdmVyZWRDb2xvcjtcbiAgY29uc3Qgd2lkdGhOdW1iZXJzID0gKHdpZHRoICogaGVpZ2h0ICogNCkgLyBoZWlnaHQ7XG4gIGNvbnN0IHNpZGVSYXRpbyA9IHJhdGlvICogMTY7XG4gIGNvbnN0IHJvd1JhdGlvID0gd2lkdGhOdW1iZXJzICsgc2lkZVJhdGlvO1xuXG4gIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KHJvd1JhdGlvICogcmF0aW8pLmZpbGwoMCk7XG4gIGNvbnN0IHRvdGFsRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcbiAgY29uc3QgZGF0YTogYW55W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRhW2ldID0gdG90YWxEYXRhW2ldO1xuICB9XG4gIGNvbnN0IGZpeGVkRGF0YSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGlvOyBpICs9IDEpIHtcbiAgICBmaXhlZERhdGEucHVzaChyZWQpO1xuICAgIGZpeGVkRGF0YS5wdXNoKGdyZWVuKTtcbiAgICBmaXhlZERhdGEucHVzaChibHVlKTtcbiAgICBmaXhlZERhdGEucHVzaChhbHBoYSk7XG4gIH1cblxuICAvLyBjb25zb2xlLnRpbWUoXCLsoozsmrAg7JiB7IOBXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC0gMTsgaSArPSB3aWR0aE51bWJlcnMpIHtcbiAgICBkYXRhLnNwbGljZShpLCAxLCBbLi4uZml4ZWREYXRhLCBkYXRhW2ldXSk7XG4gICAgZGF0YS5zcGxpY2UoaSArIHdpZHRoTnVtYmVycyAtIDEsIDEsIFtcbiAgICAgIGRhdGFbaSArIHdpZHRoTnVtYmVycyAtIDFdLFxuICAgICAgLi4uZml4ZWREYXRhLFxuICAgIF0pO1xuICAgIGRhdGEuc3BsaWNlKGkgKyB3aWR0aE51bWJlcnMgLyAyLCAxLCBbXG4gICAgICAuLi5maXhlZERhdGEsXG4gICAgICAuLi5maXhlZERhdGEsXG4gICAgICBkYXRhW2kgKyB3aWR0aE51bWJlcnMgLyAyXSxcbiAgICBdKTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUudGltZUVuZChcIuyijOyasCDsmIHsg4FcIik7XG4gIGNvbnN0IGNyZWF0ZWRVaW50OEFycmF5ID0gW107XG5cbiAgLy8gY29uc29sZS50aW1lKFwi7J207KSRIOuwsOyXtFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGRhdGFbaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjcmVhdGVkVWludDhBcnJheS5wdXNoKGRhdGFbaV1bal0pO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNyZWF0ZWRVaW50OEFycmF5LnB1c2goZGF0YVtpXSk7XG4gIH1cblxuICAvLyBjb25zb2xlLnRpbWVFbmQoXCLsnbTspJEg67Cw7Je0XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAtIDM7IGkgKz0gNCkge1xuICAgIGFycmF5W2ldID0gcmVkO1xuICAgIGFycmF5W2kgKyAxXSA9IGdyZWVuO1xuICAgIGFycmF5W2kgKyAyXSA9IGJsdWU7XG4gICAgYXJyYXlbaSArIDNdID0gYWxwaGE7XG4gIH1cbiAgLy8gY29uc29sZS50aW1lKFwi7LWc7KKFIOuzke2VqVwiKTtcbiAgLy8gY29uc3QgdGVzdGluZyA9IFsuLi5hcnJheSwgLi4uY3JlYXRlZFVpbnQ4QXJyYXksIC4uLmFycmF5XTtcblxuICBjb25zdCB0ZXN0aW5nID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0ZXN0aW5nW2ldID0gYXJyYXlbaV07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0ZWRVaW50OEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdGVzdGluZ1t0ZXN0aW5nLmxlbmd0aF0gPSBjcmVhdGVkVWludDhBcnJheVtpXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0ZXN0aW5nW3Rlc3RpbmcubGVuZ3RoXSA9IGFycmF5W2ldO1xuICB9XG5cbiAgLy8gY29uc29sZS50aW1lRW5kKFwi7LWc7KKFIOuzke2VqVwiKTtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHRlc3RpbmcpO1xuICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKGFyciwgd2lkdGggKyByYXRpbyAqIDQsIGhlaWdodCArIHJhdGlvICogMik7XG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcblxuICBjb25zb2xlLnRpbWVFbmQoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVuZGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCByYXRpbywgY292ZXJlZENvbG9yKTtcbiAgfSwgMTAwMCAvIDMwKTtcbn1cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fWzBdKCk7XG4iLCIiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWxsUmVhZEZyZXF1ZW50bHkiLCJ2aWRlbyIsInZpZXdwdCIsIm9ubG9hZGVkZGF0YSIsIndpbmRvdyIsImF1dG9wbGF5IiwiYmxhY2siLCJyYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwic3RyZWFtIiwiY2FwdHVyZVN0cmVhbSIsIm1ha2VWaWRlbyIsImNyZWF0ZUVsZW1lbnQiLCJzcmNPYmplY3QiLCJzZXRBdHRyaWJ1dGUiLCJmaW5kRnJvbnRQb3NpdGlvbiIsImZpbmRCYWNrUG9zaXRpb24iLCJjb3ZlcmVkQ29sb3IiLCJjb25zb2xlIiwidGltZSIsImRyYXdJbWFnZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwid2lkdGhOdW1iZXJzIiwic2lkZVJhdGlvIiwicm93UmF0aW8iLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsInRvdGFsRGF0YSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJpIiwibGVuZ3RoIiwiZml4ZWREYXRhIiwicHVzaCIsInNwbGljZSIsImNyZWF0ZWRVaW50OEFycmF5IiwiaiIsInRlc3RpbmciLCJhcnIiLCJVaW50OENsYW1wZWRBcnJheSIsImltYWdlRGF0YSIsIkltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInRpbWVFbmQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==