function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

let circle = new Circle(150, 150, 50, "blue");
let drawCircle = document.getElementById("myCanvas");
let context = drawCircle.getContext('2d');
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fillStyle = circle.color;
    context.fill();
    context.closePath();