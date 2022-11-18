const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const double = document.getElementById("double") as HTMLdoubleElement;

const ctx = canvas.getContext("2d", {
  willReadFrequently: true,
});

// ctx.scale(0.5, 0.5);
const video = document.getElementById("video") as HTMLVideoElement;
const viewpt = document.getElementById("viewpt") as HTMLVideoElement;

viewpt.onloadeddata = () => {
  (window as any).viewpt = viewpt;
  viewpt.autoplay = true;
};

video.onloadeddata = () => {
  const black = [122, 122, 122, 255];
  const ratio = 10;
  const width = 1200;
  const height = 600;
  render(video, width, height, ratio, black);
  canvas.width = width + ratio * 4;
  canvas.height = height + ratio * 4;
  const stream = canvas.captureStream(60);

  const makeVideo = document.createElement(
    "video"
  ) as HTMLElement as HTMLVideoElement;

  // makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");

  // document.body.appendChild(makeVideo);
};

function findFrontPosition() {}

function findBackPosition() {}

function render(
  video: HTMLVideoElement,
  width: number,
  height: number,
  ratio: number,
  coveredColor: number[]
) {
  // console.time();
  ctx.drawImage(video, 0, 0, width, height);
  const [red, green, blue, alpha] = coveredColor;
  const widthNumbers = (width * height * 4) / height;
  const sideRatio = ratio * 16;
  const rowRatio = widthNumbers + sideRatio;

  const array = new Array(rowRatio * ratio).fill(0);
  console.time("좌우 영상");
  const data: any[] = [...ctx.getImageData(0, 0, width, height).data];
  console.timeEnd("좌우 영상");
  const fixedData = [];
  for (let i = 0; i < ratio; i += 1) {
    fixedData.push(red);
    fixedData.push(green);
    fixedData.push(blue);
    fixedData.push(alpha);
  }

  // console.time("좌우 영상");
  for (let i = 0; i < data.length - 1; i += widthNumbers) {
    data.splice(i, 1, [...fixedData, data[i]]);
    data.splice(i + widthNumbers - 1, 1, [
      data[i + widthNumbers - 1],
      ...fixedData,
    ]);
    data.splice(i + widthNumbers / 2, 1, [
      ...fixedData,
      ...fixedData,
      data[i + widthNumbers / 2],
    ]);
  }
  // console.timeEnd("좌우 영상");
  const createdUint8Array = [];

  // console.time("이중 배열");

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "object") {
      createdUint8Array.push(...data[i]);
      continue;
    }
    createdUint8Array.push(data[i]);
  }

  // console.timeEnd("이중 배열");
  // console.time("위아래 여백");

  for (let i = 0; i < array.length - 3; i += 4) {
    array[i] = red;
    array[i + 1] = green;
    array[i + 2] = blue;
    array[i + 3] = alpha;
  }
  // console.timeEnd("위아래 여백");
  // console.time("최종 병합");
  const testing = [...array, ...createdUint8Array, ...array];
  // console.timeEnd("최종 병합");
  const arr = new Uint8ClampedArray(testing);
  const imageData = new ImageData(arr, width + ratio * 4, height + ratio * 2);
  ctx.putImageData(imageData, 0, 0);

  // console.timeEnd();
  setTimeout(() => {
    render(video, width, height, ratio, coveredColor);
  }, 1000 / 60);
}
