import { Component } from '@angular/core';
import { HideAfterDirective } from 'src/app/directives/hide-after.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  standalone: true,
  imports: [HideAfterDirective],
})
export class DirectivesComponent {}
