import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule],
  viewProviders: [
    provide: ControlContainer,
    useFactory: () => {
      inject(ControlContainer, { skipSelf: true })
    }
  ]
})
export class AddressComponent {
  @Input() label = '';
  @Input({ required: true}) controlKey = '';

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('deliveryAddress',
    new FormGroup({
       zipCode: new FormControl(''),
       street: new FormControl(''),
    }))

  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl('deliveryAddress');
  }

}
