import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data-service.service';
import { ObService } from './ob-service.service';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ArticleComponent } from './article/article.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PaginatorComponent,
    ArticleComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    ObService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
