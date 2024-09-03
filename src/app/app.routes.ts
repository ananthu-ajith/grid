import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

export const routes: Routes = [
  {
    path: 'froala',
    component: FroalaComponent,
  },
  {
    path: 'grid',
    component: AgGridComponent,
  },
];
