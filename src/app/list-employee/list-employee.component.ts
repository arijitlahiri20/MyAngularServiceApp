import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  data:any=[];
  constructor(private rest: RestApiService,  public router:Router) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees(){
    this.rest.getEmployees().subscribe( (d : {}) => {
      this.data = d;
    });
  }

  deleteEmployee(id) {
    console.log("inside delete function with id="+id);
    this.rest.deleteEmployee(id)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

}
