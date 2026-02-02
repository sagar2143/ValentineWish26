// Heart Confetti Animation
const canvas = document.getElementById('heartConfetti');
const ctx = canvas.getContext('2d');
let hearts = [];
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

function randomColor() {
  const colors = ['#ff4d6d', '#ffb6c1', '#ff69b4', '#fff0f5'];
  return colors[Math.floor(Math.random() * colors.length)];
}
function createHeart() {
  return {
    x: Math.random() * W,
    y: -20,
    size: 16 + Math.random() * 16,
    speed: 1 + Math.random() * 2,
    color: randomColor(),
    angle: Math.random() * Math.PI * 2,
    swing: Math.random() * 2 + 1
  };
}
function drawHeart(x, y, size, color, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size/2, -size/2, size, size/3, 0, size);
  ctx.bezierCurveTo(-size, size/3, -size/2, -size/2, 0, 0);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.85;
  ctx.fill();
  ctx.restore();
}
function animate() {
  ctx.clearRect(0, 0, W, H);
  if (hearts.length < 60) hearts.push(createHeart());
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    h.y += h.speed;
    h.x += Math.sin(h.angle) * h.swing;
    h.angle += 0.02;
    drawHeart(h.x, h.y, h.size, h.color, h.angle);
    if (h.y > H + 40) hearts[i] = createHeart();
  }
  requestAnimationFrame(animate);
}
window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});
animate();
