import { Memory } from "./class.js";
import { cardsData } from "./data.js";
const cards = document.querySelector(".cards")! as HTMLDivElement;

const left = document.querySelector(".left")! as HTMLDivElement;
const right = document.querySelector(".right")! as HTMLDivElement;
const current = document.querySelector(".current")! as HTMLDivElement;
const memory = new Memory(cardsData, cards, left, right, current);
memory.buildCards();
