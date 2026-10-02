/* eslint-disable no-undef, no-unused-vars */

// constante para la URL del modelo 3D
const URL_3D = "3D/ASM - Tutorial 8 - Object.obj";

// constante para la URL de la textura del modelo
const URL_TEXTURE = "Textura/ASM - Tutorial 8 - Texture.png";

// constantes para el segundo objeto 3D y su textura
const URL_3D_2 = "3D/Young Link.obj";
const URL_TEXTURE_2 = "Textura/textura_link.png";

// Variable donde se almacena el modelo 3D
let model3D;

// Variable donde se almacena la textura
let texture3D;

// Variables del segundo modelo y su textura
let model3D2;
let texture3D2;

// Función de precarga
function preload() {
  // Carga el modelo 3D, normalizado
  model3D = loadModel(URL_3D, true);
  // Carga la imagen de la textura
  texture3D = loadImage(URL_TEXTURE);

  // Carga el segundo modelo 3D, normalizado, y su textura
  model3D2 = loadModel(URL_3D_2, true);
  texture3D2 = loadImage(URL_TEXTURE_2);
}

// Función de configuración
function setup() {
  // Cree aun canvas con soporte para 3D de 500px x 500px
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Determina que se van a utiliza los grados como unidad de medición
  angleMode(DEGREES);
  // Quita las líneas negras de los triángulos
  noStroke();
  // Repite la textura si las coordenadas UV salen del rango 0-1
  textureWrap(REPEAT);
}

// Función de pintado
function draw() {
  // Establece el color de fondo
  background(200);
  // Rota la figura en el eje Y
  rotateY(frameCount);

  // ---- Primer modelo ----
  push();
  // Lo mueve a la izquierda
  translate(-150, 0, 0);
  // Aplica la textura al modelo
  texture(texture3D);
  // Escala el modelo 3D
  scale(1.5);
  // Rota el modelo 180 grados
  rotateX(180);
  // Presenta el modelo
  model(model3D);
  pop();

  // ---- Segundo modelo (Young Link) ----
  push();
  // Lo mueve a la derecha
  translate(150, 0, 0);
  // Aplica la textura al segundo modelo
  texture(texture3D2);
  scale(1.5);
  rotateX(180);
  model(model3D2);
  pop();
}

// SE LLAMA SI EL TAMAÑO DE LA VENTANA DEL NAVEGADOR WEB CAMBIA
windowResized = function () {
  // Redimenciona el tamaño del lienzo al tamaño de la ventana del navegador Web
  resizeCanvas(windowWidth, windowHeight);
};