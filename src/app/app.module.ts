import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './crud.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RestApiService } from './rest-api.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DemocompComponent } from './democomp/democomp.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { DemoArijitComponent } from './demo-arijit/demo-arijit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    LoginComponent,
    HomeComponent,
    DemocompComponent,
    DemoAppComponent,
    DemoArijitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
