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
  public cards: HTMLDivElement[];
  public leftNode: HTMLDivElement;
  public totalCardsCountNode: HTMLSpanElement;
  public checkedCardsCountNode: HTMLSpanElement;
  public submit: HTMLInputElement;
  public inputTitle: HTMLInputElement;
  public inputContent: HTMLInputElement;
  public inputAnswer: HTMLInputElement;
  constructor(
    data: { name: string; content: string; answer: string; checked: boolean }[],
    cardsNode: HTMLDivElement,
    leftNode: HTMLDivElement,
    totalCardsCountNode: HTMLSpanElement,
    checkedCardsCountNode: HTMLSpanElement,
    submit: HTMLInputElement,
    inputTitle: HTMLInputElement,
    inputContent: HTMLInputElement,
    inputAnswer: HTMLInputElement
  ) {
    this.data = data;
    this.cardsNode = cardsNode;
    this.cards = [];
    this.currentCard = this.cards[0];
    this.leftCards = [];
    this.leftNode = leftNode;
    this.totalCardsCountNode = totalCardsCountNode;
    this.checkedCardsCountNode = checkedCardsCountNode;
    this.submit = submit;
    this.inputTitle = inputTitle;
    this.inputContent = inputContent;
    this.inputAnswer = inputAnswer;
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
  buildWrapper(name: string, content: string, answer: string) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card");
    wrapper.classList.add("left-card");
    wrapper.setAttribute("data-checked", "false");
    const html = this.buildCardHTML(name, content, answer);
    wrapper.innerHTML = html;
    this.cards.push(wrapper);
    this.leftNode.appendChild(wrapper);
  }
  buildCards() {
    this.data.forEach((d) => {
      // const wrapper = document.createElement("div");
      // wrapper.classList.add("card");
      // wrapper.classList.add("left-card");
      // wrapper.setAttribute("data-checked", "false");
      // const html = this.buildCardHTML(d.name, d.content, d.answer);
      // wrapper.innerHTML = html;
      // this.cards.push(wrapper);
      //   this.cardsNode.appendChild(wrapper);
      this.buildWrapper(d.name, d.content, d.answer);
    });
    // console.log(this.cardsNode);
    this.leftCards = this.cards;
    // this.leftCards.forEach((card) => {
    //   this.leftNode.appendChild(card);
    // });

    this.currentCard = this.leftCards[0];
    this.currentCard.classList.add("m-a");
    this.showTotalCardsCount();
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
    // console.log(this.currentCard);
    this.currentCard.children[1].classList.remove("show");
    this.currentCard.classList.remove("m-a");
    this.currentCard.classList.add("m-b");
    await this.await(0.2);

    // await this.await(0.5);
    const randomIndex = this.generateRandomIndex();
    // this.leftCards[randomIndex].classList.add("move-right");
    // console.log(this.leftCards);
    this.leftCards[randomIndex].classList.add("m-a");

    this.currentCard.classList.remove("m-b");
    if (this.cardsNode.children.length > 1) {
      console.log(this.cardsNode.children.length);
      this.cardsNode.removeChild(this.cardsNode.children[1]);
    }

    // console.log(this.currentCard);
    this.currentCard = this.leftCards[randomIndex];
    console.log(this.currentCard, "ccccccc");
  }
  checkTheCard() {
    this.currentCard.dataset.checked = "true";
    this.leftCards = this.leftCards.filter((card) => {
      return card.dataset.checked === "false";
    });
    this.showCheckedCardsCount();
  }
  await(sec: number) {
    return new Promise(function (res) {
      setTimeout(res, sec * 1000);
    });
  }
  showAnswer() {
    this.currentCard.children[1].classList.add("show");
    // console.dir(this.currentCard);
  }
  showTotalCardsCount() {
    this.totalCardsCountNode.textContent = this.cards.length.toString();
  }
  showCheckedCardsCount() {
    this.checkedCardsCountNode.textContent = (
      this.cards.length - this.leftCards.length
    ).toString();
  }
  addCard(e: Event) {
    e.preventDefault();
    const title = this.inputTitle.value;
    const content = this.inputContent.value;
    const answer = this.inputAnswer.value;
    this.buildWrapper(title, content, answer);
    this.showTotalCardsCount();
  }
}
