import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const current = document.querySelector(".current");
const memory = new Memory(cardsData, cards, left, right, current);
memory.buildCards();
