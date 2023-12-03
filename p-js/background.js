export default class Background {
    constructor(frames) {
      // O construtor é chamado quando uma instância da classe é criada
      // Aqui você pode inicializar propriedades e realizar outras tarefas de configuração
      this.frames = frames
      this.seletor();
      this.Background={
        flakes:{
            centroX : this.canvas.width / 3,
            centroY : this.canvas.height / 3,
            speed :0.8
        }
      }
      this.chao = new Image();
      this.drawFlakes();
      console.log("iniciei background");
    }
  
    // Métodos da classe podem ser adicionados aqui
    seletor() {
        this.canvas = document.querySelector("canvas")
    }

    Animate(){
        const interval = 2
        this.drawBackground();
        if(this.frames % interval == 0){
            this.Background.flakes.centroY += this.Background.flakes.speed
            console.log(this.Background.flakes.centroY)
        }
        this.drawFlakes();
    }
    
    drawBackground() {
        const sprites = this.chao;
        sprites.src = "../imgs/ground.jpg";
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
    
    
  }
  