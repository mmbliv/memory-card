import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards")! as HTMLDivElement;

const left = document.querySelector(".left-container")! as HTMLDivElement;
const right = document.querySelector(".right")! as HTMLDivElement;
const current = document.querySelector(".current")! as HTMLDivElement;
const memory = new Memory(cardsData, cards, left, right, current);
const nextBtn = document.querySelector(".next")! as HTMLDivElement;
const check = document.querySelector(".checked")! as HTMLDivElement;
memory.buildCards();
nextBtn.addEventListener("click", function () {
  console.log("k");
  memory.moveRight();
});
check.addEventListener("click", function () {
  memory.checkTheCard();
});
