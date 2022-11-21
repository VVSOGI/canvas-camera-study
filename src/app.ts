const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const view = document.getElementById("view") as HTMLCanvasElement;

const ctx = canvas.getContext("2d", {
  willReadFrequently: true,
});
const viewCtx = view.getContext("2d");

const video = document.getElementById("video") as HTMLVideoElement;
const viewpt = document.getElementById("viewpt") as HTMLVideoElement;

ctx.beginPath();

viewpt.onloadeddata = () => {
  (window as any).viewpt = viewpt;
  viewpt.autoplay = true;
};

video.onloadeddata = () => {
  const ratio = 200;
  const width = 1440;
  const height = 720;
  requestAnimationFrame(() => render(video, width, height, ratio));
  canvas.width = width + ratio * 4;
  canvas.height = height + ratio * 2;
  view.width = canvas.width;
  view.height = canvas.height;
  viewCtx.fillRect(0, 0, view.width, view.height);

  const stream = canvas.captureStream(60);

  const makeVideo = document.createElement(
    "video"
  ) as HTMLElement as HTMLVideoElement;

  makeVideo.srcObject = stream;
  makeVideo.autoplay = true;
  makeVideo.setAttribute("id", "maked-video");

  // document.body.appendChild(makeVideo);
};

function render(
  video: HTMLVideoElement,
  videoWidth: number,
  videoHeight: number,
  ratio: number
) {
  ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
  const left = ctx.getImageData(0, 0, videoWidth / 2, videoHeight);
  const right = ctx.getImageData(
    videoWidth / 2,
    0,
    videoWidth / 2,
    videoHeight
  );
  viewCtx.putImageData(right, canvas.width / 2 + ratio, ratio);
  viewCtx.putImageData(left, ratio, ratio);

  ctx.moveTo(videoWidth / 2, 0);
  ctx.lineTo(videoWidth / 2, 0);
  ctx.lineTo(videoWidth / 2, videoHeight);

  requestAnimationFrame(() => render(video, videoWidth, videoHeight, ratio));
}
