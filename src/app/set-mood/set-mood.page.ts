import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-set-mood',
  templateUrl: './set-mood.page.html',
  styleUrls: ['./set-mood.page.scss'],
})
export class SetMoodPage implements OnInit {

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    
  }

  async dismissModal() {
    const result: Date = new Date();
    
    await this.modalController.dismiss(result);
  }

}
