import {
  Component,
  OnInit
} from '@angular/core';
import {
  Plan
} from '../interfaces/plan';
import {
  ActivatedRoute
} from '@angular/router';
import {
  KidsService
} from '../services/kids.service';
import {
  NavController,
  AlertController,
  ModalController
} from '@ionic/angular';
import {
  SetMoodPage
} from '../set-mood/set-mood.page';
import {
  OverlayEventDetail
} from '@ionic/core';
import {
  Task
} from '../interfaces/task';
import { SetRewardPage } from '../set-reward/set-reward.page';



@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.page.html',
  styleUrls: ['./plan-info.page.scss'],
})
export class PlanInfoPage implements OnInit {

  public plan: Plan;
  public kid_Id: string;
  public plan_Id: string;

  constructor(
    private route: ActivatedRoute,
    private kidsService: KidsService,
    private navCtrl: NavController,
    private alertController: AlertController,
    public modalController: ModalController) {
    this.plan = {
      id: '',
      name: '',
      date: null,
      photo: null,
      reward:null,
      bComplete: false,
      taskz: []
    };
  }

  ngOnInit() {
    this.kid_Id = this.route.snapshot.params.kid_id;
    this.plan_Id = this.route.snapshot.params.plan_id;
    if (this.kidsService.loaded) {
      this.kidsService.getPlan(this.kid_Id, this.plan_Id).then((result) => {

        this.plan = result;

      });

    } else {
      this.kidsService.load().then(() => {
        this.kidsService.getPlan(this.kid_Id, this.plan_Id).then((result) => {

          this.plan = result;

        });
      });
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SetMoodPage
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
        if (detail.data !== false) {
          this.plan.photo = detail.data;
          this.kidsService.setPlanMood(this.kid_Id, this.plan);
        }
      }
    });
    return await modal.present();
  }

  async setReward() {
    const modal = await this.modalController.create({
      component: SetRewardPage
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
        if (detail.data !== false) {
          this.plan.photo = detail.data;
          this.kidsService.setPlanMood(this.kid_Id, this.plan);
        }
      }
    });
    return await modal.present();
  }

  deletePlan() {
    this.kidsService.deletePlan(this.kid_Id, this.plan);
    this.goBack();
  }

  goBack() {
    this.navCtrl.navigateBack('kid-info/' + this.kid_Id);
  }

 




  async addTask() {
    const alert = await this.alertController.create({
      header: 'New Task!',
      message: 'Add A New Task',
      inputs: [{
        name: 'taskName',
        type: 'text',
        placeholder: 'Task Name'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Add',
        handler: data => {
          console.log('Confirm Ok');
          this.kidsService.createTask(this.kid_Id, this.plan, data.taskName);
        }
      }]
    });

    await alert.present();
  }

  async checkEvent(task: Task) {
    this.kidsService.updateTask(this.kid_Id, this.plan.id, task);

  }


}
