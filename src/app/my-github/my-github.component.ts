import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  providers: [UserServiceService, RepositoryService],
  styleUrls: ['./my-github.component.css']
})
export class MyGithubComponent implements OnInit {

  user: User;
  repository: Repository;

  // result: any;

  // getRepos() {
  //    const repos = 'https://api.github.com/users/christine/repos';


  //    this.http.get(repos).subscribe((data) => {
  //      this.result = data;
  //      console.log(this.result);
  //    });
  //  }

  constructor(private http: HttpClient, private userService: UserServiceService, private repositoryService: RepositoryService) {

  }

  ngOnInit() {
    this.userService.userRequest();
    this.user = this.userService.user;
    this.repositoryService.repoRequest();
    this.repository = this.repositoryService.repository;

  }
}
