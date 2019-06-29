import { Component, OnInit } from '@angular/core';
import {KidsService} from '../services/kids.service';

@Component({
  selector: 'app-add-kid',
  templateUrl: './add-kid.page.html',
  styleUrls: ['./add-kid.page.scss'],
})
export class AddKidPage implements OnInit {
 

  constructor(
    private kidsService: KidsService
  ) { }

  ngOnInit() {
   // this.kidsService.load();
  }

  addKid(){
    co
    this.addKid(kidname);
  }



}
