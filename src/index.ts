// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d");
// const image = document.getElementById("image") as HTMLImageElement;
// const video = document.getElementById("video") as HTMLVideoElement;
// const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   video.play();
// });

// canvas.width = document.body.clientWidth;
// canvas.height = document.body.clientHeight;
// ctx.scale(1, 1);

// // let imageData = new ImageData(250, 250, { colorSpace: "display-p3" });
// // for (let i = 0; i < imageData.data.length; i += 4) {
// //   imageData.data[i + 0] = 80;
// //   imageData.data[i + 1] = 200;
// //   imageData.data[i + 2] = 120;
// //   imageData.data[i + 3] = 255;
// // }

// // ctx.putImageData(imageData, 50, 50);

// // const frame = ctx.getImageData(0, 0, image.width, image.height);
// // const data = frame.data;

// // const array = [];

// // ctx.drawImage(image, 62.5, 62.5, image.width, image.height);
// // for (let i = 0; i < data.length; i += 4) {
// //   const red = data[i + 0];
// //   const green = data[i + 1];
// //   const blue = data[i + 2];
// //   if (green > 100 && red > 100 && blue < 43) {
// //     data[i + 3] = 0;
// //   }
// //   const alpha = data[i + 3];
// //   array.push([red, green, blue, alpha]);
// // }

// // const newImageData = ctx.getImageData(62.5, 62.5, image.width, image.height);
// const width = video.videoWidth / 2;
// const height = video.videoHeight / 2;

// function render() {
//   const videoImage = ctx.drawImage(video, 0, 0, width, height);
//   requestAnimationFrame(render);
// }

// window.onload = () => {
//   render();
// };
