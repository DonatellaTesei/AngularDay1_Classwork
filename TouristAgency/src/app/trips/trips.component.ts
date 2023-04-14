import { Component } from '@angular/core';
import { trips } from '../trips';
import { Itrip } from '../Itrip';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
trips: Array<Itrip> = trips;
available: boolean = true;
trip: Itrip = {} as Itrip;
id: number = 0;


}
