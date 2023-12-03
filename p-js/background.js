export default class Background {
    constructor() {
      // O construtor é chamado quando uma instância da classe é criada
      // Aqui você pode inicializar propriedades e realizar outras tarefas de configuração
      this.chao = new Image();
      this.seletor();
      this.drawBackground();
      console.log("iniciei background");
    }
  
    // Métodos da classe podem ser adicionados aqui
    seletor() {
        this.canvas = document.querySelector("canvas")
    }
    
    drawBackground() {
        const sprites = this.chao;
        sprites.src = "../imgs/ground.jpg";
        const contexto = this.canvas.getContext('2d');
        contexto.fillStyle = "#08142a"
        contexto.fillRect(0,0,this.canvas.width, this.canvas.height)
        contexto.drawImage(
            sprites,
            0, 0,  // sx, sy (começo do recorte na imagem de origem)
            sprites.width, sprites.height,  // sWidth, sHeight (largura e altura do retângulo de recorte)
            0, this.canvas.height - 16,  // dx, dy (coordenadas no canvas onde a imagem deve ser desenhada)
            this.canvas.width, 16  // dWidth, dHeight (largura e altura da imagem no canvas após o desenho)
        );
    }
    
  }
  