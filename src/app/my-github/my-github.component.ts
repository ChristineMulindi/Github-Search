import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  providers: [UserServiceService],
  styleUrls: ['./my-github.component.css']
})
export class MyGithubComponent implements OnInit {

  user: User;
  result: any;
  userArray = [];


  getUser(usersearch) {
    const searchVal = usersearch.value;
    const link = 'https://api.github.com/search/users?q=' + searchVal;

    console.log(link);

    this.http.get(link).subscribe((item) => {
      this.result = item;
      console.log(this.result);

      for (let i = 0; i < this.result['items'].length; i++) {
        this.userArray.push(this.result['items'][i]);
        console.log(this.userArray)
      
      }

    });
  }



  constructor(private http: HttpClient, private userService: UserServiceService) {

  }

  ngOnInit() {
    this.userService.userRequest();
    this.user = this.userService.user;

  }
}
