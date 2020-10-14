import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('test') t: string;
  constructor() { }

  ngOnInit(): void {
  }


}
