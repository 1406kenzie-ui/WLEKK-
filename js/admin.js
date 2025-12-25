const roomsKeys = ['pintu','tamu','tengah','utama']; let savedContent = JSON.parse(localStorage.getItem('content')) || {};

function adminLogin(){ const input = document.getElementById('admin-password').value; if(input==='loveyou'){ localStorage.setItem('isAdmin','true'); document.getElementById('login').style.display='none'; document.getElementById('panel').style.display='block'; initAdminPanel(); } else alert('Password salah'); }

function initAdminPanel(){ roomsKeys.forEach(key=>{ const textarea = document.getElementById(key+'Text'); const r = document.getElementById(key+'R'); const g = document.getElementById(key+'G'); const b = document.getElementById(key+'B');

textarea.value = savedContent[key]||'';
textarea.addEventListener('input',()=>{
  savedContent[key] = textarea.value;
  localStorage.setItem('content',JSON.stringify(savedContent));
  const appRoom = document.querySelector('#app section');
  if(appRoom && currentRoom===key) appRoom.querySelector('p').textContent = textarea.value;
});

[r,g,b].forEach((slider,index)=>{
  slider.value = savedContent[key+'_bg'] ? savedContent[key+'_bg'].match(/\d+/g)[index] : 255;
  slider.addEventListener('input',()=>{
    const rgb = `rgb(${r.value},${g.value},${b.value})`;
    savedContent[key+'_bg'] = rgb;
    localStorage.setItem('content',JSON.stringify(savedContent));
    if(currentRoom===key) document.body.style.background = rgb;
  });
});

}); }

if(localStorage.getItem('isAdmin')==='true'){ document.addEventListener('DOMContentLoaded',()=>{ document.getElementById('login').style.display='none'; document.getElementById('panel').style.display='block'; initAdminPanel(); }); }
