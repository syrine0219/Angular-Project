import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  get formControls() {
    return this.residenceForm.controls;
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      console.log('Form Submitted', this.residenceForm.value);
      // Autres actions après soumission, comme un appel API
    }
  }
}
