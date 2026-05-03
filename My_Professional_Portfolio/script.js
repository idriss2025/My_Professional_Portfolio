// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const chars = '01アイウエカキク#$ABCDEFabcdef<>{}[]'.split('');
let cols, drops;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / 18);
  drops = Array(cols).fill(1);
}

resize(); 
window.addEventListener('resize', resize);

function drawMatrix() {
  ctx.fillStyle = 'rgba(6,10,8,0.055)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '13px Fira Code, monospace';
  
  drops.forEach((y, i) => {
    const ch = chars[Math.floor(Math.random() * chars.length)];
    ctx.globalAlpha = Math.random() * 0.35 + 0.08;
    ctx.fillStyle = '#00ff88';
    ctx.fillText(ch, i * 18, y * 18);
    ctx.globalAlpha = 1;
    
    if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(drawMatrix, 80);

// Spotlight hover effect for Link Cards
document.querySelectorAll('.lc').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,255,136,0.08) 0%, rgba(8,18,12,0.82) 65%)`;
  });
  
  card.addEventListener('mouseleave', () => { 
    card.style.background = 'var(--panel)'; 
  });
});