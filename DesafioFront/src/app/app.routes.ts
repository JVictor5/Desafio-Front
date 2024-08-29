import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
    {
    path: '',
    title: 'DesafioFront',
    component: LayoutComponent,
    children: []
}
];
