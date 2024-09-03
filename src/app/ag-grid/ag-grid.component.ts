import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css',
})
export class AgGridComponent {
  isBrowser = false;

  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Honda', model: 'Civic', price: 25150, electric: false },
    { make: 'Chevrolet', model: 'Bolt EV', price: 36620, electric: true },
    { make: 'Nissan', model: 'Leaf', price: 31200, electric: true },
    { make: 'BMW', model: 'i3', price: 44900, electric: true },
    { make: 'Audi', model: 'Q5', price: 51500, electric: false },
    { make: 'Mercedes-Benz', model: 'C-Class', price: 43200, electric: false },
    { make: 'Hyundai', model: 'Kona Electric', price: 38000, electric: true },
    { make: 'Kia', model: 'Soul EV', price: 39100, electric: true },
    { make: 'Volkswagen', model: 'ID.4', price: 43995, electric: true },
    { make: 'Mazda', model: 'CX-5', price: 28370, electric: false },
  ];

  pagin = 10;
  paginar = [5, 10, 15, 20];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    editable: true,
  };

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    {
      field: 'price',
      valueFormatter: (p) => 'Rs ' + p.value.toLocaleString(),
    },
    { field: 'electric' },
  ];
  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      this.isBrowser = true;
      this.cdr.detectChanges();
    });
  }
}
