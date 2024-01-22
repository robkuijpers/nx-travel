import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CapitalizePipe, TravelService, Trip } from '@nx-travel/travel-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-travel-overview',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, NgFor, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class OverviewComponent implements OnInit {

  // private
  #travelService = inject(TravelService);

  //clientId: string | null = null;

  trips$!: Observable<Trip[]>;

  //trips = signal(<Trip[]>[]);
  selectedTripId = signal(0); // 0 = no trip selected

  // Router input
  @Input()
  clientId!: string | null;

  // set clientId(clientId: string) {
  //   this.#clientId = clientId;
  // }

  ngOnInit(): void {
    this.trips$ = this.#travelService.list(this.clientId);
    //const trips = toSignal(trips$, { initialValue: [] as Trip[] });
  }

  onTripSelected(tripId: number): void {
    this.selectedTripId.set(tripId);
  }


  // Signals observable http   https://angular.io/guide/signals
  // Build in control flow  https://angular.io/guide/control_flow
  // Deferred view    https://angular.io/guide/defer
  // NGRX feature https://dev.to/this-is-angular/ngrx-feature-creator-2c72

}
