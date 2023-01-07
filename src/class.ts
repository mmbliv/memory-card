export class Memory {
  public data: { name: string; content: string; answer: string }[];
  public cardsNode: HTMLDivElement;
  public currentCard: HTMLDivElement;
  public leftCards: HTMLDivElement[];
  public rightCards: HTMLDivElement[];
  public cards: HTMLDivElement[];
  public leftNode: HTMLDivElement;
  public rightNode: HTMLDivElement;
  public currentNode: HTMLDivElement;
  constructor(
    data: { name: string; content: string; answer: string }[],
    cardsNode: HTMLDivElement,
    leftNode: HTMLDivElement,
    rightNode: HTMLDivElement,
    currentNode: HTMLDivElement
  ) {
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
  buildCardHTML(name: string, content: string, answer: string) {
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
    this.currentNode.appendChild(this.cards[0]);
    return this.cards;
  }
  moveRight() {
    this.cardsNode.classList.add("move-right");
  }
}
