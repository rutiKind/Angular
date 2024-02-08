import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invitation } from 'src/app/classes/Invitation';
import { Trip } from 'src/app/classes/Trip';
import { TypeTrip } from 'src/app/classes/TypeTrip';
import { UsersServiceService } from 'src/app/service/Users-service.service';
import { InvitationService } from 'src/app/service/invitation.service';
import { TripsService } from 'src/app/service/trips.service';
import { TypeTripService } from 'src/app/service/type-trip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {

    //שליפת כל הטיולים של הלקוח המחובר
    this.userService.getAllMyTrip(this.userService.currentUser.userId!).subscribe(
      succ=>{this.allMyTrip=succ;
      console.log(this.allMyTrip);this.allMyTrip2=this.allMyTrip},
      err=>{console.log(err);}
    )
    
    //שליפת כל סוגי הטיולים
    this.typeTripService.getAllTypeTripP().subscribe(
      succ=>{this.allTypeTrip=succ;console.log(this.allTypeTrip);},
      err=>{console.log(err);}
    )

  }
  constructor(private userService: UsersServiceService,private typeTripService:TypeTripService,private router:Router,private invinationService: InvitationService) { }
  allMyTrip:Array<Trip>=new Array<Trip>;
  allMyTrip2:Array<Trip>=new Array<Trip>
  allTypeTrip:Array<TypeTrip>=new Array<TypeTrip>()

 
//פרטי הטיול
  details(tripId:number){
    debugger
  this.router.navigate(['/TripDetails',tripId]);
}

// סינון לפי סוג טיול
filterTrips(event: any) {
  debugger
  this.allMyTrip=this.allMyTrip2
  const selectedValue = event.source.value;
  var type = this.allTypeTrip.find(x => x.typeName === selectedValue);
  var typeId=type?.typeId
  console.log(typeId);
  this.allMyTrip=this.allMyTrip.filter(x=>x.typeId==type!.typeId)
  console.log(this.allTypeTrip);
}


//סינון לפי תאריך
date1:Date=new Date();
filterDate(event:any){
  debugger
  this.allMyTrip=this.allMyTrip2
  if(event.source.value=="1"){
  console.log(this.date1);
  this.allMyTrip=this.allMyTrip.filter(x=>this.compareDates(x.dateTrip!,this.date1))}
  else{
    this.allMyTrip=this.allMyTrip.filter(x=>this.compareDates(x.dateTrip!,this.date1)==false)
  }
}

//השוואת תאריכים
compareDates(date1: Date, date2: Date): boolean {
  debugger
  const date3 = new Date(date1);
  if (date3 < date2) {
    return false
  } else  
    return true;
}


//מיון לפי מחירים
sortPrice(event:any){
 this.allMyTrip=this.allMyTrip2
 if(event.source.value=="1")
   this.allMyTrip=this.allMyTrip.sort((a:Trip,b:Trip)=>a.price!-b.price!)
else
this.allMyTrip=this.allMyTrip.sort((a:Trip,b:Trip)=>b.price!-a.price!)

}
allInvination:Array<Invitation>=new Array<Invitation>
i1:Invitation=new Invitation;
invanitionId:any

//ביטול הזמנה
delete(tripId:number){
  debugger
this.invinationService.delete(tripId,this.userService.currentUser.userId!).subscribe(
  succ=>{console.log("succed");
  this.allMyTrip=this.allMyTrip.filter(x=>x.tripId!=tripId);
  this.allMyTrip2=this.allMyTrip;
  Swal.fire({
    icon: 'success',
    title: `cancel reservation`,
    text: 'The order was successfully cancelled',
    confirmButtonText: 'OK'
  });
  console.log(this.allMyTrip);
  
},
err=>{console.log(err);
}
)
}
}


