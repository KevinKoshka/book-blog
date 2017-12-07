import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data-service.service';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PaginatorComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
