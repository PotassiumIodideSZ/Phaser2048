export function updateScore(plusScore, gameScene) {
  gameScene.score += plusScore;
  gameScene.scoreText.setText(`СЧЁТ: ${gameScene.score}`);
}
