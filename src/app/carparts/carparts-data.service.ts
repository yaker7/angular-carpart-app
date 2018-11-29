import {Injectable} from '@angular/core';
import {CARPARTS} from './mocks';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarPart} from './car-part';

@Injectable({
  providedIn: 'root'
})
export class CarpartsDataService {

  constructor(private httpclient: HttpClient) {
    console.log('CarPartDataService constructor called');
  }

  // getCarParts() {
  //   return CARPARTS;
  // }

  getCarParts(): Observable<any> {
    return this.httpclient.get('assets/car-part.json', {responseType: 'json'});
    }

    getCarPartsPromise(): Promise<CarPart[]> {
    /*
      // @ts-ignore
      return this.httpclient.get('assets/car-part.json')
        .toPromise()
        .then(res => res['data'])
        .catch(err => console.log('Error Occured', err));
        */
      // @ts-ignore
      return this.httpclient.get('http://localhost:52274/data.json')
        .toPromise()
        .then(res => res['data'])
        .catch(err => console.log('Error Occured', err));
    }
  }
