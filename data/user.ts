import { Item } from './item';

export class User {
  public username: string;

  public profilePicture: string;

  public rating: number;

  public localization: string;

  public items: Item[];

  constructor(username: string, profilePicture: string, rating: number, localization: string, items: Item[]) {
    this.username = username;
    this.profilePicture = profilePicture;
    this.rating = rating;
    this.localization = localization;
    this.items = items;
  }
}
