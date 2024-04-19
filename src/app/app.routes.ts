import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: ContentComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'details/:name',
    component: DetailsComponent,
    data: { animation: 'DetailsPage' },
  },
];
