import {OnInit} from '@angular/core';
import {CarPart} from './car-part';

export const CARPARTS: CarPart[] = [
  {
    'id': 1,
    'name': 'Super Tires',
    'description': 'These tires are the very best',
    'inStock': 5,
    'price': 50000,
  },
  {
    'id': 2,
    'name': 'Reinforced Shocks',
    'description': 'Shocks made from kryptonite',
    'inStock': 4,
    'price': 150000,
  },
  {
    'id': 3,
    'name': 'Padded Seats',
    'description': 'Super soft seats for a smooth ride',
    'inStock': 0,
    'price': 240000,
  }
];

