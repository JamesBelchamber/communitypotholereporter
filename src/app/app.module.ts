import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MatToolbarModule,
			   MatButtonModule,
				 MatIconModule,
			   MatDialogModule,
				 MatInputModule,
				 MatFormFieldModule,
				 MatCardModule }            from '@angular/material';
import { AgmCoreModule }            from '@agm/core';
import { HttpClientModule }         from '@angular/common/http';

import { AppComponent }             from './app.component';
import { MapPickerComponent,
				 MapPickerConfirmDialog,
				 MapPickerHelpDialog,
				 MapPickerSizeDialog }      from './map-picker/map-picker';
import { ContactDetailsComponent,
         ContactDetailsHelpDialog } from './contact-details/contact-details';
import { AppRoutingModule }         from './app-routing.module';

@NgModule({
  declarations: [
		AppComponent,
		MapPickerComponent,
		MapPickerHelpDialog,
		MapPickerSizeDialog,
		MapPickerConfirmDialog,
		ContactDetailsComponent,
    ContactDetailsHelpDialog
  ],
	imports: [
    BrowserModule,
    BrowserAnimationsModule,
		MatToolbarModule,
	  MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		AppRoutingModule,
    AgmCoreModule.forRoot({
	    apiKey: 'AIzaSyDqKLrcXXQTB_ur0hux9qt848M1wQa4jAU'
		}),
		HttpClientModule
	],
	providers: [],
	entryComponents: [
		MapPickerHelpDialog,
		MapPickerSizeDialog,
		MapPickerConfirmDialog,
		ContactDetailsHelpDialog
	],
  bootstrap: [AppComponent]
})

export class AppModule { }
