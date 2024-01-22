import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-travel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent {

  #activatedRoute = inject(ActivatedRoute);

  // Router input
  @Input()
  id!: string;

  constructor() {
    // this.#activatedRoute.params.pipe(map((params) => {
    //   this.tripId = params['id'] as string;
    // })).subscribe();
  }

}
