import { Time } from "@angular/common";

export class Trip{
  constructor(public tripId:number,public destinationTrip?:string, public typeId?:number,public dateTrip?:Date,
    public timeGoing?:Time,public durationTrip?:number,public freePlace?:number,public price?:number,public pic?:string){

  };  
}