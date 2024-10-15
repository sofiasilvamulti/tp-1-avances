let fondos = [];
let estado;

function preload(){
  fondos[0] = loadImage("data/fondo0.webp");
  fondos[1] = loadImage("data/fondo1.webp");
  fondos[2] = loadImage("data/fondo2.webp");
  fondos[3] = loadImage("data/fondo3.webp");
  fondos[3.1] = loadImage("data/fondo3b.webp");
  fondos[4] = loadImage("data/fondo4.webp");
  fondos[4.1] = loadImage("data/fondo4b.webp");
  fondos[5] = loadImage("data/fondo5.webp");
  fondos[6] = loadImage("data/fondo6.jpg");
  fondos[6.1] = loadImage("data/fondo6b.jpg");
  fondos[7] = loadImage("data/fondo7.jpg");
}

function setup() {
createCanvas(640,480);
estado = 0;
}

function draw() {
background(200);

if (fondos[estado]){
  image(fondos[estado], 0, 0, 640, 480);
}

if (estado === 0){
  dibujarBoton(50, 50, 100, 50, "siguiente",1);
}else if (estado === 1){
  dibujarBoton(50, 50, 100, 50, "siguiente",2);
}else if (estado === 2){
  dibujarBoton(50, 50, 100, 50, "opción 1", 3);
  dibujarBoton(50, 50, 100, 50, "opción 2", 3.1);
}else if (estado === 3){
  dibujarBoton(50, 50, 100, 50, "siguiente",4);
}else if (estado === 3.1){
  dibujarBoton(50, 50, 100, 50, "siguiente",4.1);
}else if (estado === 4){
  dibujarBoton(50, 50, 100, 50, "siguiente",5);
}else if (estado === 4.1){
  dibujarBoton(50, 50, 100, 50, "opción 1", 4);
  dibujarBoton(50, 50, 100, 50, "opción 2", 5.1);
}else if (estado === 5){
  dibujarBoton(50, 50, 100, 50, "opción 1", 6);
  dibujarBoton(50, 50, 100, 50, "opción 2", 6.1);
}else if (estado === 5.1){
fill (255, 0, 0);
textSize (25);
text ("fin", 50, 450);
}else if(estado === 6){
  dibujarBoton(50, 50, 100, 50, "siguiente", 7);
}else if (estado === 6.1){
fill (255, 0, 0);
textSize (25);
text ("fin", 50, 450);
}else if (estado === 7){
fill (255, 0, 0);
textSize (25);
text ("fin", 50, 450);
 }
}

function dibujarBoton(x, y, w, h) {
  fill(100); // color del botón
  rect(x, y, w, h); // dibujar el botón
}
function mousePressed() {
  if (estado === 0) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 1; // cambiar a estado 1
    }
  } else if (estado === 1) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 2; // cambiar a estado 2
    }
  } else if (estado === 2) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 3; // cambiar a estado 3
    } else if (mouseEnBoton(50, 110, 100, 50)) {
      estado = 3.1; // cambiar a estado 3.1
    }
  } else if (estado === 3) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 4; // cambiar a estado 4
    }
  } else if (estado === 3.1) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 4.1; // cambiar a estado 4.1
    }
  } else if (estado === 4) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 5; // cambiar a estado 5
    }
  } else if (estado === 4.1) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 4; // cambiar a estado 4 (opción 1)
    } else if (mouseEnBoton(50, 110, 100, 50)) {
      estado = 5.1; // cambiar a estado 5.1 (opción 2)
    }
  } else if (estado === 5) {
    if (mouseEnBoton(50, 50, 100, 50)) {
      estado = 6; // cambiar a estado 6 (opción 1)
    } else if (mouseEnBoton(50, 110, 100, 50)) {
      estado = 6.1; // cambiar a estado 6.1 (opción 2)
    }
  }
}
function dibujarBoton(x, y, w, h, texto, nuevoEstado) {
  fill(100); // color del botón
  rect(x, y, w, h); // dibujo el boton
  fill(255); // color del texto
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2); // dibuja el texto

  // para detectar si se hace click en el boton
  if (mouseIsPressed && mouseEnBoton(x, y, w, h)) {
    estado = nuevoEstado;  // Cambia al nuevo estado
  }
}

// para verificar si el mouse está sobre un botón
function mouseEnBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
} 
