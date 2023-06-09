import { tileSize, boardSize } from "./GameStart.js";
import Tile from "./TileCreation.js";

export function updateTileStyle(tile) {
  const defaultFontSize = tileSize * 0.7;
  const styles = {
    0: {
      fillColor: 0xdbd2c7,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    2: {
      fillColor: 0xeee4d9,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    4: {
      fillColor: 0xede0c7,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    8: {
      fillColor: 0xf9b376,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    16: {
      fillColor: 0xff9b60,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    32: {
      fillColor: 0xca6a49,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    64: {
      fillColor: 0xec6233,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    128: {
      fillColor: 0xe8c562,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    256: {
      fillColor: 0xdfba55,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    512: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    1024: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.5}px`,
      fontColor: "#f9f6f2",
    },
    2048: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.5}px`,
      fontColor: "#f9f6f2",
    },
  };

  let style = undefined;
  if (tile.value >= 2048) {
    style = styles[2048];
  } else {
    style = styles[tile.value];
  }

  if (style) {
    const x = tile.rect.rectX;
    const y = tile.rect.rectY;
    tile.rect.clear();
    tile.rect.fillStyle(style.fillColor);
    tile.rect.fillRoundedRect(x, y, tileSize * 0.9, tileSize * 0.9, 16);
    tile.text.setStyle({ fontSize: style.fontSize, fill: style.fontColor });
    if (tile.value !== 0) tile.text.setText(tile.value);
    else tile.text.setText("");
  }
}

export function updateVisualTileStyle(tile) {
  const defaultFontSize = tileSize * 0.7;
  const styles = {
    0: {
      fillColor: 0xdbd2c7,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    2: {
      fillColor: 0xeee4d9,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    4: {
      fillColor: 0xede0c7,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#776e65",
    },
    8: {
      fillColor: 0xf9b376,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    16: {
      fillColor: 0xff9b60,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    32: {
      fillColor: 0xca6a49,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    64: {
      fillColor: 0xec6233,
      fontSize: `${defaultFontSize}px`,
      fontColor: "#f9f6f2",
    },
    128: {
      fillColor: 0xe8c562,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    256: {
      fillColor: 0xdfba55,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    512: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.7}px`,
      fontColor: "#f9f6f2",
    },
    1024: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.5}px`,
      fontColor: "#f9f6f2",
    },
    2048: {
      fillColor: 0xf3c54b,
      fontSize: `${defaultFontSize * 0.5}px`,
      fontColor: "#f9f6f2",
    },
  };

  let style = undefined;
  if (tile.value >= 2048) {
    style = styles[2048];
  } else {
    style = styles[tile.value];
  }

  if (style) {
    tile.rect.fillStyle(style.fillColor);
    tile.rect.fillRoundedRect(
      tile.rectX,
      tile.rectY,
      tileSize * 0.9,
      tileSize * 0.9,
      16
    );
    tile.text.setStyle({ fontSize: style.fontSize, fill: style.fontColor });
  }
}
