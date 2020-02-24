import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  cards: [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  itemDescription: MatDialogRef<EditItemComponent>;

  openDescription() {
    this.itemDescription = this.dialog.open(EditItemComponent, { disableClose: true });
  }
}
