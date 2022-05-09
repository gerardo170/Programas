var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonlicuadora  = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");


function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerSonidos();
        licuadora.classList.add("active");
        // console.log("me prendiste");
    }   else {
        estadoLicuadora = "apagada"
        hacerSonidos();
        licuadora.classList.remove("active");
        // console.log("me apagaste");
    }
}

function hacerSonidos(){
 if(sonidoLicuadora.paused){
     botonlicuadora.play();
     sonidoLicuadora.play();
 } else{
     botonlicuadora.play();
     sonidoLicuadora.pause();
     sonidoLicuadora.currentTime = 0;
 }
}