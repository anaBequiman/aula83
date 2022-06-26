var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var tamanhoTela = screen.width;
var novaLargura = screen.width - 70;
var novaAltura = screen.height - 300;
var tocou = "entity";
var posicaoXAtual, posicaoYAtual;
var utimaPosicaoX, ultimaPosicaoY;
    if (tamanhoTela < 992){
        document.getElementById("myCanvas").width = novaLargura;
        document.getElementById("myCanvas").height = novaAltura;
        document.body.style.overflow = 'hidden';
    }

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    canvas.addEventListener("touchstart", myTouque);
    function myTouque(e){
        tocou = "tocou";
        posicaoXAtual = e.touch[0].clientX - canvas.offsetLeft;
        posicaoYAtual = e.touch[0].clientY - canvas.offsetTop;
    }
    
    canvas.addEventListener("touchmove", myTouch);
    function myTouch(e){
        posicaoXAtual = e.touch[0].clientX - canvas.offsetLeft;
        posicaoYAtual = e.touch[0].clientY - canvas.offsetTop;

       if  (tocou == "tocou") {
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = widthOfLine;

       console.log("Ultima posição das coordenadas x e y = ");
       console.log("x = " + utimaPosicaoX + "y = " + ultimaPosicaoY);
       ctx.moveTo(utimaPosicaoX, ultimaPosicaoY);

       console.log("Posição atual das coordenadas x e y = ");
       console.log("x  = " + posicaoXAtual + "y = " + posicaoYAtual);
       ctx.lineTo(posicaoXAtual, posicaoYAtual);
       ctx.stroke();
       }

       ultimaPosicaoX = posicaoXAtual; 
       ultimaPosicaoY = posicaoYAtual;

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    canvas.addEventListener("mousedown", myMouseDown);
    
    function myMouseDown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {

         currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
         currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }

