import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class UserServiceService {

  user: User;
  newUser: any;



  constructor(private http: HttpClient) {
    this.user = new User('', 0, '', '');
    console.log('works');
  }

  userRequest() {


    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      bio: string;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.user.login = response.login;
        this.user.id = response.id;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        console.log(this.user);

        resolve();
      },

        error => {
          alert(error);
          reject(error);
        }
      );
    });
    return promise;
  }
}
