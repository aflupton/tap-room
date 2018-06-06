import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cafe and Tap Room';
  address = '600 1st Ave, Seattle, WA 98104';
  website = 'http://www.uberbier.com/';
  userName = 'Andrew';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  kegs: Keg[] = [
    new Keg('Evil Twin', 'Molotov Lite', 'Imperial IPA', 8.5, 5),
    new Keg('Unibroue', 'La Fin du Monde', 'Belgian Tripel', 9, 7),
    new Keg('Pabst Brewing Company', 'Rainier', 'American Macro Lager', 4.5, 3.5)
  ];
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  };
  finishedEditing() {
    this.selectedKeg = null;
  };
  priceColor(currentKeg) {
    if (currentKeg.beerPrice < 5) {
      return "bg-primary";
    } else if ( currentKeg.beerPrice === 5) {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  }
}
