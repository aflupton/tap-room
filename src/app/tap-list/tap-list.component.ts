import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() childKegs: Keg[];
  // @Output() clickSender = new EventEmitter();
  selectedKeg = null;
  showForm = null;
  newKeg: Keg[] = [];

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
      return "bg-light";
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
      this.childKegs.splice(this.childKegs.indexOf(clickedKeg), 1);
    } else {
      clickedKeg.pintsLeft--;
    }
  };
  filterByEmptinessness: string = "partialKegs";
  onChange(optionFromMenu) {
    this.filterByEmptinessness = optionFromMenu;
  };
  toggleDone(clickedKeg: Keg, setEmptiness: boolean) {
    clickedKeg.done = setEmptiness;
  }
}
