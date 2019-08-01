import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { KidsService } from '../services/kids.service';

@Component({
  selector: 'app-set-mood',
  templateUrl: './set-mood.page.html',
  styleUrls: ['./set-mood.page.scss'],
})
export class SetMoodPage implements OnInit {

  private planMoods: string[];

  constructor(private modalController: ModalController,private kidsService: KidsService,
    private navParams: NavParams) { }

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

  async dismissModal() {
    const result: Date = new Date();
    
    await this.modalController.dismiss(result);
  }

}
