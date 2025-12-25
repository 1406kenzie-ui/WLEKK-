const bgm = document.getElementById('bgm');

function playMusic(src) {
  if (bgm.src.includes(src)) return;
  bgm.src = src;
  bgm.volume = 0.6;
  bgm.play();
}
