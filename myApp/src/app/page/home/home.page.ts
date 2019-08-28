import { Component, OnInit } from '@angular/core';
import { HogeQuery } from 'src/app/query/hoge-query';
import { HogeStore } from 'src/app/store/hoge-store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private hogeQuery: HogeQuery, private hogeStore: HogeStore) {}
  ngOnInit() {
    console.log(this.hogeQuery);
    console.log(this.hogeStore);
  }
}
