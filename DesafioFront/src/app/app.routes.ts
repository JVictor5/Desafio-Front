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
      {
        path: 'tela3',
        title: 'Tela3',
        loadComponent: () =>
          import('./Pag/tela3/tela3.component').then((b) => b.Tela3Component),
      },
    ],
  },
];
