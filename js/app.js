let currentIndex = 0;

function renderRoom() {
  const roomKey = ROOM_ORDER[currentIndex];
  const room = ROOMS[roomKey];

  document.getElementById("app").innerHTML = `
    <section class="room fade-in">
      <h1>${room.title}</h1>
      <p>${room.text}</p>
      <button onclick="nextRoom()">${room.button}</button>
    </section>
  `;

  playMusic(room.music);
}

function nextRoom() {
  if (currentIndex < ROOM_ORDER.length - 1) {
    currentIndex++;
    renderRoom();
  }
}

// Render pertama kali
renderRoom();
