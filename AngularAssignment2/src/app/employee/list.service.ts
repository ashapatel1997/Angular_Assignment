import { Injectable } from '@angular/core';
import {EmployeeListModule} from './employee-list.model';
import { EmployeeAddComponent } from './employee-add.component';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listEmployee:EmployeeListModule[]=[
    {
      firstName:"Asha",
      lastName:"Patel",
      email:"puashu123@gmail.com",
       contact:9979327525,
       address:"Bharuch",
       userName:"ashu",
       password:"ashu",
      gender:"Female",
     qualification:"IT",
    experience:"0 Yr",
     IsEnabled:[false,true,true,false,false]
    },
    {
      firstName:"Megha",
      lastName:"Patel",
      email:"megha@gmail.com",
       contact:9426284427,
       address:"Bharuch",
       userName:"ashu",
       password:"ashu",
      gender:"Female",
    qualification:"CE",
    experience:"0 Yr",
    IsEnabled:[true,true,true,true,true]
    },
    
  ];

  getEmployee():EmployeeListModule[]
  {
    return this.listEmployee;
  }

  getEmployeename(name:string):EmployeeListModule
  {
    return this.listEmployee.find(e => e.firstName==name);
  }
 indexOfName:number=-1;
  getEmployeeDetails(fName:string)
  {
    
     this.indexOfName=this.listEmployee.findIndex(e=>e.firstName==fName);
    return this.listEmployee[this.indexOfName];
  }
  save(employee:EmployeeListModule)
  {
    if(this.indexOfName!=-1)
    {
      this.listEmployee[this.indexOfName]=employee;
    }
    else
    {
      this.listEmployee.push(employee);;
    }
  
  }

  deleteEmployee(name:string)
  {
    const index=this.listEmployee.findIndex(e => e.firstName===name);
    this.listEmployee.splice(index,1);
  }

  constructor() { }
}
