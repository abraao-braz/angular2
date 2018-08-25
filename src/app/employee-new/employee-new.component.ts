import { Component, OnInit } from '@angular/core';
import employees from '../employee';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name:string = 'Abraão Braz';
  employees = [];
  
  constructor() { }

  ngOnInit() {
  }

  addEmployee(event)
  {
    console.log(event);
    this.employees.push(this.name);
    console.log(this.employees);
  }

}
