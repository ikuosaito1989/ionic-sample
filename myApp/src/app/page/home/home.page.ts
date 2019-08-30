import { Component, OnInit } from '@angular/core';
import { HogeUsecase } from 'src/app/usecase/hoge-usecase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private usecase: HogeUsecase) {}
  ngOnInit() {
    this.usecase.init();
  }
}
