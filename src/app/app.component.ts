import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeModel } from './employee.model';
import { EmpDetailsService } from "./emp-details.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  // // Employee Form Validation
  // constructor(private fb: FormBuilder, private empDetailsService:EmpDetailsService, private router: Router){}
  // empDetails = this.fb.group({
  //   name:['',[Validators.pattern('^[A-Z][A-Za-z\\s]*$'), Validators.required]],
  //   position:['', Validators.required],
  //   officeLocation:['', Validators.required],
  //   salary:['', [Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'), Validators.required]]
  // })
// Employee Form Validation
constructor(private empDetailsService:EmpDetailsService, private router: Router) { }
empDetails= {
    name :'',
    position:'',
    officeLocation:'',
    salary:'',
   }
 


  employee: EmployeeModel[] =[]; 

  AddDetails(){
    this.empDetailsService.newDetails(this.empDetails);
    console.log("Called");
    alert("New Employee added sucessfully");
    // this.router.navigate(['/']);
    
  }
}
