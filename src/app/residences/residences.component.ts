import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences = [
    { id: 1, name: 'Residence A', status: 'Disponible', address: '123 Main St', image: 'assets/images/res1.jpg' },
    { id: 2, name: 'Residence B', status: 'Vendu', address: '456 Elm St', image: 'assets/images/res2.jpg' },
    { id: 3, name: 'Residence C', status: 'En Construction', address: '789 Oak St', image: 'assets/images/res3.jpg' }
  ];

  constructor(private router: Router) {}

  showLocation(address: string) {
    alert('Residence Location: ' + address);
  }

  addToFavorites(residence: any) {
    console.log('Added to favorites:', residence);
  }

  viewDetails(residence: any) {
    this.router.navigate(['/residences', residence.id]);
  }
}
