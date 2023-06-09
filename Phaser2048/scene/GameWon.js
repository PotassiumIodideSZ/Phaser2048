export function isGameWon(tile, gameScene) {
  if (tile.value === 2048) {
    const winContainer = gameScene.children.getByName("winContainer");
    winContainer.visible = true;
  }
}
