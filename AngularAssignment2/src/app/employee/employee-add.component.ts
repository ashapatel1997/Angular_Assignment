import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { EmployeeListModule } from './employee-list.model';
import { ListService } from './list.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  public qualification:string[];
 public experience:string[];
public languages:any[];
public OK:boolean=true;
public selectedlanguage:string;
public submitType:string;
  employee:EmployeeListModule;
 @Output() sendData:EventEmitter<string>= new EventEmitter<string>();
  constructor(
    private _activatedroute:ActivatedRoute,
              private _router:Router,
              private _listService:ListService) { }

  ngOnInit() {
     this.qualification=["CE","IT","MCA","MBA"];
     this.experience=["0 Yr","1 Yr","2 Yrs","3 Yrs"];
     this.languages=["C/C++","Java","C#","PHP","Python"];
     this.submitType="Save";
    this.employee=new EmployeeListModule();
   
    //get name of employee
        this._activatedroute.paramMap.subscribe(e=>{
        const fName=e.get('firstName');
          if(fName)
              this.employee=this._listService.getEmployeeDetails(fName);
            });

  }

  
  saveEmployee()
  {
     this._listService.save(this.employee);
     this._router.navigate(['employee-list']);
  }

}
