import { tileSize, moveDuration } from "./GameStart.js";
import { updateVisualTileStyle } from "./TileStyle.js";

export function moveTilesVisually(movedTiles, gameScene) {
  const visualBoardRect = gameScene.add.container(
    gameScene.cameras.main.centerX,
    gameScene.cameras.main.centerY
  );

  movedTiles.forEach(function(tileObj) {
    const tile = tileObj.tile;
    const deltaX = tile.j - tileObj.toX;
    const deltaY = tile.i - tileObj.toY;
    tile.rect.clear();
    tile.text.setText("");

    const newTileRect = gameScene.add.graphics();

    visualBoardRect.add(newTileRect);
    newTileRect.depth = 2;

    const newTileText = gameScene.add.text(
      tile.text.x,
      tile.text.y,
      tile.value,
      {}
    );
    visualBoardRect.add(newTileText);
    newTileText.setOrigin(0.5);
    newTileText.depth = 2;

    const visualTile = {
      value: tile.value,
      rect: newTileRect,
      text: newTileText,
      rectX: tile.rect.rectX,
      rectY: tile.rect.rectY,
    };

    updateVisualTileStyle(visualTile);
    gameScene.tweens.add({
      targets: [visualTile.rect, visualTile.text],
      x: "-=" + tileSize * deltaX,
      y: "-=" + tileSize * deltaY,
      duration: moveDuration,
      ease: "Linear",
      onComplete: function() {
        visualTile.rect.destroy();
        visualTile.text.destroy();
      },
    });
  });
}
