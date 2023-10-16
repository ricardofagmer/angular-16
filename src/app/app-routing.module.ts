import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./components/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./components/directives/directives.component').then((m) => m.DirectivesComponent),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./components/reusable-forms/reusable-forms.component').then((m) => m.ReusableFormsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
