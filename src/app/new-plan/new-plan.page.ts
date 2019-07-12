import {
  Component,
  OnInit,
} from '@angular/core';
import {  NavController } from '@ionic/angular';
import {
  KidsService
} from '../services/kids.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.page.html',
  styleUrls: ['./new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {

  public submitAttempt = false;
  public newPlanForm: FormGroup;

  constructor(
    private kidsService: KidsService,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
  ) {

    this.newPlanForm = formBuilder.group({
      kidname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]

    });

  }


  ngOnInit() {
  }

}
