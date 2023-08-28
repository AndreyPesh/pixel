class Particle {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  mappedImage: Array<number[][]>;
  x: number;
  y: number;
  size: number;
  speed: number;
  velocity: number;
  position1: number;
  position2: number;
  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    mappedImage: Array<number[][]>
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.mappedImage = mappedImage;
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.speed = 0;
    this.size = Math.random() * 0.8 + 1;
    this.velocity = Math.random() * 1.8;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
  }

  update() {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);

    this.speed = this.mappedImage[this.position1][this.position2][0];

    let movement = 1.3 - this.speed + this.velocity;

    this.y += movement;
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
