import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards")! as HTMLDivElement;
const totalCardsCount = document.querySelector(
  ".total-cards"
)! as HTMLSpanElement;
const checkedCardsCount = document.querySelector(
  ".checked-cards"
)! as HTMLSpanElement;
const left = document.querySelector(".left-container")! as HTMLDivElement;
const memory = new Memory(
  cardsData,
  cards,
  left,
  totalCardsCount,
  checkedCardsCount
);
const nextBtn = document.querySelector(".next")! as HTMLDivElement;
const check = document.querySelector(".checked")! as HTMLDivElement;
const answer = document.querySelector(".answer-js")! as HTMLDivElement;
const submit = document.querySelector(".submit-js")! as HTMLInputElement;
const title = document.querySelector(".title-js")! as HTMLInputElement;
const content = document.querySelector(".content-js")! as HTMLInputElement;
const answerInput = document.querySelector(
  ".answer-input-js"
)! as HTMLInputElement;
memory.buildCards();
nextBtn.addEventListener("click", function () {
  console.log("k");
  memory.moveRight();
});
check.addEventListener("click", function () {
  memory.checkTheCard();
});
answer.addEventListener("click", function () {
  memory.showAnswer();
});
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(title.value, answerInput.value, content.value);
});
