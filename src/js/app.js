class Game {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.previousIndexCell = 0;
    this.currentIndexCell = 0;
  }

  drawBoard() {
    const board = document.querySelector(".board");
    for (let i = 0; i < this.boardSize; i += 1) {
      const item = document.createElement("div");
      item.className = "cell";
      item.id = `cell${i}`;
      board.append(item);
    }

    this.randomPosition();
  }

  randomPosition() {
    setInterval(() => {
      do {
        this.currentIndexCell = Math.floor(Math.random() * this.boardSize);
      } while (this.currentIndexCell === this.previousIndexCell);

      const previousCell = document.getElementById(
        `cell${this.previousIndexCell}`,
      );
      previousCell.innerHTML = "";

      const currentCell = document.getElementById(
        `cell${this.currentIndexCell}`,
      );
      currentCell.innerHTML = '<img src = "./img/goblin.png">';
      this.previousIndexCell = this.currentIndexCell;
    }, 900);
  }
}

const newGame = new Game(4);
newGame.drawBoard();
