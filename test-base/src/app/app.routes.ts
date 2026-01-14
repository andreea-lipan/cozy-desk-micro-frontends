import {Routes} from '@angular/router';
import {HomeComponent} from './home-component/home-component';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'home-page',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // The Micro Frontends
  {
    path: 'tea-tracker',
    loadComponent: () => loadRemoteModule('tea-tracker', './App').then((m) => m.App),
  },
  {
    path: 'sticky-notes',
    loadComponent: () => loadRemoteModule('sticky-notes', './App').then((m) => m.App),
  },
];

