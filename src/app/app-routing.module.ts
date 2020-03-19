import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './modules/dashboard/components';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  {path: '', redirectTo: '/main-dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'main-dashboard', component: MainDashboardComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
