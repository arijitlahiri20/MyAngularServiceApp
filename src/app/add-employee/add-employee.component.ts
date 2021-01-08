import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() empData = {name:'', email:'', phone:null};
  constructor(public rest:RestApiService, public router:Router) { }

  ngOnInit() {
  }

  AddEmployee(f){
    
    this.rest.createEmployee(this.empData)
    .subscribe((data : {}) => {
        this.router.navigate(['/list-employee'])
    });
  }

}
