import { isValidPosition } from "./TilesMoves.js";

function gameOver(gameScene) {
  const gameOverContainer = gameScene.children.getByName("gameOverContainer");
  gameOverContainer.visible = true;
}

export function isGameOver(gameScene) {
  for (let i = 0; i < gameScene.boardSize; i++) {
    for (let j = 0; j < gameScene.boardSize; j++) {
      if (gameScene.board[i][j].value === 0) {
        return false;
      }
    }
  }

  for (let i = 0; i < gameScene.boardSize; i++) {
    for (let j = 0; j < gameScene.boardSize; j++) {
      const tile = gameScene.board[i][j];
      if (
        (isValidPosition(i + 1, j, gameScene.boardSize) &&
          tile.value === gameScene.board[i + 1][j].value) ||
        (isValidPosition(i, j + 1, gameScene.boardSize) &&
          tile.value === gameScene.board[i][j + 1].value)
      ) {
        return false;
      }
    }
  }

  // No more valid moves
  gameOver(gameScene);
  return true;
}
