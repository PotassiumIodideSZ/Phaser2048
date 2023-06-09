import { isGameOver } from "./GameOver.js";
import { isGameWon } from "./GameWon.js";
import { updateTileStyle } from "./TileStyle.js";
import { updateScore } from "./Score.js";
import { moveTilesVisually } from "./VisualMoves.js";

export function isValidPosition(i, j, boardSize) {
  return i >= 0 && i < boardSize && j >= 0 && j < boardSize;
}

function swapTiles(tile1, tile2, toBeUpdated) {
  const tempValue = tile1.value;
  tile1.value = tile2.value;
  tile2.value = tempValue;
  toBeUpdated.push(tile1);
  toBeUpdated.push(tile2);
}

function mergeTiles(tile1, tile2, toBeUpdated, gameScene) {
  tile2.value *= 2;
  tile1.value = 0;
  tile2.merged = true;
  isGameWon(tile2, gameScene);

  updateScore(tile2.value, gameScene);
  toBeUpdated.push(tile1);
  toBeUpdated.push(tile2);
}

export function moveTiles(deltaX, deltaY, gameScene) {
  let moved = false;
  for (let i = 0; i < gameScene.boardSize; i++) {
    for (let j = 0; j < gameScene.boardSize; j++) {
      const tile = gameScene.board[i][j];
      tile.merged = false;
    }
  }
  const startX = deltaX > 0 ? gameScene.boardSize - 1 : 0;
  const endX = deltaX > 0 ? -1 : gameScene.boardSize;
  const incX = deltaX > 0 ? -1 : 1;
  const startY = deltaY > 0 ? gameScene.boardSize - 1 : 0;
  const endY = deltaY > 0 ? -1 : gameScene.boardSize;
  const incY = deltaY > 0 ? -1 : 1;

  let toBeMoved = [];
  let toBeUpdated = [];

  let toBePushed = false;

  for (let i = startY; i !== endY; i += incY) {
    for (let j = startX; j !== endX; j += incX) {
      let tileMerged = false;
      const tile = Object.assign({}, gameScene.board[i][j]);

      if (tile.value === 0) {
        continue;
      }
      let nextI = i + deltaY;
      let nextJ = j + deltaX;
      while (isValidPosition(nextI, nextJ, gameScene.boardSize)) {
        const nextTile = gameScene.board[nextI][nextJ];
        const curTile = gameScene.board[i][j];

        if (nextTile.value === 0) {
          swapTiles(curTile, nextTile, toBeUpdated);
          toBePushed = true;
        } else if (
          nextTile.value === curTile.value &&
          curTile.merged === false &&
          nextTile.merged === false
        ) {
          mergeTiles(curTile, nextTile, toBeUpdated, gameScene);
          toBePushed = true;
          tileMerged = true;
          nextI += deltaY;
          nextJ += deltaX;
          break;
        } else {
          break;
        }

        i += deltaY;
        j += deltaX;
        nextI += deltaY;
        nextJ += deltaX;
      }
      if (toBePushed) {
        moved = true;
        toBeMoved.push({
          tile: tile,
          toX: nextJ - deltaX,
          toY: nextI - deltaY,
          merged: tileMerged,
        });
      }
      toBePushed = false;
    }
  }

  moveTilesVisually(toBeMoved, gameScene);

  setTimeout(function turnEnd() {
    if (moved) {
      toBeUpdated.forEach(function(tile) {
        updateTileStyle(tile);
      });

      gameScene.addNewTile();

      isGameOver(gameScene);
    }
  }, gameScene.moveDuration);
}
