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
            const html = this.buildCardHTML(d.name, d.content, d.answer);
            wrapper.innerHTML = html;
            this.cards.push(wrapper);
            //   this.cardsNode.appendChild(wrapper);
        });
        // console.log(this.cardsNode);
        this.currentCard = this.cards[0];
        this.cardsNode.appendChild(this.cards[0]);
        return this.cards;
    }
    moveRight() {
        // this.cardsNode.classList.add("move-right");
        this.currentCard.classList.add("move-right");
    }
}
