import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesDetailComponent } from './pages/articles-detail/articles-detail.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
