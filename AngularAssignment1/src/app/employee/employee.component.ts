import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
 public qualification:string[];
 public experience:string[];
 public languages:any[];
 //public tformGroupDaa:FormGroup;
 public selectedlanguage:string;
 public employee:Employee;
    display()
    {
      let employeeData:any="";
      employeeData+="First Name:"+this.employee.firstName+"\n";
      employeeData+="Last Name:"+this.employee.lastName+"\n";
      employeeData+="Email Address:"+this.employee.email+"\n";
      employeeData+="Contact No.:"+this.employee.contact+"\n"
      employeeData+="Address:"+this.employee.address+"\n";
      employeeData+="User Name:"+this.employee.userName+"\n";
      employeeData+="Password:"+this.employee.password+"\n";
      employeeData+="Gender:"+this.employee.gender+"\n"
      employeeData+="Qualification:"+this.employee.qualification+"\n";
      employeeData+="Experience:"+this.employee.experience+"\n";

      let selectedlanguages="Coding Language:";
      for(var i=0;i<this.employee.IsEnabled.length;i++)
      {
        if(this.employee.IsEnabled[i])
        {
          selectedlanguages+=this.languages[i]+" ";
        }
      }
      console.log(employeeData+""+selectedlanguages);
     
      this.employee=new Employee();
    }

  constructor() { }

  ngOnInit() {
   this.qualification=["CE","IT","MCA","MBA"];
   this.experience=["0 Yr","1 Yr","2 Yrs","3 Yrs"];
   this.languages=["C/C++","Java","C#","PHP","Python"];
                
   this.employee=new Employee();
  }

}
