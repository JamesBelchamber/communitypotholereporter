import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { MapPickerComponent }      from './map-picker/map-picker'
import { ContactDetailsComponent } from './contact-details/contact-details'

const routes: Routes = [
	{ path: '', redirectTo: '/place-a-pin', pathMatch: 'full' },
	{ path: 'place-a-pin', component: MapPickerComponent },
  { path: 'provide-contact-details', component: ContactDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
