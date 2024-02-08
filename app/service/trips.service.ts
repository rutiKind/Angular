import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../classes/Trip';
import { Observable } from 'rxjs';
const apiUrl="https://localhost:7228/api/Trip/getAllTrip"

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  //כל הטיולים
  getTrips(): Observable<Array<Trip>> {
    console.log("succedd")
    return this.http.get<Array<Trip>>(apiUrl
    );
  }

  //קבלת טיול לפי קוד 
  getTripsById(tripId: number): Observable<Trip> {
    let params = new HttpParams();
    params = params.set('tripId', tripId);
    return this.http.get<Trip>(`https://localhost:7228/api/Trip/getById/${tripId}`);
  }
  
}
