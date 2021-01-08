import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  //URL:string = "http://localhost:3000"; 
  URL:string = "http://localhost:8088/SpringREST"
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee>{
    //return this.http.get<Employee>(this.URL+"/employees");
    return this.http.get<Employee>(this.URL+"/findAll");
  }

  getEmployeeById(id:number):Observable<Employee>{
    // console.log(this.URL+"/employees/"+id);
    // return this.http.get<Employee>(this.URL+"/employees/"+id);
    console.log(this.URL+"/find/"+id);
    return this.http.get<Employee>(this.URL+"/find/"+id);
  }

  createEmployee(employee):Observable<Employee>{
    //return this.http.post<Employee>(this.URL+"/employees",employee);
    return this.http.post<Employee>(this.URL+"/process",employee);
  }

  updateEmployee(id,employee):Observable<Employee>{
    //return this.http.put<Employee>(this.URL+"/employees/"+id, employee);
    return this.http.put<Employee>(this.URL+"/update", employee);
  }

  deleteEmployee(id:number):Observable<Employee>{
    console.log(this.URL+"/delete/"+id);
    return this.http.delete<Employee>(this.URL+"/delete/"+id);
  }
}
