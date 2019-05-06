import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGithubComponent } from './my-github/my-github.component';
import { UserServiceService } from '../app/user-service.service';
import {RepositoryService} from '../app/repository.service';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import { DateAgoPipe } from './date-ago.pipe';

const routes: Routes = [
  { path: 'app', component: AppComponent},
  { path: 'my-github', component: MyGithubComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/my-github', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MyGithubComponent,
    SearchComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [UserServiceService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
