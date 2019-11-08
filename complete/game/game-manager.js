class GameManager {
  constructor() {}

  render() {
    this.renderTiles();
  }

  renderTiles() {
    Array(12)
      .fill(1)
      .forEach((n, r) => {
        Array(20)
          .fill(1)
          .forEach((i, c) => {
            push();
            noFill();
            strokeWeight(0.4);
            stroke(color(49, 171, 224, 100));
            rect(50 * c, 50 * r, 50, 50);
            pop();
          });
      });
  }
}
