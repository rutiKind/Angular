import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invitation } from 'src/app/classes/Invitation';
import { Trip } from 'src/app/classes/Trip';
import { UsersServiceService } from 'src/app/service/Users-service.service';
import { InvitationService } from 'src/app/service/invitation.service';
import { TripsService } from 'src/app/service/trips.service';
import { Time } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trip-datails',
  templateUrl: './trip-datails.component.html',
  styleUrls: ['./trip-datails.component.css']
})
export class TripDatailsComponent implements OnInit {
  ngOnInit(): void {
    debugger
    this.tripId = this.router.snapshot.params['tripId']!;
    this.tripService.getTripsById(this.tripId).subscribe(
      succ => {
        this.trip = succ; console.log(this.trip);
      },
      err => { console.log(err) }
    )
    //this.trip = this.tripService.getTripsById(this.tripId);
    console.log(this.trip);

  };
  trip: any;
  tripId!: number;
  place!: number;

  ttt: number = 5;
  constructor(private router: ActivatedRoute, private tripService: TripsService, private userService: UsersServiceService, private invationService: InvitationService) { };

  i1 = new Invitation();

  //הוספת הזמנה
  save() {
    debugger
    if(!this.userService.currentUser.userPassword){
    alert("To add an order you must first log in")
    return;
    }
    debugger
    this.i1.tripId = this.trip.tripId;
    this.i1.destination = this.trip.destinationTrip;
    this.i1.numPlace = this.place
    this.i1.userId = this.userService.currentUser.userId
    this.i1.name=this.userService.currentUser.userFirstName
    console.log(this.i1);

    //שליחה להוספת הזמנה
    this.invationService.addInvation(this.i1).subscribe(
      succ => {
       console.log(succ); this.trip.freePlace!-=this.i1.numPlace!
       Swal.fire({
        icon: 'success',
        title: `The order has been received`,
        titleText:`hello  ${this.userService.currentUser.userFirstName} `,
        text: `Booked ${this.i1.numPlace} places`,
        confirmButtonText: 'OK'
      });
      },
      err => { console.log(err) }
    )
  }

  toOrder2:boolean=true;
  toOrder: boolean = false;

  //סגירת הדיב להוספת הזמנה
  close() {
    debugger
    this.toOrder = !this.toOrder;
  }

  //פתיחת הדיב להוספת הזמנה
  open() {
    debugger
    this.toOrder = !this.toOrder
    this.toOrder2=!this.toOrder2
  }

}

