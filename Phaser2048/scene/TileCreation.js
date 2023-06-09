import Phaser from "phaser";

export default class Tile extends Phaser.GameObjects.Container {
  constructor(scene, i, j, boardRect) {
    super(scene);
    this.i = i;
    this.j = j;
    this.value = 0;
    this.merged = false;

    this.createTileRect(scene, boardRect);
    this.createText(scene, boardRect);
    this.createTile(scene, boardRect);
  }

  createTile(scene, boardRect) {
    this.createTileRect(scene, boardRect);
    this.createText(scene, boardRect);
  }

  createTileRect(scene, boardRect) {
    this.rect = scene.add.graphics();
    this.rect.rectX =
      this.j * scene.tileSize -
      (scene.boardSize * scene.tileSize) / 2 +
      scene.tileSize / 2 -
      (scene.tileSize * 0.9) / 2;
    this.rect.rectY =
      this.i * scene.tileSize -
      (scene.boardSize * scene.tileSize) / 2 +
      scene.tileSize / 2 -
      (scene.tileSize * 0.9) / 2;
    this.rect.fillStyle(0xdbd2c7);
    this.rect.fillRoundedRect(
      this.rect.rectX,
      this.rect.rectY,
      scene.tileSize * 0.9,
      scene.tileSize * 0.9,
      16
    );
    boardRect.add(this.rect);
  }

  createText(scene, boardRect) {
    this.text = scene.add.text(
      this.j * scene.tileSize -
        (scene.boardSize * scene.tileSize) / 2 +
        scene.tileSize / 2,
      this.i * scene.tileSize -
        (scene.boardSize * scene.tileSize) / 2 +
        scene.tileSize / 2,
      "",
      {
        color: "rgb(231, 21, 21)",
        fontSize: `${scene.tileSize * 0.7}px`,
      }
    );
    this.text.setOrigin(0.5);
    boardRect.add(this.text);
  }
}
