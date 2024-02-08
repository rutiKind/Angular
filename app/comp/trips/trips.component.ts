import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/classes/Trip';
import { TypeTrip } from 'src/app/classes/TypeTrip';
import { TripsService } from 'src/app/service/trips.service';
import { TypeTripService } from 'src/app/service/type-trip.service';



@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent implements OnInit{

  

  ngOnInit(): void {
    //כל הטיולים
    this.tripService.getTrips().subscribe(
      succ => {
        this.allTrips = succ.filter(x => this.compareDates(x.dateTrip!,this.d1));
        console.log(this.allTrips);
        debugger;
        this.allTrips2 = this.allTrips;
      },
      err=>{console.log(err)}
    )
    console.log(this.allTrips);
    //כל סוגי הטיולים
    this.typeTripService.getAllTypeTripP().subscribe(
      succ=>{this.allTypeTrip=succ;
        
      },
      err=>{console.log(err)}
      )
    }
    
  constructor(private router: Router,private tripService: TripsService,private typeTripService:TypeTripService) { }
  allTrips:Array<Trip>=new Array<Trip>()
  allTrips2:Array<Trip>=new Array<Trip>()
  filteredTrips:Array<Trip>=new Array<Trip>()

  allTypeTrip:Array<TypeTrip>=new Array<TypeTrip>()
  d1=new Date();


  //השוואת תאריכים
  compareDates(date1: Date, date2: Date): boolean {
    debugger
    const date3 = new Date(date1);
    if (date3 < date2) {
      return false
    } else  
      return true;
  }
  //פרטי הטיול
  details(tripId:number){
    debugger
  this.router.navigate(['/TripDetails',tripId]);
}

//סינון לפי סוג טיול
filterTrips(event: any) {
  debugger
  this.allTrips=this.allTrips2
  const selectedValue = event.source.value;
  var type = this.allTypeTrip.find(x => x.typeName === selectedValue);
  var typeId=type?.typeId
  console.log(typeId);
  this.allTrips=this.allTrips.filter(x=>x.typeId==type!.typeId)
  console.log(this.allTypeTrip);
}
}
