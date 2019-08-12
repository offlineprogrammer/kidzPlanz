import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { KidsService } from '../services/kids.service';

@Component({
  selector: 'app-set-mood',
  templateUrl: './set-mood.page.html',
  styleUrls: ['./set-mood.page.scss'],
})
export class SetMoodPage implements OnInit {

  public planMoods: string[];

  constructor(private modalController: ModalController,private kidsService: KidsService) { }

  ngOnInit() {
    if (this.kidsService.loaded) {
      this.planMoods = this.kidsService.getMoods();
    } else {
      this.kidsService.load().then(() => {
        this.planMoods = this.kidsService.getMoods();
      });
    }
  }

  ionViewWillEnter() {
    
  }

  async setPlanMood(planMood) {

    
    await this.modalController.dismiss(planMood);
  }


  async dismissModal() {
    const result: boolean = false;

    
    await this.modalController.dismiss(result);
  }

}
