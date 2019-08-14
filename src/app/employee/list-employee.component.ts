import { Component, OnInit ,Input} from '@angular/core';
import {Employee} from '../models/employee.model'
import { ListEmployeeService } from './employee.service';
@Component({
  
  templateUrl:'./list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees:Employee[]; 
  constructor(private _employeeService:ListEmployeeService) {
   }
  ngOnInit() {
    this.employees=this._employeeService.getEmployeeList();
  }

}
