import Tile from "./TileCreation.js";

export const tileSize = 128;
export const boardSize = 4;
export const moveDuration = 150;
const boardpadding = 16;

export const board = {
  x: (-tileSize * boardSize) / 2 - boardpadding,
  y: (-tileSize * boardSize) / 2 - boardpadding,
  width: tileSize * boardSize + boardpadding * 2,
  height: tileSize * boardSize + boardpadding * 2,
  cornerRadius: 16,
};

export function gameCreate(gameScene) {
  gameScene.tileSize = tileSize;
  gameScene.boardSize = boardSize;
  gameScene.moveDuration = moveDuration;
  gameScene.board = [];

  //Board
  const boardRect = gameScene.add.container(
    gameScene.cameras.main.centerX,
    gameScene.cameras.main.centerY
  );

  const boardBackground = gameScene.add.graphics();
  boardBackground.fillStyle(0xbbada0);
  boardBackground.fillRoundedRect(
    board.x,
    board.y,
    board.width,
    board.height,
    board.cornerRadius
  );
  boardBackground.lineStyle(6, 0x9e9e9e);
  boardBackground.strokeRoundedRect(
    board.x,
    board.y,
    board.width,
    board.height,
    board.cornerRadius
  );
  boardRect.add(boardBackground);
  boardRect.add(boardBackground);

  //GameOver screen
  const gameOverContainer = gameScene.add.container(
    gameScene.cameras.main.centerX,
    gameScene.cameras.main.centerY
  );

  gameOverContainer.setName("gameOverContainer");
  gameOverContainer.visible = false;
  const gameOverBackground = gameScene.add.graphics();
  gameOverBackground.fillStyle(0x000, 0.4);
  gameOverBackground.fillRoundedRect(
    board.x,
    board.y,
    board.width,
    board.height,
    board.cornerRadius
  );
  gameOverContainer.add(gameOverBackground);

  const gameOverText = gameScene.add.text(0, 0, "Нельзя сделать ход", {
    fontSize: "42px",
    fill: "#fff",
  });
  gameOverText.setOrigin(0.5);
  gameOverContainer.add(gameOverText);

  //Win screen
  const winContainer = gameScene.add.container(
    gameScene.cameras.main.centerX,
    gameScene.cameras.main.centerY
  );

  winContainer.setName("winContainer");
  winContainer.visible = false;
  const winBackground = gameScene.add.graphics();
  winBackground.fillStyle(0xffffff, 0.8);
  winBackground.fillRoundedRect(
    board.x,
    board.y,
    board.width,
    board.height,
    board.cornerRadius
  );
  winContainer.add(winBackground);

  const winText = gameScene.add.text(0, 0, "Уровень пройден", {
    fontSize: "42px",
    fill: "#000",
  });
  winText.setOrigin(0.5);
  winContainer.add(winText);

  //Score field

  gameScene.score = 0;

  const scoreContainer = gameScene.add.container(
    gameScene.cameras.main.centerX,
    gameScene.cameras.main.centerY - gameScene.tileSize * 3
  );

  const scoreBackground = gameScene.add.graphics();
  scoreBackground.fillStyle(0xdadada);
  scoreBackground.fillRoundedRect(
    -gameScene.tileSize * 1.25,
    -gameScene.tileSize * 0.5,
    gameScene.tileSize * 2.5,
    gameScene.tileSize * 1,
    55
  );
  scoreBackground.lineStyle(6, 0x9e9e9e);
  scoreBackground.strokeRoundedRect(
    -gameScene.tileSize * 1.25,
    -gameScene.tileSize * 0.5,
    gameScene.tileSize * 2.5,
    gameScene.tileSize * 1,
    55
  );
  scoreContainer.add(scoreBackground);

  gameScene.scoreText = gameScene.add.text(0, 0, `СЧЁТ: ${gameScene.score}`, {
    fontSize: "48px",
    fill: "#5d5955",
  });
  gameScene.scoreText.setOrigin(0.5);
  scoreContainer.add(gameScene.scoreText);

  //Board creation

  for (let i = 0; i < gameScene.boardSize; i++) {
    gameScene.board.push([]);
    for (let j = 0; j < gameScene.boardSize; j++) {
      const tile = new Tile(gameScene, i, j, boardRect);
      gameScene.board[i].push(tile);
    }
  }

  gameScene.addNewTile();
  gameScene.addNewTile();
}
