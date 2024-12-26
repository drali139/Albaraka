import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss'],
})
export class CashComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}