import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KidsService } from '../services/kids.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.page.html',
  styleUrls: ['./new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {
  private kidId: string;

  public submitAttempt = false;
  public newPlanForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private kidsService: KidsService,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
  ) {

    this.newPlanForm = formBuilder.group({
      planname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      plandate:[]

    });

  }


  ngOnInit() {
    this.kidId = this.route.snapshot.paramMap.get('id');
  }

  addPlan() {
    this.submitAttempt = true;
    if (this.newPlanForm.valid){
    console.log('success!')
    console.log(this.newPlanForm.value);
    console.log(this.newPlanForm.controls.plandate.value);
    this.kidsService.createPlan(this.newPlanForm.controls.planname.value,this.newPlanForm.controls.plandate.value,this.kidId);
    this.navCtrl.navigateBack('/home');
       }
  }

}
