import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-reusable-forms',
  templateUrl: './reusable-forms.component.html',
  styleUrls: ['./reusable-forms.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AddressComponent]
})
export class ReusableFormsComponent {

}
