var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Memory {
    constructor(data, cardsNode, leftNode, rightNode, currentNode) {
        this.data = data;
        this.cardsNode = cardsNode;
        this.cards = [];
        this.currentCard = this.cards[0];
        this.leftCards = [];
        this.rightCards = [];
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = currentNode;
        this.checked = false;
        this.currentCardData = this.data[0];
        // this.cardsNode.appendChild(this.cards)
    }
    buildCardHTML(name, content, answer) {
        return `<div class="card_question">
            <p class="title">${name}</p>
            <p class="content">
            ${content}
            </p>
            </div>
            <div class="answer">${answer}</div>`;
    }
    buildCards() {
        this.data.forEach((d) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("card");
            wrapper.setAttribute("data-checked", "false");
            const html = this.buildCardHTML(d.name, d.content, d.answer);
            wrapper.innerHTML = html;
            this.cards.push(wrapper);
            //   this.cardsNode.appendChild(wrapper);
        });
        // console.log(this.cardsNode);
        this.currentCard = this.cards[0];
        this.leftCards = this.cards.slice(1);
        this.leftCards.forEach((card) => {
            card.classList.add("left-card");
            this.leftNode.appendChild(card);
        });
        console.log(this.leftCards);
        this.cardsNode.appendChild(this.cards[0]);
        return this.cards;
    }
    generateRandomIndex() {
        const length = this.leftCards.length;
        // console.log(length);
        return Math.floor(Math.random() * length);
    }
    appendNodeToLeft(node) {
        this.leftNode.append(node);
    }
    moveRight() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.cardsNode.classList.add("move-right");
            // this.currentCard.classList.remove("move-right");
            // await this.await(0.1);
            // this.currentCard.classList.remove("move-right");
            // await this.await(0.1);
            console.log(this.currentCard, "aaaa");
            this.currentCard.classList.remove("move-right");
            yield this.await(0.1);
            this.currentCard.classList.add("move-right");
            // await this.await(0.1);
            // await this.await(1);
            const randomIndex = this.generateRandomIndex();
            this.leftCards[randomIndex].classList.add("move-right");
            // console.log(this.leftCards[randomIndex]);
            yield this.await(1.1);
            // console.dir(this.cardsNode);
            // console.log(this.cardsNode);
            // console.log(this.cardsNode.children[1]);
            // console.dir(this.cardsNode);
            if (this.cardsNode.children.length > 1) {
                console.log(this.cardsNode.children.length);
                this.cardsNode.removeChild(this.cardsNode.children[1]);
            }
            // await this.await(1);
            // this.currentCard.classList.remove("move-right");
            // this.currentCard.classList.remove("move-right-2");
            // this.leftCards[randomIndex].classList.remove("move-right");
            this.currentCard.classList.add("move-back");
            // console.log(this.cardsNode);
            console.log(this.currentCard);
            this.currentCard = this.leftCards[randomIndex];
            console.log(this.currentCard);
            // if ((this.currentCard.dataset.checked = "false")) {
            //   this.leftCards.push(this.currentCard);
            // }
            this.leftCards = this.leftCards.filter((card) => {
                return card.dataset.checked === "false" && card !== this.currentCard;
            });
            // console.log(this.cardsNode);
        });
    }
    checkTheCard() {
        this.currentCard.dataset.checked = "true";
    }
    await(sec) {
        return new Promise(function (res) {
            setTimeout(res, sec * 1000);
        });
    }
}
