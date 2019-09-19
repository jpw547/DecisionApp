import { Component, OnInit } from '@angular/core';

export class Restaurant {
  name: string;
  description: string;
  price: number;
}
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  redFlipped = false;
  blueFlipped = false;
  yellowFlipped = false;

  baseList: Restaurant[] = [
    {
      name: 'McDonalds',
      description: 'A greasy fast food place.',
      price: 1
    },
    {
      name: 'Wendy\'s',
      description: 'A greasy fast food place with square burgers.',
      price: 1
    },
    {
      name: 'Chik-Fil-A',
      description: 'An also greasy fast food place that mostly sells chicken.',
      price: 2
    }
  ];
  winner: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
