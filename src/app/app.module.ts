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
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SplashComponent } from './splash/splash.component';
import { UtilitiesService } from  './utilities.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PaginatorComponent,
    ArticleComponent,
    BookComponent,
    NotFoundComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    DataService,
    ObService,
    UtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
