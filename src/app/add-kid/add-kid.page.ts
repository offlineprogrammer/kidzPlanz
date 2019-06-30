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
  selector: 'app-add-kid',
  templateUrl: './add-kid.page.html',
  styleUrls: ['./add-kid.page.scss'],
})
export class AddKidPage implements OnInit {

  public submitAttempt = false;
  public addKidForm: FormGroup;

  constructor(
    private kidsService: KidsService,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
  ) {

    this.addKidForm = formBuilder.group({
      kidname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]

    });

  }

  ngOnInit() {
    // this.kidsService.load();
  }

  addKid() {
    this.submitAttempt = true;
    if (this.addKidForm.valid){
    console.log('success!')
    console.log(this.addKidForm.value);
    console.log(this.addKidForm.controls.kidname.value);
    this.kidsService.createKid(this.addKidForm.controls.kidname.value);
    this.navCtrl.navigateBack('/home');
       }
  }



}