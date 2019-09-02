import {
  Injectable
} from '@angular/core';
import {
  Plugins
} from '@capacitor/core';
import {
  Kid
} from '../interfaces/kid';
import {
  Plan
} from '../interfaces/plan';
import {
  Task
} from '../interfaces/task';
import { promise } from 'protractor';


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
      reward: 'assets/emotions/neutral.png',
      date,
      bComplete: false,
      taskz: []

    });

    this.save();



  }

  getMoods(): string[] {
    const planMoods: any = ['assets/emotions/angry.png',
      'assets/emotions/crazy.png',
      'assets/emotions/crying.png',
      'assets/emotions/happy.png',
      'assets/emotions/neutral.png',
      'assets/emotions/sad.png'
    ];
    return planMoods;
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

  async getPlan(kid_id: string, plan_Id): Promise<Plan> {
    return this.kids
      .find(kid => kid.id === kid_id)
      .planz.find(plan => plan.id === plan_Id);
  }

  async getKid(id: string): Promise<Kid> {
    return this.kids.find(kid => kid.id === id);
  }

  async save(): Promise < void > {

    await Storage.set({
      key: 'kids',
      value: JSON.stringify(this.kids)
    });

  }

  deletePlan(kid_id: string, plan: Plan): void {
    const index = this.kids
      .find(kid => kid.id === kid_id)
      .planz.indexOf(plan);
    if (index > -1) {
      this.kids
        .find(kid => kid.id === kid_id)
        .planz.splice(index, 1);
      this.save();
    }
  }

  setPlanMood(kid_id: string, plan: Plan): void {
    this.kids.find(kid => kid.id === kid_id).planz.find(nplan => nplan.id === plan.id).photo = plan.photo;
    this.save();
  }

  createTask(kid_Id: string, plan: Plan, taskName: string): void {
    const id = Math.max(...plan.taskz.map(task => parseInt(task.id)), 0) + 1;
    const bComplete = false;
    this.kids
      .filter(kid => kid.id === kid_Id)[0]
      .planz.filter(oPlan => oPlan.id === plan.id)[0]
      .taskz.push({
        id: id.toString(),
        name: taskName,
        bComplete
      });

    this.save();
  }

  updateTask(kid_Id: string, plan_Id: string, task: Task): void {
    this.kids
      .filter(kid => kid.id === kid_Id)[0]
      .planz.filter(oPlan => oPlan.id === plan_Id)[0]
      .taskz.filter(oTask => oTask.id === task.id)[0].bComplete = task.bComplete;

    const oNotCompleteTask = this.kids
      .filter(kid => kid.id === kid_Id)[0]
      .planz.filter(oPlan => oPlan.id === plan_Id)[0]
      .taskz.filter(oTask => oTask.bComplete === false);

    if (oNotCompleteTask.length > 0) {
      console.log(oNotCompleteTask);
      this.kids
          .filter(kid => kid.id === kid_Id)[0]
          .planz.filter(oPlan => oPlan.id === plan_Id)[0].bComplete = false;
    } else {
        console.log('All done');
        this.kids
          .filter(kid => kid.id === kid_Id)[0]
          .planz.filter(oPlan => oPlan.id === plan_Id)[0].bComplete = true;
      }


    this.save();
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