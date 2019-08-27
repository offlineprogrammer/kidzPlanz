import { Component, OnInit } from '@angular/core';
import {Kid} from '../interfaces/kid';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from '../services/kids.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kid-info',
  templateUrl: './kid-info.page.html',
  styleUrls: ['./kid-info.page.scss'],
})
export class KidInfoPage implements OnInit {
  public kid: Kid;
  public mykidId: string;

  constructor(  public route: ActivatedRoute, private kidsService: KidsService, private navCtrl: NavController, ) {
    this.kid = {
      id: '',
      name: '',
      photo: '',
      planz: []

    };
   }

  ngOnInit() {
    this.mykidId = this.route.snapshot.params.id;
    if (this.kidsService.loaded) {
      this.kidsService.getKid(this.mykidId).then((result) => {

        this.kid = result;

      });
    } else {
      this.kidsService.load().then(() => {
        this.kidsService.getKid(this.mykidId).then((result) => {

          this.kid = result;
  
        });
      });
    }
  }


  deleteKid() {
    this.kidsService.deleteKid(this.kid);
    this.navCtrl.navigateBack('/home');
  }

}
