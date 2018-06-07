import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() childSelectedKeg: Keg[];
  @Output() clickedDone = new EventEmitter();
  // edit a clicked keg
  editButtonClicked(kegToEdit: Keg) {
    this.clickedDone.emit(kegToEdit);
  };
  finishedEditing() {
    this.clickedDone.emit();
  }
}
