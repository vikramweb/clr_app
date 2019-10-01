import { Routes, RouterModule } from '@angular/router';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { GridModalComponent } from './components/grid-modal/grid-modal.component';

const routes: Routes = [
  { path: 'grid-data', component: GridDataComponent },
  { path: 'grid-modal', component: GridModalComponent }
  // { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

export const MyRouteRoutes = RouterModule.forChild(routes);
