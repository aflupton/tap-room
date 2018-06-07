import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegs: Keg[] = [
    new Keg (
      124,
      'Evil Twin',
      'Brooklyn, NY',
      'Molotov Lite',
      'Imperial IPA',
      8.5,
      5
    ),
    new Keg (
      124,
      'Unibroue',
      'Chambly, QC',
      'La Fin du Monde',
      'Belgian Tripel',
      9,
      7
    ),
    new Keg (
      124,
      'Pabst Brewing Company',
      'Los Angeles',
      'Rainier',
      'American Macro Lager',
      4.5,
      3.5
    ),
    new Keg (
      124,
      'Ruebens Brews',
      'Seattle',
      'Gose',
      'Gose',
      4.3,
      5
    )
  ];
  selectedKeg = null;
  newKeg: Keg [] = null;
  showForm = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  };
  finishedEditing() {
    this.selectedKeg = null;
  };
  addKeg(newKeg: Keg) {
    this.showForm = newKeg;
    this.masterKegs.push(newKeg);
    this.newKeg = [];
    this.showForm = null;
  };
  finishedAdding(clickedKeg) {

  };
}
