import { Component, Inject }      from '@angular/core';
import { Router }         from '@angular/router';
import { MatDialog,
			 	 MatDialogRef,
         MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient,
         HttpHeaders }    from '@angular/common/http';

@Component({
  selector: 'map-picker',
  templateUrl: './map-picker.html',
  styleUrls: ['./map-picker.css']
})
export class MapPickerComponent {
  zoom: number = 12
  lat: number = 51.266540
	lng: number = -1.092396
	marker: marker = {};
  firstClick: boolean = false;

  mapClicked($event: any) {
    this.marker.lat = $event.coords.lat,
		this.marker.lng = $event.coords.lng,
    this.firstClick = true
  };

  markerDragEnd($event: any) {
    this.marker.lat = $event.coords.lat,
    this.marker.lng = $event.coords.lng
	};

  constructor(public dialog: MatDialog) {}

	onClickNext(): void {
	  let dialogRef = this.dialog.open(MapPickerConfirmDialog, {
			width: '250px',
			data: JSON.stringify(this.marker)
		});
	}

	onClickHelp(): void {
    let dialogRef = this.dialog.open(MapPickerHelpDialog, {
      width: '250px'
    });
	}
}

@Component({
  selector: 'map-picker-confirm-dialog',
  templateUrl: 'map-picker-confirm-dialog.html',
})
export class MapPickerConfirmDialog {

constructor(public dialogRef: MatDialogRef<MapPickerConfirmDialog>,
	    				private http: HttpClient,
							private router: Router,
				      @Inject(MAT_DIALOG_DATA) public data: string) {}

  onBack(): void {
    this.dialogRef.close();
	}

	onSubmit(): void {
		this.http.post('https://ivwejxpei0.execute-api.eu-west-2.amazonaws.com/Production/coordinates', JSON.stringify(this.data), {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe();
		this.router.navigate(['/provide-contact-details']);
    this.dialogRef.close();
	}
}


@Component({
  selector: 'map-picker-help-dialog',
  templateUrl: 'map-picker-help-dialog.html',
})
export class MapPickerHelpDialog {
			
	constructor(public dialogRef: MatDialogRef<MapPickerHelpDialog>) {}
			
	onOkClick(): void {
    this.dialogRef.close();
  }
}

// just an interface for type safety.
interface marker {
	lat?: number;
	lng?: number;
}
