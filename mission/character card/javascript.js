const card = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  attacked() {
    if (this.health > 0) {
      this.health -= 20;

      if (this.health < 0) {
        this.health = 0;
      }

      document.getElementById("cardHealth").textContent =
        `Health: ${this.health}`;

      if (this.health === 0) {
        alert(`${this.name} has died!`);
      }
    }
  },

  levelUp() {
    this.level++;
    document.getElementById("cardLevel").textContent =
      `Level: ${this.level}`;
  }
};

document.querySelector(".name span").textContent = card.name;
document.querySelector(".image").src = card.image;
document.getElementById("cardClass").textContent = `Class: ${card.class}`;
document.getElementById("cardLevel").textContent = `Level: ${card.level}`;
document.getElementById("cardHealth").textContent = `Health: ${card.health}`;

document.getElementById("cardAttack").addEventListener("click", function () {
  card.attacked();
});

document.getElementById("cardLevelUp").addEventListener("click", function () {
  card.levelUp();
});