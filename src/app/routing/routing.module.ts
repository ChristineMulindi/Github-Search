import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MyGithubComponent } from '../my-github/my-github.component';
import {SearchComponent} from '../search/search.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  { path: 'my-github', component: MyGithubComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/my-github', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
