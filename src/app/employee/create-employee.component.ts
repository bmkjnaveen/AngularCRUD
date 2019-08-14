import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Departments} from '../models/department.model';
import { from } from 'rxjs';
import {ListEmployeeService} from '../employee/employee.service';
import {Router}from '@angular/router';
import { Employee } from '../models/employee.model';
@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  isActive=true;
  gender="Male";
  department="Account";
  departments:Departments[]=[
    {id:1,name:'HR'},
    {id:2,name:'IT'},
    {id:3,name:"Account"},
    {id:4,name:'Help Desk'},
    {id:5,name:'Admin'},
    {id:6,name:'Security'},

    
];
employee:Employee={
  id:null,
  name:null,
  gender:null,
 phoneNumber:null,
 email:null,
 ContactPrefreance:null,
 dateOfBirth:null,
 department:null,
 isActive:null,
 photoPath:null,

};
  constructor(private _listEmpService :ListEmployeeService,
              private _router:Router) { }

  ngOnInit() {
  }

  saveEmployee():void{
    if (this.employee.gender=="Male")
        this.employee.photoPath="assets/images/naveen.png";
        else 
        this.employee.photoPath="assets/images/anjali.jpg";
    this._listEmpService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }
}
