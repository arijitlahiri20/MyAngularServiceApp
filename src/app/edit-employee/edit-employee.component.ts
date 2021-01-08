import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empData: any = {};
  
  constructor(public rest: RestApiService,
    public actRoute: ActivatedRoute, 
    public router:Router) { }

  id = this.actRoute.snapshot.params['id']; 
  ngOnInit() {
    this.rest.getEmployeeById(this.id)
    .subscribe((data : {}) => {
        this.empData = data;
    })

    console.log("ID : "+this.id);
    //console.log("Data : "+JSON.stringify(this.empData));
  }

  updateEmployee(){
    if(window.confirm('Are you sure, you want to update?')){
      //alert(JSON.stringify(this.empData));
      this.rest.updateEmployee(this.id,this.empData)
      .subscribe(data => {
        this.router.navigate(['/list-employee'])
      });
      
    }
  }
}
