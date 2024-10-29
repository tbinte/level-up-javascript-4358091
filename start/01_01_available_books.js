class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock"
    } else if (this.numCopies < 10) {
      return "Low stock"
    } else {
      return "In Stock"
    }
  }
  
  sell(numSold = 1) {
      if (this.numCopies >= numSold) {
        this.numCopies -=  numSold;
      } else {
        this.numCopies = 0;
      }
  }
  
  restock(numCopies = 5) {
      this.numCopies += numCopies;
  }
}

const hungerGames = new Book("HungerGames", "Ich", "1223234234", 5);
console.log(hungerGames);
hungerGames.sell(10);
console.log(hungerGames.availability);
console.log(hungerGames);

