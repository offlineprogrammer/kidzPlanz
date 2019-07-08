import { Component, OnInit } from '@angular/core';
import {Kid} from '../interfaces/kid';
import { ActivatedRoute } from '@angular/router';
import {
  KidsService
} from '../services/kids.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kid-info',
  templateUrl: './kid-info.page.html',
  styleUrls: ['./kid-info.page.scss'],
})
export class KidInfoPage implements OnInit {
  private kid: Kid;

  constructor(  private route: ActivatedRoute,private kidsService: KidsService, private navCtrl: NavController,) {
    this.kid = {
      id: '',
      name: '',
      photo: '',

    };
   }

  ngOnInit() {
    let kidId = this.route.snapshot.paramMap.get('id');
    if (this.kidsService.loaded) {
      this.kid = this.kidsService.getKid(kidId);
    } else {
      this.kidsService.load().then(() => {
        this.kid = this.kidsService.getKid(kidId);
      });
    }
  }


  deleteKid() {
    this.kidsService.deleteKid(this.kid);
    this.navCtrl.navigateBack("/home");
  }

}
