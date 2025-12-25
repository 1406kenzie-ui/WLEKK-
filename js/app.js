// ==============================
// STATE GLOBAL
// ==============================
let currentRoomIndex = 0;

const roomOrder = [
  "pintu",
  "tamu",
  "tengah",
  "utama"
];

// ==============================
// DATA RUANGAN
// ==============================
const rooms = {
  pintu: {
    title: "Hai Kamu 🤍",
    text: "Aku membuat tempat kecil ini, khusus untukmu.",
    button: "Masuk",
    music: "assets/music/pintumasuk_lagu.mp3"
  },

  tamu: {
    title: "Ruang Tamu",
    text: "Di sini semua cerita tentang kamu dimulai.",
    button: "Lanjut",
    music: "assets/music/ruangtamu_lagu.mp3"
  },

  tengah: {
    title: "Ruang Tengah",
    text: "Setiap foto di sini menyimpan kenangan kita.",
    button: "Masuk Lebih Dalam",
    music: "assets/music/ruangtengah_lagu.mp3"
  },

  utama: {
    title: "Ruang Utama",
    text: "Kalau kamu membaca ini, artinya kamu sangat berarti bagiku.",
    button: "🤍",
    music: "assets/music/ruangutama_lagu.mp3"
  }
};

// ==============================
// RENDER RUANGAN
// ==============================
function renderRoom() {
  const roomKey = roomOrder[currentRoomIndex];
  const room = rooms[roomKey];

  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="room room-${roomKey}">
      <h1>${room.title}</h1>
      <p>${room.text}</p>
      <button id="nextBtn">${room.button}</button>
    </section>
  `;

  // musik
  if (typeof playMusic === "function") {
    playMusic(room.music);
  }

  // tombol lanjut
  document
    .getElementById("nextBtn")
    .addEventListener("click", nextRoom);
}

// ==============================
// PINDAH RUANGAN
// ==============================
function nextRoom() {
  if (currentRoomIndex < roomOrder.length - 1) {
    currentRoomIndex++;
    renderRoom();
  }
}

// ==============================
// START
// ==============================
document.addEventListener("DOMContentLoaded", renderRoom);
