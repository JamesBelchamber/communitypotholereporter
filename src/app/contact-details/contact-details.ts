import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { MatDialog,
         MatDialogRef } from '@angular/material';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.html',
  styleUrls: ['./contact-details.css']
})
export class ContactDetailsComponent {

	constructor(public dialog: MatDialog) {}

	onClickNext(): void {
	}

	onClickHelp(): void {
    let dialogRef = this.dialog.open(ContactDetailsHelpDialog, {
      width: '250px'
    });
	}
}

@Component({
  selector: 'contact-details-help-dialog',
  templateUrl: 'contact-details-help-dialog.html',
})
export class ContactDetailsHelpDialog {
			
	constructor(public dialogRef: MatDialogRef<ContactDetailsHelpDialog>) {}
			
	onOkClick(): void {
    this.dialogRef.close();
  }
}
