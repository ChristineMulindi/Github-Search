import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repository: Repository;
  result: any;

  constructor(private http: HttpClient) {
    this.repository = new Repository('', 0, '', '');
  }

  repoRequest() {
    const repos = 'https://api.github.com/users/christine/repos';


    this.http.get(repos).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    });
  }
}

