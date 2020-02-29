



let t = 0; // variable de tiempo

function setup() {
  
  var myCanvas =   createCanvas(150, 150);
  myCanvas.parent('canvas-container');
  noStroke();
  fill(40, 200, 40);
	rectMode(CENTER);
	//frameRate(60);
}

function draw() {
  background(20, 20); // fondo translúcido (crea estelas)

  // grilla de elipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // punto de partida de cada círculo depende de posición del ratón
      const anguloX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const anguloY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // y también varía según la posición de la partícula
      const angulo = anguloX * (x / width) + anguloY * (y / height);

      // cada partícula se mueve en forma circular
      const myX = x + 30 * cos(2 * PI * t + angulo);
      const myY = y + 30 * sin(2 * PI * t + angulo);

      ellipse(myX, myY, 20); // dibujar partícula
      
     
  
    }
  }
  ellipse(mouseX, mouseY, 10, 10);
  

  t = t + 1.01; // actualizar tiempo
}





function mousePressed() {
  fill(Math.random()* 256,Math.random()* 256,Math.random()* 256);
  
}

