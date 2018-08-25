import { Component, OnInit } from '@angular/core';
import employees from '../employee';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  salary = 0;
  employees = employees;
  constructor() { }

  ngOnInit() {
  }

  addEmployee(event)  {
    this.employees.push({name: this.name, salary: this.salary});
    console.log(this.employees);
  }

}
