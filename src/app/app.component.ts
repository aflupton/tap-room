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
  ownerName = 'Andrew';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  kegs: Keg[] = [
    new Keg(
      124,
      'Evil Twin',
      'Brooklyn, NY',
      'Molotov Lite',
      'Imperial IPA',
      8.5,
      5),
    new Keg(
      124,
      'Unibroue',
      'Chambly, QC',
      'La Fin du Monde',
      'Belgian Tripel',
      9,
      7),
    new Keg(
      124,
      'Pabst Brewing Company',
      'Los Angeles',
      'Rainier',
      'American Macro Lager',
      4.5,
      3.5)
  ];
  selectedKeg = null;
  // edit a clicked keg
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  };
  finishedEditing() {
    this.selectedKeg = null;
  };
  // colorize price values
  priceColor(currentKeg) {
    if (currentKeg.beerPrice < 5) {
      return "bg-dark";
    } else if ( currentKeg.beerPrice === 5) {
      return "bg-primary";
    } else {
      return "bg-info";
    }
  };
  // colorize abv values
  abvColor(currentKeg) {
    if (currentKeg.beerAbv <= 5.5) {
      return "bg-secondary";
    } else {
      return "bg-dark";
    }
  };
  // show a progressively colorized warning as a keg is emptied
  kegLevel(currentKeg) {
    if (currentKeg.pintsLeft === 0) {

    }  else if (currentKeg.pintsLeft <= 10) {
      return "bg-danger";
    } else if (currentKeg.pintsLeft <= 30) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  };
  // decrement a keg after each pint pour, and remove emptied kegs
  pourPint(clickedKeg) {
    if (clickedKeg.pintsLeft < 2) {
      alert("This keg is tapped.");
      this.kegs.splice(this.kegs.indexOf(clickedKeg), 1);
    } else {
      clickedKeg.pintsLeft--;
    }
  };
}
