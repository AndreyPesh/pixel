import './style.css'
import { myImage } from './image';

myImage.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  canvas.width = 500;
  canvas.height = 706;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height)

  let particlesArray = [];

  const numberOfParticles = 5000;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 3.5;
      this.size = Math.random() * 1.5 + 1;
    }

    update() {
      this.y += this.velocity;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }
  }
})