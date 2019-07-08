import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {Kid} from '../interfaces/kid';


const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class KidsService {



  public kids: Kid[] = [];
  public loaded: boolean = false;

  constructor() { }

  async load() {
    const ret = await Storage.get({ key: 'kids' });
    if (ret.value != null) {
      console.log(ret.value);
      this.kids = JSON.parse(ret.value);
      console.log(this.kids);
      
    }
    this.loaded = true;
  }
  

  

  createKid(name): void {

    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.kids.map(kid => parseInt(kid.id)), 0) + 1;

    this.kids.push({
      id: id.toString(),
      name,
      photo:  'assets/monsters/' + Math.floor(Math.random()*(11-1+1)+1) +'.png',
    });

    this.save();

  }

  getKid(id: string): Kid {
    return this.kids.find(kid => kid.id === id);
  }

  async save(): Promise<void> {
   
    await Storage.set({
      key: 'kids',
      value: JSON.stringify(this.kids)
    });

  }

}
