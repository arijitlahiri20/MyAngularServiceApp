import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiURL:string = "https://jsonplaceholder.typicode.com/posts/1/comments";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:  HttpClient) { 

  }

  showTask()  {
    return this.http.get(this.apiURL);
  }

  createTask(data): Observable<any> {
      let API_URL = this.apiURL+"/create-task";

      return this.http.post(API_URL, data);
  }

}
