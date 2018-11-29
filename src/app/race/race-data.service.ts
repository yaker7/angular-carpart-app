import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceDataService {
  constructor(private httpclient: HttpClient) {
    console.log('RaceDataService constructor called');
  }

  getRaces(): Observable<any> {
    return this.httpclient.get('assets/races.json', {responseType: 'json'});
  }
}
