class Game  {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector ('.word');
    this.winsElement = container.querySelector ('.status__wins');
    this.lossElement = container.querySelector ('.status__loss');
    this.reset();

    this.registerEvents();
  }

  reset () {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.setNewWord();
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      let symbol = this.currentSymbol;
      if (symbol.textContent === event.key) {
        this.success();
      }
      else {
        this.fail();
      }
    });

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    this.wordElement.innerHTML = [...word]
        .map(
            (s, i) =>
                `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
        )
        .join('');

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');

    let string = Array.from(document.querySelectorAll('div.word span.symbol'));
    this.countdown = string.length;
    this.countdownElement = countdownElement;
    this.countdownElement.textContent = string.length.toString();
    this.counter();
  }

  counter() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown -= 1;
        this.countdownElement.textContent = this.countdown;
      }
      else {
        this.fail();
      }
    }, 1000);
  }
}

let countdownElement = document.getElementById('timer');
let countdown = parseInt(countdownElement.textContent);
let interval;

new Game(document.getElementById('game'));