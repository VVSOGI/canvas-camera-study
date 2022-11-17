// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d");
// const video = document.getElementById("video") as HTMLVideoElement;
// const rangeSwitch = document.createElement("input");

// let ratio = 200;

// rangeSwitch.setAttribute("type", "range");
// rangeSwitch.setAttribute("id", "range");
// rangeSwitch.setAttribute("min", 0);
// rangeSwitch.setAttribute("max", 1000);
// document.body.appendChild(rangeSwitch);

// rangeSwitch.addEventListener("input", (e: any) => {
//   ratio = Number(e.target.value);
// });

// const fps = 10000;

// video.onloadeddata = () => {
//   const videoWidth = video.clientWidth;
//   const videoHeight = video.clientHeight;
//   canvas.width = videoWidth;
//   canvas.height = videoHeight;

//   render();
// };

// function render() {
//   ctx.beginPath();
//   ctx.fillStyle = "#000";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.stroke();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.fillStyle = "#fff";
//   ctx.fillRect(canvas.width / 2, 0, 2, canvas.height);
//   ctx.closePath();

//   ctx.drawImage(
//     video,
//     0,
//     0,
//     canvas.width / 2,
//     canvas.height + ratio,
//     ratio / 2,
//     ratio / 2,
//     canvas.width / 2 - ratio,
//     canvas.height - ratio
//   );

//   ctx.drawImage(
//     video,
//     (canvas.width / 2) * ratio,
//     0,
//     canvas.width / 2,
//     canvas.height + ratio,
//     canvas.width / 2 + ratio / 2,
//     ratio / 2,
//     canvas.width / 2 - ratio,
//     canvas.height - ratio
//   );

//   if (!(window as any).testingImage) {
//     // (window as any).testingImage = rightImageData;
//   }

//   // 첫 번째 인자로 비디오를 넣어준다.
//   // const imageData = ctx.getImageData(0, 0, 760, 720);
//   // ctx.putImageData(imageData, image1PositionX, image1PositionY);
//   // ctx.putImageData(imageData, image2PositionX, image2PositionY);

//   setTimeout(() => {
//     requestAnimationFrame(render);
//   }, 1000 / fps);
// }
// const stream = canvas.captureStream(30);
// const videoTracks = stream.getVideoTracks();

// console.log(videoTracks);

// (window as any).videoEl = video;
