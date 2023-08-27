class Particle {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  size: number;
  velocity: number;
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.size = Math.random() * 1.5 + 1;
    this.velocity = Math.random() * 1.5;
  }

  update() {
    this.y += this.velocity;
    if (this.y >= this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export default Particle;
