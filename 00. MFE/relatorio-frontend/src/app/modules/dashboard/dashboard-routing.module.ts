import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Relatório - Dashboard',
    component: DashboardPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
