import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards");
const totalCardsCount = document.querySelector(".total-cards");
const checkedCardsCount = document.querySelector(".checked-cards");
const left = document.querySelector(".left-container");
const memory = new Memory(cardsData, cards, left, totalCardsCount, checkedCardsCount);
const nextBtn = document.querySelector(".next");
const check = document.querySelector(".checked");
const answer = document.querySelector(".answer-js");
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
