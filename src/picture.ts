import Particle from './classes/Particle';
import { myImage } from './image';
import getPixels from './helpers/getPixels';
import createMappedImage from './helpers/createMappedImage';

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = 500;
canvas.height = 706;
ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

const pixels = getPixels(canvas, ctx);

const particlesArray: Array<Particle> = [];
const countParticles = 5000;

const mappedImage = createMappedImage(canvas, pixels);

console.log(mappedImage);

const init = () => {
  for (let i = 0; i < countParticles; i++) {
    particlesArray.push(new Particle(canvas, ctx));
  }
};

init();

const animate = () => {
  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.05;

  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
};

animate();
