// Star Map Simulation
const canvas = document.getElementById('starMapCanvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
    ctx.fill();
  }
}
setInterval(drawStars, 1000);

// Dynamic Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
  const level = bar.dataset.level;
  bar.style.setProperty('--progress', `${level}%`);
});
