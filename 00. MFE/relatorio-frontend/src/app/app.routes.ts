import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'vendedores',
    loadChildren: () => import('./modules/vendedores/vendedores.module').then(m => m.VendedoresModule)
  },
  {
    path: 'clientes-ativos',
    loadChildren: () => import('./modules/clientes-ativos/clientes-ativos.module').then(m => m.ClientesAtivosModule)
  },
  {
    path: '**',
    redirectTo: '/',
  }
];
