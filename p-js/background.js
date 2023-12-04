export default class Background {
    constructor(frames) {
      // O construtor é chamado quando uma instância da classe é criada
      // Aqui você pode inicializar propriedades e realizar outras tarefas de configuração
      this.frames = frames;
      this.width = 57
      this.PointX = 0
      this.framesPerdirection = 0;
      this.movementState = "corre"
      this.seletor();
      this.currframes = 0
      this.Background={
          flakes:{
              centroX : this.canvas.width / 3,
              centroY : this.canvas.height / 3,
              speed :0.8
            }
        }
        this.chao = new Image();
        this.bunny = new Image();
        this.keys = {}
      this.drawFlakes();
      console.log("iniciei background");
    }
  
    // Métodos da classe podem ser adicionados aqui
    seletor() {
        this.canvas = document.querySelector("canvas")
    }

    Animate(){
        const interval = 2
        const intervalMove = 10
        this.drawBackground();
        if(this.frames % interval == 0){
            this.Background.flakes.centroY += this.Background.flakes.speed
        }
        if(this.frames % intervalMove == 0){
            let sectionX;
            switch(this.movementState){
                case "parado":
                    this.framesPerdirection = 2
                    sectionX = 0 * this.width
                     break;
                case "corre":
                    this.framesPerdirection = 9
                    sectionX = 2 * this.width
                    break;
                default:
                    sectionX = 0
            }
            
            this.PointX = sectionX + (this.currframes % this.framesPerdirection) * this.width
            console.log("cheguei aqui", this.PointX )
    
            this.currframes++
    
            if(this.currframes >= this.framesPerdirection){
                this.currframes = 0
            }
        }
        this.drawFlakes();
        this.drawBunny();
    }
    
    drawBackground() {
        const sprites = this.chao;
        sprites.src = "../imgs/chao.png";
        const contexto = this.canvas.getContext('2d');
        contexto.fillStyle = "#08142a";
        contexto.fillRect(0,0,this.canvas.width, this.canvas.height)
        contexto.drawImage(
            sprites,
            0, 0,  // sx, sy (começo do recorte na imagem de origem)
            sprites.width, sprites.height,  // sWidth, sHeight (largura e altura do retângulo de recorte)
            0, this.canvas.height - 16,  // dx, dy (coordenadas no canvas onde a imagem deve ser desenhada)
            this.canvas.width, 16  // dWidth, dHeight (largura e altura da imagem no canvas após o desenho)
        );
        
    }

    drawFlakes() {
        const contexto = this.canvas.getContext('2d');
        
        contexto.fillStyle = "#f1f1f1";
        const raio = 1.5; 
    
        const centroX = this.Background.flakes.centroX
        const centroY = this.Background.flakes.centroY
    
        for (let i = 0; i < 6; i++) {
            const angulo = (i / 6) * (2 * Math.PI);
            const x = centroX + 2 * raio * Math.cos(angulo);
            const y = centroY + 2 * raio * Math.sin(angulo);    
            contexto.beginPath();
            contexto.arc(x, y, raio, 0, 2 * Math.PI);
            contexto.fill();
            contexto.closePath();
        }
    }
    
    drawBunny() {
        const sprites = this.bunny;
        sprites.src = "../imgs/sprites/iddle-sheet3.png";
        const contexto = this.canvas.getContext('2d');

        
        contexto.drawImage(
            sprites,
            this.PointX, 0,  // sx, sy (começo do recorte na imagem de origem)
            this.width, 57,  // sWidth, sHeight (largura e altura do retângulo de recorte)
            0, this.canvas.height - 32 - 16,  // dx, dy (coordenadas no canvas onde a imagem deve ser desenhada)
            32, 32  // dWidth, dHeight (largura e altura da imagem no canvas após o desenho)
        );

    }


    evento

  }
  