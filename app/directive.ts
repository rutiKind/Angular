import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Trip } from '/app/classes/Trip';

@Directive({
  selector: '[appHighlightOrder]'
})
export class directive implements OnInit {
  @Input('appHighlightOrder') orderedTrips: Trip[] = [];

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.highlightOrderedTrips();
  }

  private highlightOrderedTrips(): void {
    const tripCards = this.el.nativeElement.getElementsByClassName('trip-card');
    for (let i = 0; i < tripCards.length; i++) {
      const tripCard = tripCards[i];
      const tripId = tripCard.getAttribute('data-trip-id');
      if (tripId && this.isTripOrdered(+tripId)) {
        tripCard.style.backgroundColor = 'yellow'; // Change the background color to your desired color
      }
    }
  }

  private isTripOrdered(tripId: number): boolean {
    return this.orderedTrips.some(trip => trip.tripId === tripId);
  }
}