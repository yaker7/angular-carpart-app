import { Component, OnInit } from '@angular/core';
import {Race} from './race';
import {RaceDataService} from './race-data.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[];
  heading = 'Ultra Racing Schedule';
  cash = 10000;
  constructor(private raceDataService: RaceDataService) { }

  ngOnInit() {
    // @ts-ignore
    this.raceDataService.getRaces()
        .pipe(
        catchError(err => {
          console.log('Error Occured', err);
          return throwError(err);
        })
      )
      .subscribe(response => this.races = response['racesData'],
        err => { alert(err.statusText);
          console.log('HTTP Error Occured', err); },
        () => console.log('HTTP Request Completed'));
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (const race of this.races) {
        if (race.isRacing) { sum += race.entryFee; }
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert('You don\'t have enough cash');
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }

}
