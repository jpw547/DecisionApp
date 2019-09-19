import { Component, OnInit } from '@angular/core';
import { ListItem } from '../food/food.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  redFlipped = false;
  blueFlipped = false;
  yellowFlipped = false;

  baseList: ListItem[] = [
    {
      name: 'Star Wars',
      description: 'A long time ago, in a galaxy far, far away...',
      price: 1
    },
    {
      name: 'Toy Story',
      description: 'An animated film about toys that come to life when humans aren\'t around.',
      price: 1
    },
    {
      name: 'Won\'t You Be My Neighbor?',
      description: 'A documentary about the life of Mr. Rogers.',
      price: 2
    }
  ];
  winner: ListItem;

  constructor() { }

  ngOnInit() {
  }
}
