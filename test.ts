// canvas.width = document.body.clientWidth * 2;
// canvas.height = document.body.clientHeight * 2;
// ctx.scale(1, 1);

// let canPlayState = false;

// ctx.textAlign = "center";
// ctx.fillText("비디오 로딩 중..", 300, 200);
// const rect1X = 0;
// const rect1Y = 815;
// const rect1Width = 890;
// const rect1Height = 850;
// const image1PositionX = (890 - 1520 / 2) / 2;
// const image1PositionY = rect1Y + (850 - 720) / 2;

// const rect2X = rect1X + rect1Width;
// const rect2Y = rect1Y;
// const rect2Width = 890;
// const rect2Height = 850;
// const image2PositionX = (890 - 1520 / 2) / 2 + rect1Width;
// const image2PositionY = image1PositionY;

// const videoElem = document.getElementById("video") as HTMLVideoElement;
// videoElem.addEventListener("canplaythrough", render);

// function render() {
//   ctx.drawImage(videoElem, 0, 0, 1520, 720, 100, 0, 200, 200);
//   //   ctx.beginPath();
//   //   ctx.moveTo(1520 / 2, 0);
//   //   ctx.lineTo(1520 / 2, 720);
//   //   ctx.strokeStyle = "#fff";
//   //   ctx.lineWidth = 5;
//   //   ctx.stroke();
//   //   ctx.closePath();
//   // 첫 번째 인자로 비디오를 넣어준다.
//   const imageData = ctx.getImageData(0, 0, 760, 720);
//   ctx.putImageData(imageData, image1PositionX, image1PositionY);
//   ctx.putImageData(imageData, image2PositionX, image2PositionY);

//   requestAnimationFrame(render);
// }

// ctx.beginPath();
// ctx.fillStyle = "#777";
// ctx.fillRect(rect1X, rect1Y, rect1Width, rect1Height);
// ctx.fillRect(rect2X, rect2Y, rect2Width, rect2Height);
// ctx.closePath();

// // setTimeout(() => {
// //   const array = [];

// //   const imageData = ctx.getImageData(0, 0, 760, 720);
// //   for (let i = 0; i < imageData.data.length; i += 4) {
// //     const pixel = imageData.data;
// //     const pixelRed = pixel[i];
// //     const pixelGreen = pixel[i + 1];
// //     const pixelBlue = pixel[i + 2];
// //     const pixelAlpha = pixel[i + 3];
// //     array.push([pixelRed, pixelGreen, pixelBlue, pixelAlpha]);
// //   }
// //   ctx.putImageData(imageData, 1615, 65);
// // }, 300);

// // 1615, 915

// console.log(canvas.toDataURL());
