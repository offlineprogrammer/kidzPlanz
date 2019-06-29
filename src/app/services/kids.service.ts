import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {Kid} from '../interfaces/kid';



@Injectable({
  providedIn: 'root'
})
export class KidsService {

  public kids: Kid[] = [];

  constructor() { }

  createKid(name): void {

    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.kids.map(kid => parseInt(kid.id)), 0) + 1;

    this.kids.push({
      id: id.toString(),
      name,
      photo: ''
    });

    this.save();

  }

  async save(): Promise<void> {
    const { Storage } = Plugins;
    await Storage.set({
      key: 'kids',
      value: JSON.stringify(this.kids)
    });

  }

}
