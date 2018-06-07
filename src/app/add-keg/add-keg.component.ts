import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showForm = null;
  newKeg: Keg[] = [];
  @Input() childKegs: Keg[];
  @Output() sendKeg = new EventEmitter();
  //add a new keg
  showAddForm(clickedKeg) {
    this.showForm = clickedKeg;
  };
  submitForm(pintsLeft: number, breweryName: string, breweryLocation: string, beerName: string, beerStyle: string, beerAbv: number, beerPrice: number) {
    let newKeg: Keg = new Keg(pintsLeft, breweryName, breweryLocation, beerName, beerStyle, beerAbv, beerPrice);
    this.sendKeg.emit(newKeg);
    this.showForm = null;
    console.log(this.newKeg);
  }
}
