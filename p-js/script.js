import Background from "./background.js";

document.addEventListener("DOMContentLoaded",function() {
    const Fundo = new Background
    function loop(){
        Fundo.drawBackground();
        requestAnimationFrame(loop)
    }
    loop()
    console.log("Dom Carregado")
});