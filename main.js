var canvas;
var ctx;
var colour;

canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");
colour="red";

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.rect(100,100,610,300,);
ctx.stroke();

colour="blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(320,200,50,0,2*Math.PI);
ctx.stroke();

colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(400,200,50,0,2*Math.PI);
ctx.stroke();

colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(480,200,50,0,2*Math.PI);
ctx.stroke();

colour="yellow";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(360,270,50,0,2*Math.PI);
ctx.stroke();

colour="green";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(440,270,50,0,2*Math.PI);
ctx.stroke();