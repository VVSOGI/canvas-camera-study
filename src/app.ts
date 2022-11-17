const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d", {
  willReadFrequently: true,
});

// ctx.scale(0.5, 0.5);
const video = document.getElementById("video") as HTMLVideoElement;

video.onloadeddata = () => {
  render(300, 150);
  canvas.width = 1000;
  canvas.height = 400;
  const stream = canvas.captureStream(30);

  const makeVideo = document.createElement(
    "video"
  ) as HTMLElement as HTMLVideoElement;

  makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");

  document.body.appendChild(makeVideo);
};

function render(width: number, height: number) {
  ctx.drawImage(video, 0, 0, width, height);
  const totalRatio = 30;
  const sideRatio = totalRatio * 16;
  const rowRatio = (width * height * 4) / height + sideRatio;

  const array = new Array(rowRatio * totalRatio).fill(0);
  const data = ctx.getImageData(0, 0, width, height).data;
  const rgbaArray = [];

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    rgbaArray.push([r, g, b, a]);
  }

  for (let i = 0; i < rgbaArray.length; i += width) {
    // middle rgba fix color
    rgbaArray[i + width / 2 - 1] = [120, 120, 120, 255];

    const frontRgbaCoordinates = rgbaArray[i];
    const backRgbaCoordinates = rgbaArray[i + width - 1];
    const middleRgbaCoordinates = rgbaArray[i + width / 2 - 1];

    for (let j = 0; j < totalRatio; j += 1) {
      frontRgbaCoordinates.unshift(...[120, 120, 120, 255]);
      backRgbaCoordinates.push(...[120, 120, 120, 255]);
      middleRgbaCoordinates.push(...[120, 120, 120, 255]);
      middleRgbaCoordinates.unshift(...[120, 120, 120, 255]);
    }
  }

  const fixedArray = rgbaArray.flat();

  for (let i = 0; i < array.length - 3; i += 4) {
    array[i] = 120;
    array[i + 1] = 120;
    array[i + 2] = 120;
    array[i + 3] = 255;
  }

  const testing = [...array, ...fixedArray, ...array];

  const arr = new Uint8ClampedArray(testing);
  const imageData = new ImageData(
    arr,
    width + totalRatio * 4,
    height + totalRatio * 2
  );
  ctx.putImageData(imageData, 0, 0);

  setTimeout(() => {
    render(width, height);
  }, 1000 / 25);
}
