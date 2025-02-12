import { Component } from '@angular/core';
import { Residence } from '../Core/models/residence';





@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  
  styleUrls: ['./residences.component.css']

})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  showLocation(address: string) {
    if (address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert("Adresse: " + address);
    }
  }
  favorites: Residence[] = [];

addToFavorites(residence: Residence) {
  this.favorites.push(residence);
  alert(residence.name + " ajouté aux favoris !");
}





  
}
