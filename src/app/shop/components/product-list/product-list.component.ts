import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: string[] = ['Apple', 'Orange', 'Banana'];
  constructor() { }

  ngOnInit(): void {
  }

}
