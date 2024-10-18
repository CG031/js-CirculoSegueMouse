let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
createCanvas(400, 400);
background("yellow")
cor = color(random(0,250),random(0,250),random(0,250));
posicaoHorizontal = 250;
posicaoVertical = 250;}


function draw() {
  circle (posicaoHorizontal,posicaoVertical, 90);
  fill (cor);
  if(mouseX < posicaoHorizontal) {posicaoHorizontal = posicaoHorizontal - 1};
  if(mouseX > posicaoHorizontal) {posicaoHorizontal = posicaoHorizontal + 1};
  if(mouseY < posicaoVertical) {posicaoVertical = posicaoVertical - 1};
  if(mouseY > posicaoVertical) {posicaoVertical = posicaoVertical + 1};
  if(mouseIsPressed ){cor = color(random(0,250),random(0,250),random(0,250),random(0,250))}
}

