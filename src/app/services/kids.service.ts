import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Kid } from '../interfaces/kid';
import { Plan } from '../interfaces/plan';


const {
  Storage
} = Plugins;
@Injectable({
  providedIn: 'root'
})
export class KidsService {



  public kids: Kid[] = [];
  public loaded = false;
  public planz: Plan[] = [];

  constructor() {}

  async load() {
    const ret = await Storage.get({
      key: 'kids'
    });
    if (ret.value != null) {
      console.log(ret.value);
      if (ret.value) {
        this.kids = JSON.parse(ret.value);
        console.log(this.kids);
      }

    }
    this.loaded = true;
  }


  createPlan(name, date, kidId): void {

    const oKid = this.kids.filter(kid => kid.id === kidId)[0];
    this.planz = oKid.planz;
    const id = Math.max(...this.planz.map(plan => parseInt(plan.id)), 0) + 1;

    this.planz.push({
      id: id.toString(),
      name,
      photo: 'assets/emotions/neutral.png',
      date,
      taskz:[]

    });

    this.save();



  }


  createKid(name): void {

    // Create a unique id that is one larger than the current largest id
    const id = Math.max(...this.kids.map(kid => parseInt(kid.id)), 0) + 1;

    this.kids.push({
      id: id.toString(),
      name,
      photo: 'assets/monsters/' + Math.floor(Math.random() * (11 - 1 + 1) + 1) + '.png',
      planz: []
    });

    this.save();

  }

  getPlan(kid_id: string, plan_Id): Plan {
    return this.kids
      .find(kid => kid.id === kid_id)
      .planz.find(plan => plan.id === plan_Id);
  }

  getKid(id: string): Kid {
    return this.kids.find(kid => kid.id === id);
  }

  async save(): Promise < void > {

    await Storage.set({
      key: 'kids',
      value: JSON.stringify(this.kids)
    });

  }

  deletePlan(kid_id: string, plan: Plan): void {
    // Get the index in the array of the note that was passed in

    const index = this.kids
    .find(kid => kid.id === kid_id)
    .planz.indexOf(plan);

   

    // Delete that element of the array and resave the data
    if (index > -1) {
       this.kids
      .find(kid => kid.id === kid_id)
      .planz.splice(index, 1);
       this.save();
    }
  }

  deleteKid(kid: Kid): void {
    // Get the index in the array of the note that was passed in
    const index = this.kids.indexOf(kid);

    // Delete that element of the array and resave the data
    if (index > -1) {
      this.kids.splice(index, 1);
      this.save();
    }
  }

}
