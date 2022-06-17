import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'detail-bar',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.css']
})
export class DetailBarComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [];
  }

  ngOnInit(): void {

  }

}
