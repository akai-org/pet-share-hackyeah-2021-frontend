export class Item {
  public name: string;

  public category: string;

  public date: Date;

  public image: string;

  constructor(name: string, category: string, date: Date, image: string) {
    this.name = name;
    this.category = category;
    this.date = date;
    this.image = image;
  }
}
