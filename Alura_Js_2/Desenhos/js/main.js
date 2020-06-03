var tela = document.querySelector(".canvas1");
var pincel = tela.getContext("2d");
pincel.fillStyle = "green";
pincel.fillRect(0,0,200,400);
pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

/*
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();
*/

var tela2 = document.querySelector(".canvas2");
var pincel2 = tela2.getContext("2d");
pincel2.fillStyle = "green";
pincel2.fillRect(0,0,600,400);
pincel2.fillStyle = "yellow";
pincel2.beginPath();
pincel2.moveTo(10, 200);
pincel2.lineTo(300, 50);
pincel2.lineTo(300, 350);
pincel2.fill();
pincel2.beginPath();
pincel2.moveTo(590, 200);
pincel2.lineTo(300, 50);
pincel2.lineTo(300, 350);
pincel2.fill();
pincel2.fillStyle = "#08088A";
pincel2.beginPath();
pincel2.arc(300, 200, 80, 0, 2 * 3.14);
pincel2.fill();

var tela3 = document.querySelector(".canvas3");
var pincel3 = tela3.getContext("2d");
pincel3.fillStyle = "#0B610B";
pincel3.fillRect(0,0,600,400);
pincel3.fillStyle = "#000";
pincel3.fillRect(90, 50, 140, 140);
pincel3.fillRect(370, 50, 140, 140);
pincel3.fillRect(235, 190, 130, 100);
pincel3.fillRect(150, 230, 90, 170);
pincel3.fillRect(365, 230, 90, 170);

var tela4 = document.querySelector(".canvas4");
var pincel4 = tela4.getContext("2d");
pincel4.fillStyle = "#000";
pincel4.beginPath();
pincel4.moveTo(0,0);
pincel4.lineTo(600,600);
pincel4.lineTo(0, 600);
pincel4.fill();

pincel4.fillStyle = "#fff";
pincel4.beginPath();
pincel4.moveTo(60, 150);
pincel4.lineTo(60, 530);
pincel4.lineTo(450, 530);
pincel4.fill();

var quadrado = document.querySelector(".canvas5");
var pincel5 = quadrado.getContext("2d");

function fazUmQuadrado(x,y,cor) {
    pincel5.fillStyle = cor;
    pincel5.fillRect(x,y,100,100);
}

var x = 0;
var y = 0;

while ( true ) {

    fazUmQuadrado(x, y, "yellow");

    if ( x == 600 && y == 600 ) {
        break;
    }

    else if ( x == 600 ) {
        x = 0;
        y += 100;
    }
    else {
        x += 100;
    }
}

var tela5 = document.querySelector(".canvas6");
var pincel6 =  tela5.getContext("2d");

pincel6.fillStyle = "lightgrey";
pincel6.fillRect(0,0,600,400);

function imprimeBolinhas(x,y,) {
    pincel6.fillStyle = cor;
    pincel6.beginPath();
    pincel6.arc(x,y,50,0,2*3.14);
    pincel6.fill();
}

var cor = "yellow";

var x = 300;
var y = 200;

for ( var i = 0; i <= 5; i++ ) {

    imprimeBolinhas(x,y,cor);

    if ( i == 1 ) {
        y = 100;
        cor = "blue";
    }
    else if ( i == 2 ) {
        y = 200;
        x = 200;
        cor = "red";
    }
    else if ( i == 3) {
        y = 300;
        x = 300;
        cor = "orange";
    }
    else if ( i == 4 ) {
        y = 200;
        x = 400;
        cor = "purple";
    }
}

var grafico = document.querySelector(".canvas7");
var pincel6 = grafico.getContext("2d");

function fazUmGrafico(x,y,cor,final) {
    pincel6.fillStyle = cor;
    pincel6.fillRect(x,y,100,final);
}

x = 0;
y = 0;
var final1  = 100;

for ( var i = 0; i <= 3; i++ ) {

    if ( i == 0 ) {
        cor = "pink";
    }
    
    if ( i == 1 ) {
        cor = "yellow";
    }
    else if ( i == 2 ) {
        cor = "blue";
    }

    fazUmGrafico(x, y, cor, final1);

    final1 =  final1-20;
}

function esquadro(x,y,x1,y1) {

var tela6 = document.querySelector(".canvas8");
var pincel7 = tela6.getContext("2d");
pincel7.fillStyle = "#000";
pincel7.beginPath();
pincel7.moveTo(0,0);
pincel7.lineTo(600,600);
pincel7.lineTo(0, 600);
pincel7.fill();

pincel7.fillStyle = "#fff";
pincel7.beginPath();
pincel7.moveTo(60, 150);
pincel7.lineTo(x,y);
pincel7.lineTo(x1,y1);
pincel7.fill();

}

esquadro(100 , 500, 300, 400);