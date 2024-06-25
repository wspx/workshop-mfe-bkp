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
    path: 'produtos',
    loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'segmentos',
    loadChildren: () => import('./modules/segmentos/segmentos.module').then(m => m.SegmentosModule)
  },
  {
    path: '**',
    redirectTo: '/',
  }
];
