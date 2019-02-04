import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add.component';


const routes: Routes = [
 
  { path:'employee-list', component:EmployeeListComponent },
  { path:'employee-add', component:EmployeeAddComponent },
  { path:'employee-edit/:firstName', component:EmployeeAddComponent },
  { path:'', redirectTo:'/employee-list',pathMatch:'full' },
  { path:'**',redirectTo:'/employee-list',pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
