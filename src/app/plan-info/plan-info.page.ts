import { Component, OnInit } from '@angular/core';
import {Plan} from '../interfaces/plan';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from '../services/kids.service';
import { NavController,AlertController,ModalController  } from '@ionic/angular';
import { SetMoodPage } from '../set-mood/set-mood.page';



@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.page.html',
  styleUrls: ['./plan-info.page.scss'],
})
export class PlanInfoPage implements OnInit {

  private plan: Plan;
  private kid_Id: string;
  private plan_Id: string;

  constructor(
    private route: ActivatedRoute,
    private kidsService: KidsService,
    private navCtrl: NavController,
    private  alertController: AlertController,
    private modalController: ModalController) {
    this.plan = {
      id: '',
      name: '',
      date: null,
      photo: null,
      taskz:[]
    };
   }

  ngOnInit() {
    this.kid_Id = this.route.snapshot.paramMap.get("kid_id");
    this.plan_Id = this.route.snapshot.paramMap.get("plan_id");
    if (this.kidsService.loaded) {
      this.plan = this.kidsService.getPlan(this.kid_Id,this.plan_Id);
    } else {
      this.kidsService.load().then(() => {
        this.plan = this.kidsService.getPlan(this.kid_Id,this.plan_Id);
      });
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SetMoodPage
    });
    return await modal.present();
  }

  deletePlan() {
    this.kidsService.deletePlan(this.kid_Id, this.plan);
    this.goBack();
  }

  goBack() {
    this.navCtrl.navigateBack('kid-info/'+this.kid_Id);
  }




  async addTask() {
    const alert = await this.alertController.create({
      header: 'New Task!',
      inputs: [
        {
          name: 'Task Name',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


}
