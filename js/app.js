let currentRoom = 'pintu';

const rooms = {
  pintu: {
    title: 'Hai Kamu 🤍',
    text: 'Aku membuat ini khusus untukmu.',
    next: 'tamu',
    music: 'assets/music/pintumasuk_lagu.mp3'
  },
  tamu: {
    title: 'Ruang Tamu',
    text: 'Di sini semua tentang kamu.',
    next: 'tengah',
    music: 'assets/music/ruangtamu_lagu.mp3'
  },
  tengah: {
    title: 'Ruang Tengah',
    text: 'Setiap foto adalah kenangan.',
    next: 'utama',
    music: 'assets/music/ruangtengah_lagu.mp3',
    gallery: true
  },
  utama: {
    title: 'Ruang Utama',
    text: 'Ini perasaanku yang sebenarnya.',
    next: null,
    music: 'assets/music/ruangutama_lagu.mp3'
  }
};

// override dari admin
const saved = JSON.parse(localStorage.getItem('content')) || {};
Object.keys(saved).forEach(k => {
  if (rooms[k]) rooms[k].text = saved[k];
});

function renderRoom(key) {
  const r = rooms[key];
  const app = document.getElementById('app');

  app.innerHTML = `
    <section class="room">
      <h1>${r.title}</h1>
      <p>${r.text}</p>
      ${r.next ? '<button id="nextBtn">Masuk</button>' : ''}
    </section>
  `;

  if (r.gallery) renderGallery();
  if (r.next) document.getElementById('nextBtn').onclick = () => {
    currentRoom = r.next;
    renderRoom(currentRoom);
  };

  playMusic(r.music);
}

renderRoom(currentRoom);
