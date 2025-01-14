import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HighlightDirective } from './partial/directives/highlight.directive';
import { TooltipDirective } from './partial/directives/tooltip.directive';
import { DateFormatPipe } from './partial/pipes/date-format.pipe';
import { CurrencyFormatPipe } from './partial/pipes/currency-format.pipe';
import { SearchFilterPipe } from './partial/pipes/search-filter.pipe'; 
import { PartialModule } from "./partial/partial.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TooltipDirective,
    DateFormatPipe,
    CurrencyFormatPipe,
    SearchFilterPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialModule,
    BrowserAnimationsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
