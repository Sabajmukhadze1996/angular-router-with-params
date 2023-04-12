import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './pages/department-overview/department-overview.component';
import { DepartmentContactComponent } from './pages/department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
