import { Component, OnInit } from '@angular/core';
import { KidsService } from '../services/kids.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public kidsService: KidsService,
  ) {}

  ngOnInit() {
    this.kidsService.load();
  }

}
