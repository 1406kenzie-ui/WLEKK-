const bgm = document.getElementById("bgm");

function playMusic(src) {
  if (!src) return;

  bgm.src = src;
  bgm.loop = true;
  bgm.volume = 0.6;

  // Autoplay policy fix
  bgm.play().catch(() => {
    document.body.addEventListener("click", () => {
      bgm.play();
    }, { once: true });
  });
}
