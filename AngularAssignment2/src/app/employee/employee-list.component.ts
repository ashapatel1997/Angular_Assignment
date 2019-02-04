import { Component, OnInit } from '@angular/core';
import { EmployeeListModule } from './employee-list.model';
import { ListService } from './list.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']

})
export class EmployeeListComponent implements OnInit {
   employee: EmployeeListModule[];
   public languages:any[];
   public submitType:string;
 
  constructor(private _listService:ListService,
              private _route:Router,
              private _activatedroute:ActivatedRoute){}

  ngOnInit() {
    this.employee=this._listService. getEmployee();
    this.languages=["C/C++","Java","C#","PHP","Python"];
  }

  deleteEmployee(name:string)
  {
    
    this._listService.deleteEmployee(name);
  }

    
        editEmployee(empName:string)
        {
      //const x=Object.assign({},this._listService.getEmployeename(empName));
          this._route.navigate(['employee-edit',empName]);
        
        }
    
  
}
