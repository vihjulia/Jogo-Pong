//Variáveis da bolinha
let xbolinha =200
let ybolinha =200
let diametro =30
let raio = diametro/2

//Variáveis da velocidade
let xvelocidade = 6
let yvelocidade = 6

//Variáveis da Raquete
let xraquete = 5
let yraquete = 200
let lraquete = 15
let hraquete = 100
let xraqueteop = 580
let yraqueteop = 200
let velocidadeyop;
let colidiu = false

//variaveis do placar
let meuspontos = 0
let pontosop = 0

function setup() {
  createCanvas(600, 550);
}

function draw() {
  background(0);
  criabolinha();
  movimentobolinha();
  colisaoborda();
  minharaquete();
  movimentaraquete();
  colisaoraquete() ;
  criaraqueteop();
  movimentoraqueteop();
  colisaobolinharaquete();
  criaplacar ();
 marcaponto();
}

function criabolinha(){circle(xbolinha, ybolinha, diametro)}
function movimentobolinha(){ xbolinha += xvelocidade
  ybolinha += yvelocidade}
function colisaoborda(){if ( xbolinha + raio > width || xbolinha - raio < 0 )
    xvelocidade *= -1
  if ( ybolinha > height || ybolinha < 0 )
    yvelocidade *= -1}
function minharaquete(){rect(xraquete,yraquete,lraquete,hraquete)}
function movimentaraquete(){
if (keyIsDown(UP_ARROW))
yraquete -= 10
if (keyIsDown(DOWN_ARROW))
yraquete += 10}
function colisaoraquete(){
if (xbolinha - raio < xraquete + lraquete
  && ybolinha - raio < yraquete + hraquete
  && ybolinha + raio > yraquete)
xvelocidade *= -1}
function criaraqueteop(){ 
 rect (xraqueteop,yraqueteop,lraquete,hraquete)
}
function movimentoraqueteop(){
  velocidadeyop = ybolinha - yraqueteop - lraquete/2 - 200
  yraqueteop += velocidadeyop
}
function colisaobolinharaquete() {
  colidiu = collideRectCircle (xraqueteop,yraqueteop,lraquete,hraquete,xbolinha,ybolinha,diametro)
if (colidiu)
  xvelocidade *= -1
}
function criaplacar (){
  stroke(255)
  fill (color(10,170,86))
  rect(130,0,70,30)
  rect(427,0,70,30)
  textAlign(CENTER)
  textSize (30)
  fill(255)
  text  (meuspontos,150,27)
  text (pontosop, 450,27)
}
function marcaponto(){
 if(xbolinha < 15)
   pontosop += 1
  if (xbolinha > 587)
   meuspontos += 1
}
