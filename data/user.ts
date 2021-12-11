import { Item } from './item';

export class User {
  public name: string;

  public email: string;

  public image: string;

  public items: Item[];

  constructor(name: string, email: string, image: string, items: Item[]) {
    this.name = name;
    this.email = email;
    this.image = image;
    this.items = items;
  }
}
