import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  residences = [
    { id: 1, name: 'Residence A', status: 'Available', address: '123 Main St', description: 'A cozy residence' },
    { id: 2, name: 'Residence B', status: 'Occupied', address: '456 Elm St', description: 'Spacious and modern' },
    { id: 3, name: 'Residence C', status: 'Under Construction', address: '789 Oak St', description: 'Great location' },
  ];
}
