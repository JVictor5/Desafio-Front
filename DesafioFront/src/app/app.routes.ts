import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'DesafioFront',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Tela1',
        loadComponent: () =>
          import('./Pag/tela1/tela1.component').then((c) => c.Tela1Component),
      },
      {
        path: 'tela2',
        title: 'Tela2',
        loadComponent: () =>
          import('./Pag/tela2/tela2.component').then((d) => d.Tela2Component),
      },
    ],
  },
];
