import Particle from './classes/Particle';

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // ctx.fillStyle = 'white'; //color fill shapes
  // ctx.fillRect(10, 10, 30, 30);
});

// ctx.fillStyle = 'white'; //color fill shapes

// ctx.fillRect(10, 10, 30, 30); // filled rectangle

console.log(ctx);

// ctx.fillStyle = 'green';
// ctx.beginPath();
// ctx.arc(120, 120, 30, 0, Math.PI * 2);
// ctx.fill();

// ctx.strokeStyle = 'white';
// ctx.lineWidth = 7;
// ctx.beginPath();
// ctx.arc(220, 120, 30, 0, Math.PI * 2);
// ctx.stroke();

// const mouse = {
//   x: 0,
//   y: 0,
// };

// window.addEventListener('click', (event: MouseEvent) => {
//   drawCircle(event.x, event.y);
// });
// window.addEventListener('mousemove', (event: MouseEvent) => {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   drawCircle();
// });

// const drawCircle = () => {
//   ctx.fillStyle = 'green';
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
//   ctx.fill();
// };

const particlesArray: Array<Particle> = [];
const countParticles = 100;

function init() {
  for (let i = 0; i < countParticles; i++) {
    particlesArray.push(new Particle(canvas, ctx));
  }
}

init();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();


const test = () => {
  
}