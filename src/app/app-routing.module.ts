import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**routas propias */
import { ArticleRoutingModule } from './article/article.routing';

const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./article/article.module').then(am => am.ArticleModule)
    },
    {
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes),
    ArticleRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
