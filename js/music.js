// Ambil elemen audio dari index.html
const bgm = document.getElementById("bgm");

let currentMusic = "";

/**
 * Play music berdasarkan nama ruangan
 * @param {string} roomName contoh: "pintu", "ruangtamu", "ruangtengah"
 */
function playRoomMusic(roomName) {
  const musicPath = `assets/music/${roomName}_lagu.mp3`;

  // Kalau musik sama, tidak diulang
  if (currentMusic === musicPath) return;

  fadeOut(() => {
    bgm.src = musicPath;
    bgm.loop = true;
    bgm.volume = 0;
    bgm.play().then(() => {
      fadeIn();
      currentMusic = musicPath;
    }).catch(() => {
      console.log("Autoplay dicegah browser, tunggu interaksi user");
    });
  });
}

/* Fade In */
function fadeIn() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      bgm.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

/* Fade Out */
function fadeOut(callback) {
  let vol = bgm.volume;
  const fade = setInterval(() => {
    if (vol > 0.02) {
      vol -= 0.02;
      bgm.volume = vol;
    } else {
      clearInterval(fade);
      bgm.pause();
      callback();
    }
  }, 100);
}
