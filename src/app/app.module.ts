import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Service } from '../assets/Service';
import {SResultComponent} from './s-result/s-result.component'
import {MovieFilter} from '../assets/filter';
import {Filter} from '../assets/LangConFilter';
import {SortFilter} from '../assets/sort';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SResultComponent,
    MovieFilter,
    Filter,
    SortFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    
  ],
  providers: [Service,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
