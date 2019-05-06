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
  repoArray: any;
  link: string;
  searchValue: string;
  getRepos(reposearch) {
    // this.searchVal = reposearch.nativeElement.value;

    this.link = 'https://api.github.com/users/' + reposearch.value + '/repos' + '?access_token=080c24e0209da811bc77c95dc1692cf7cb871de3';
    // console.log(link)
    this.http.get(this.link).subscribe((item) => {
      this.repoArray = item;
      console.log(this.result);

      // for (let i = 0; i < this.result.length; i++) {
      //   this.repoArray.push(this.result[i]);
      //   console.log(this.repoArray);

      // }
    });
  }

  constructor(private http: HttpClient, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.repoRequest();
    this.repository = this.repositoryService.repository;
    console.log(this.repository)
  }

}


