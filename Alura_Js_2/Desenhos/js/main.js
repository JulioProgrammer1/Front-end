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