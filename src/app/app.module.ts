import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HighlightDirective } from './partial/directives/highlight.directive';
import { TooltipDirective } from './partial/directives/tooltip.directive';
import { DateFormatPipe } from './partial/pipes/date-format.pipe';
import { CurrencyFormatPipe } from './partial/pipes/currency-format.pipe';
import { SearchFilterPipe } from './partial/pipes/search-filter.pipe';
import { ArticleComponent } from './pages/article/article.component';
import { KnowledgeBasedComponent } from './pages/knowledge-based/knowledge-based.component';
import { KnowledgeBasedModule } from './pages/knowledge-based/knowledge-based.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TooltipDirective,
    DateFormatPipe,
    CurrencyFormatPipe,
    SearchFilterPipe,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
