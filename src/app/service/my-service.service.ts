import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public http: HttpClient) {
  }

  getTodos(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
