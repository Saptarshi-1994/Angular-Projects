import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  @Input() deliveryList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
