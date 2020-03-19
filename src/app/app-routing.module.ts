import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './modules/dashboard/components';

const routes: Routes = [
  {path: '', redirectTo: '/main-dashboard', pathMatch: 'full'},
  {path: 'main-dashboard', component: MainDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
