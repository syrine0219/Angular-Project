import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence: any;

  // Get the list from ResidencesComponent
  residences = [
    { id: 1, name: 'Residence A', status: 'Available', address: '123 Main St', description: 'A cozy residence' },
    { id: 2, name: 'Residence B', status: 'Occupied', address: '456 Elm St', description: 'Spacious and modern' },
    { id: 3, name: 'Residence C', status: 'Under Construction', address: '789 Oak St', description: 'Great location' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.residenceId = +params['id']; // Convert string ID to number
      this.residence = this.residences.find(r => r.id === this.residenceId);

      // Redirect if residence is not found
      if (!this.residence) {
        this.router.navigate(['/residences']);
      }
    });
  }
}
