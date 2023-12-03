import Background from "./background.js";

document.addEventListener("DOMContentLoaded",function() {
    let Frames = 0
    const Fundo = new Background(Frames);
    function loop(){
        Fundo.Animate();
        requestAnimationFrame(loop)
        Frames++
        Fundo.frames = Frames
    }
    loop()
    console.log("Dom Carregado")
});