// Definindo variáveis para o personagem, grama e tamanho do bloco
let personagem;
let grama;
let tamanho = 64;
let andarx = 0;
let andary = 0;

function setup() {
  // Criando o canvas com tamanho 576x576
  createCanvas(576, 576);
  
  // Carregando as imagens do personagem e da grama
  personagem = loadImage('https://cdn.discordapp.com/attachments/1077051581633151067/1197691696872443904/pngwing.com.png?ex=65bc3050&is=65a9bb50&hm=7b5a71aa213d82adb0f7436bb166a5056f6ef43bf08fe4669b78f50e4afb3fae&');
  grama = loadImage('https://cdn.discordapp.com/attachments/1077051581633151067/1197691696507519108/depositphotos_575075484-stock-illustration-grass-texture-pixel-art-vector_copia.jpg?ex=65bc3050&is=65a9bb50&hm=60fbcf7af07dd1b33a6ec1135e530aac311e5f3e63f4badc8c148990e5cfa114&');
}

function draw() {
  // Definindo a cor de fundo
  background(225);

  // Desenhando a grade de grama
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(grama, x * tamanho, y * tamanho, tamanho, tamanho);
    }
  }

  // Desenhando o personagem na posição atual
  image(personagem, andarx, andary, tamanho, tamanho);
}

function keyPressed() {
  // Movendo o personagem com as setas do teclado
  if (keyIsDown(RIGHT_ARROW) && andarx < 512) {
    andarx += 64;
  }
  if (keyIsDown(LEFT_ARROW) && andarx > 0) {
    andarx -= 64;
  }
  if (keyIsDown(DOWN_ARROW) && andary < 512) {
    andary += 64;
  }
  if (keyIsDown(UP_ARROW) && andary > 0) {
    andary -= 64;
  }
}
