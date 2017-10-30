import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ArticleListComponent} from "./news/article-list/article-list.component";
import {RegisterComponent} from "./users/register/register.component";
import {LoginComponent} from "./users/login/login.component";
import {ArticleCreateComponent} from './news/article-create/article-create.component';
import {ArticleDetailsComponent} from './news/article-details/article-details.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent },
  {path: 'users/register', component: RegisterComponent },
  {path: 'users/login', component: LoginComponent },
  {path: 'article/create', component: ArticleCreateComponent },
  {path: 'article/detailed/:id', component: ArticleDetailsComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}

