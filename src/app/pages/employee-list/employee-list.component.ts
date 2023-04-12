import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})

export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];
  errorMsg: string = "";

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe({
      next: (data: IEmployee[]) => {
        this.employees = data;
      },
      error: (error) => {
        this.errorMsg = error;
        console.error('An error occurred:', error);
      }
    });
  }
}
