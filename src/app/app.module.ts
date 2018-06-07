import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { HeaderComponent } from './header/header.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TapListComponent,
    EditKegComponent,
    AddKegComponent,
    HeaderComponent,
    EmptinessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
