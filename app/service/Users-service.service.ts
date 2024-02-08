import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../classes/Person';
import { Trip } from '../classes/Trip';
import { useAnimation } from '@angular/animations';

const apiUrl = "https://localhost:7228/api"

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }


  //הוספת משתמש
  addUser(user: Person): Observable<boolean> {
   // debugger
    console.log("succedd")
    console.log(user);
      return this.http.post<boolean>(`https://localhost:7228/api/User/addUserAsync`, user );
  }

  //בדיקה לפי מייל וסיסמא האם הלקוח קיים
  checkLogin(email: string, password: string):Observable<any> {
    console.log("i am in the getBy...");
    let params = new HttpParams();
    params = params.set('email', email);
    params = params.set('password', password)
    return this.http.get<any>(`https://localhost:7228/api/User/getByMailAndPaswordAsync`, { params });
  }

  //כל המשתמשים
getAllUser():Observable<Array<Person>>
{
  return this.http.get<Array<Person>>('https://localhost:7228/api/User')
}

//עידכון משתמש
updateUser(user:Person):Observable<boolean>{
  return this.http.patch<boolean>("https://localhost:7228/api/User/updateUser",user)
}

//קבלת כל הטוילם למשתמש
getAllMyTrip(userId:number):Observable<Array<Trip>>
{
  debugger
  let params = new HttpParams();
  params = params.set('userId', userId);
  return this.http.get<any>(`https://localhost:7228/api/User/GetAllTripToUser`, { params });
}

//מחיקת משתמש
deleteUser(userId:number):Observable<boolean>{
  debugger
  let params=new HttpParams()
  params=params.set('userId',userId)
  return this.http.delete<boolean>(`https://localhost:7228/api/User/deleteUser/${userId}`)
}

//משתמש נוכחי
currentUser=new Person();

//מנהל 
manager=new Person();


}


