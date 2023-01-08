import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards");
const totalCardsCount = document.querySelector(".total-cards");
const checkedCardsCount = document.querySelector(".checked-cards");
const left = document.querySelector(".left-container");
const addCard = document.querySelector(".add-card-js");
const nextBtn = document.querySelector(".next");
const check = document.querySelector(".checked");
const answer = document.querySelector(".answer-js");
const submit = document.querySelector(".submit-js");
const title = document.querySelector(".title-js");
const content = document.querySelector(".content-js");
const form = document.querySelector(".form");
const answerInput = document.querySelector(".answer-input-js");
const memory = new Memory(cardsData, cards, left, totalCardsCount, checkedCardsCount, submit, title, content, answerInput);
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
    memory.addCard(e);
    // form.style.height = "0";
});
addCard.addEventListener("click", function () {
    form.style.height = "30rem";
});
