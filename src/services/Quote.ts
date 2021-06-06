
export default class Quote {
  public id: number;
  public text: string;
  public author: string;

  constructor(id: number, text: string, author: string) {
    this.id = id;
    this.text = text;
    this.author = author;
  }
}
