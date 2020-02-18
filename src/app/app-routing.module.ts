import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ArticlesComponent} from './articles/articles.component';
import {StylePageComponent} from './style-page/style-page.component';
import {SpecificStyleComponent} from './specific-style/specific-style.component';
import {SubscribeComponent} from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'articles', component: ArticlesComponent},
  { path: 'styles', component: StylePageComponent},
  { path: 'styles/:style', component: SpecificStyleComponent},
  { path: 'subscribe', component: SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
