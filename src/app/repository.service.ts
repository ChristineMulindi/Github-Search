import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repository: Repository;
  newRepo: any;


  constructor(private http: HttpClient) {
    this.repository = new Repository('', 0, '', '');
    console.log('works');
  }


  repoRequest() {
    interface ApiResponse {
      name: string;
      id: number;
      html_url: string;
      description: string;
    }

    const promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(

        (response) => {
          this.repository.name = response.name;
          this.repository.id = response.id;
          this.repository.html_url = response.html_url;
          this.repository.description = response.description;
          console.log(this.repository);
          resolve();

          },
          (error) => {
            alert('error');
            reject(error);
          }
      );
    });

    return promise;
  }
}


