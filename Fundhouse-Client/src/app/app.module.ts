import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { InputComponent } from './Components/input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OutputComponent } from './Components/output/output.component';
import { HistoryComponent } from './Components/history/history.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    OutputComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
