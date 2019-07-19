import { Component, OnInit } from '@angular/core';
import {Plan} from '../interfaces/plan';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from '../services/kids.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.page.html',
  styleUrls: ['./plan-info.page.scss'],
})
export class PlanInfoPage implements OnInit {

  private plan: Plan;
  private kid_Id: string;
  private plan_Id: string;

  constructor( private route: ActivatedRoute, private kidsService: KidsService, private navCtrl: NavController) {
    this.plan = {
      id: '',
      name: ''
    };
   }

  ngOnInit() {
    this.kid_Id = this.route.snapshot.paramMap.get("kid_id");
    this.plan_Id = this.route.snapshot.paramMap.get("plan_id");
  }

  goBack() {
    this.navCtrl.navigateBack('kid-info/'+this.kid_Id);
  }

}
