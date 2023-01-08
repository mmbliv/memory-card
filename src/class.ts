export class Memory {
  public data: {
    name: string;
    content: string;
    answer: string;
    checked: boolean;
  }[];
  public cardsNode: HTMLDivElement;
  public currentCard: HTMLDivElement;
  public leftCards: HTMLDivElement[];
  public rightCards: HTMLDivElement[];
  public cards: HTMLDivElement[];
  public leftNode: HTMLDivElement;
  public rightNode: HTMLDivElement;
  public currentNode: HTMLDivElement;
  public checked: boolean;
  public currentCardData: {
    name: string;
    content: string;
    answer: string;
    checked: boolean;
  };
  constructor(
    data: { name: string; content: string; answer: string; checked: boolean }[],
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
    this.checked = false;
    this.currentCardData = this.data[0];
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
      wrapper.setAttribute("data-checked", "false");
      const html = this.buildCardHTML(d.name, d.content, d.answer);
      wrapper.innerHTML = html;
      this.cards.push(wrapper);
      //   this.cardsNode.appendChild(wrapper);
    });
    // console.log(this.cardsNode);
    this.leftCards = this.cards;
    this.leftCards.forEach((card) => {
      card.classList.add("left-card");
      this.leftNode.appendChild(card);
    });

    this.currentCard = this.leftCards[0];
    this.currentCard.classList.add("m-a");
    console.log(this.leftCards);
    // this.cardsNode.appendChild(this.cards[0]);
    return this.cards;
  }
  generateRandomIndex() {
    const length = this.leftCards.length;
    // console.log(length);
    return Math.floor(Math.random() * length);
  }
  appendNodeToLeft(node: HTMLDivElement) {
    this.leftNode.append(node);
  }
  async moveRight() {
    // this.cardsNode.classList.add("move-right");
    // this.currentCard.classList.remove("move-right");
    // await this.await(0.1);
    // this.currentCard.classList.remove("move-right");
    // await this.await(0.1);
    // console.log(this.currentCard, "aaaa");
    // this.currentCard.classList.remove("move-right");
    // await this.await(0.1);
    // this.currentCard.classList.remove("m-b");
    // this.currentCard.classList.remove("m-a");
    // this.currentCard.classList.add("move-right");
    // await this.await(0.1);
    this.currentCard.classList.remove("m-a");
    this.currentCard.classList.add("m-b");
    await this.await(0.2);

    // await this.await(0.5);
    const randomIndex = this.generateRandomIndex();
    // this.leftCards[randomIndex].classList.add("move-right");
    console.log(this.leftCards);
    this.leftCards[randomIndex].classList.add("m-a");

    this.currentCard.classList.remove("m-b");
    if (this.cardsNode.children.length > 1) {
      console.log(this.cardsNode.children.length);
      this.cardsNode.removeChild(this.cardsNode.children[1]);
    }
    // await this.await(1);
    // this.currentCard.classList.remove("move-right");
    // this.currentCard.classList.remove("move-right-2");
    // this.leftCards[randomIndex].classList.remove("m-a");
    // this.currentCard.classList.add("move-back");
    // console.log(this.cardsNode);
    console.log(this.currentCard);
    this.currentCard = this.leftCards[randomIndex];
    console.log(this.currentCard);
    // if ((this.currentCard.dataset.checked = "false")) {
    //   this.leftCards.push(this.currentCard);
    // }
    this.leftCards = this.leftCards.filter((card) => {
      return card.dataset.checked === "false";
    });
    // console.log(this.cardsNode);
  }
  checkTheCard() {
    this.currentCard.dataset.checked = "true";
  }
  await(sec: number) {
    return new Promise(function (res) {
      setTimeout(res, sec * 1000);
    });
  }
}
