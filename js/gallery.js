// === gallery.js (FINAL, LENGKAP) ===

// DATA GALERI (NANTI BISA DIGANTI VIA ADMIN)
const galleryData = [
  { src: 'assets/images/gallery/1.jpg', caption: 'Hari itu aku tahu, aku jatuh cinta.' },
  { src: 'assets/images/gallery/2.jpg', caption: 'Senyummu selalu rumah.' },
  { src: 'assets/images/gallery/3.jpg', caption: 'Kamu adalah alasanku pulang.' }
];

let currentIndex = 0;

// RENDER GRID GALERI
function renderGallery(containerId = 'app') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'gallery-grid';

  galleryData.forEach((item, index) => {
    const wrap = document.createElement('div');
    wrap.className = 'gallery-img';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || '';

    wrap.onclick = () => openLightbox(index);
    wrap.appendChild(img);
    grid.appendChild(wrap);
  });

  container.innerHTML = '';
  container.appendChild(grid);
}

// LIGHTBOX FULLSCREEN
function openLightbox(index) {
  currentIndex = index;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';

  overlay.innerHTML = `
    <div class="lightbox-content">
      <span class="nav-btn prev">‹</span>
      <img src="${galleryData[index].src}">
      <span class="nav-btn next">›</span>
      <p class="caption">${galleryData[index].caption || ''}</p>
      <span class="close">×</span>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('.close').onclick = () => overlay.remove();
  overlay.querySelector('.prev').onclick = prevImage;
  overlay.querySelector('.next').onclick = nextImage;
}

// NAVIGASI FOTO
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  updateLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
}

// UPDATE LIGHTBOX
function updateLightbox() {
  const overlay = document.querySelector('.lightbox');
  if (!overlay) return;

  overlay.querySelector('img').src = galleryData[currentIndex].src;
  overlay.querySelector('.caption').textContent =
    galleryData[currentIndex].caption || '';
}

// SWIPE MOBILE
let startX = 0;
document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) prevImage();
  if (diff < -50) nextImage();
});
