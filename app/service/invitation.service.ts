import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation } from '../classes/Invitation';
import { UsersServiceService } from './Users-service.service';
const apiIn = "https://localhost:7228/api/Invitation/getAll"

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient, private userService: UsersServiceService) { }

  //כל ההזמנות
  getAllInvation(): Observable<Invitation[]> {
    debugger
    return this.http.get<Invitation[]>(apiIn);
  }

  //הוספת הזמנה
  addInvation(invitation: Invitation): Observable<boolean> {
    debugger
    console.log(invitation);
    return this.http.post<any>("https://localhost:7228/api/Invitation/addAsync", invitation)
  }

  //מחיקת הזמנה
  delete(tripId:number,userId:number):Observable<boolean>{
    debugger
    let params=new HttpParams
    params=params.set('tripId',tripId)
    params=params.set('userId',userId)
    return this.http.delete<boolean>(`https://localhost:7228/api/Invitation/delete`,{params});
  }
 
}
