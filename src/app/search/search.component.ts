import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryService } from '../repository.service';
import { Repository } from '../repository';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [RepositoryService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  repository: Repository;
  result: any;
  repoArray = [];

  getRepos(reposearch) {
    const searchVal = reposearch.value;
    const link = 'https://api.github.com/users/' + searchVal + '/repos';
console.log(link)
    this.http.get(link).subscribe((item) => {
      this.result = item;
      console.log(this.result);

      for (let i = 0; i < this.result.length; i++) {
        this.repoArray.push(this.result[i]);
        console.log(this.repoArray);

      }
    });
  }

  constructor(private http: HttpClient, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.repoRequest();
    this.repository = this.repositoryService.repository;

  }

}


