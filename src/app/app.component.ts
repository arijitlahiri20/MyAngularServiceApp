import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyAngularServiceApp';

  constructor(private crudService: CrudService){

  }

  ngOnInit(){
    console.log("Data : " + JSON.stringify(this.crudService.showTask()));
    //this.crudService.showTask();
  }
}
