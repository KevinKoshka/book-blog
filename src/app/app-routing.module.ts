import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: '', redirectTo: '/articles/0000a', pathMatch: 'full' },
  { path: 'articles', component: BookComponent, children: [
    { path: ':id', component: ArticleComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
