import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGithubComponent } from './my-github/my-github.component';
import { UserServiceService } from '../app/user-service.service';
import {RepositoryService} from '../app/repository.service';


@NgModule({
  declarations: [
    AppComponent,
    MyGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
