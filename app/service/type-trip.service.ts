import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeTrip } from '../classes/TypeTrip';

@Injectable({
  providedIn: 'root'
})
export class TypeTripService {

  constructor(private http: HttpClient) { }

  //כל סוגי הטיולים
  getAllTypeTripP()
    : Observable<Array<TypeTrip>> {
      debugger
      console.log("succedd")
      return this.http.get<Array<TypeTrip>>("https://localhost:7228/api/TypeTrip/getAllTypeTrip"
      );
    }
  }

