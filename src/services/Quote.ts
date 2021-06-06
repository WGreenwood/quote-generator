// https://quote-garden.herokuapp.com/api/v3/quotes/random

export default class Quote {
  public id: number;
  public text: string;
  public author: string;
  public genre: string;

  constructor(id: number, text: string, author: string, genre: string = "") {
    this.id = id;
    this.text = text;
    this.author = author;
    this.genre = genre;
  }
}
