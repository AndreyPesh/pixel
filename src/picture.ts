import Particle from './classes/Particle';
import { myImage } from './image';
import icon from './helpers/icon';
import getPixels from './helpers/getPixels';
import createMappedImage from './helpers/createMappedImage';

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = 500;
canvas.height = 606;
ctx.drawImage(icon, 0, 0, canvas.width, canvas.height);

const pixels = getPixels(canvas, ctx);
ctx.clearRect(0, 0, canvas.width, canvas.height);

const particlesArray: Array<Particle> = [];
const countParticles = 5000;

const mappedImage = createMappedImage(canvas, pixels);

console.log(mappedImage);

const init = () => {
  for (let i = 0; i < countParticles; i++) {
    particlesArray.push(new Particle(canvas, ctx, mappedImage));
  }
};

init();

let count = 0;
const animate = () => {
  // ctx.drawImage(icon, 0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = count < 1000 ? 0.5 : 0.05;
  console.log(count);
  

  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.globalAlpha = 0.2;

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    const alpha = particlesArray[i].speed * 0.3 ? particlesArray[i].speed * 0.3 : 0.05
    ctx.globalAlpha = alpha;
    particlesArray[i].draw();
  }
  count++;
  requestAnimationFrame(animate);
};

animate();
