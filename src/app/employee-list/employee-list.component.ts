import { Component, OnInit } from '@angular/core';
import employees from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = employees;

  constructor() { }

  ngOnInit() {
  }

  getSalaryCollor(employee) {
    return employee.salary > 2000 ? 'green' : 'red';
  }

  removeEmploye(id) {
    employees.splice(id, 1);
  }

}
