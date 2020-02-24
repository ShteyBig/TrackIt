import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DashboardItemDescriptionComponent } from '../dashboard-item-description/dashboard-item-description.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  cards = [];
  itemDescription: MatDialogRef<DashboardItemDescriptionComponent>;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addCard() {
    this.cards.push(undefined);
  }

  openDescription() {
    this.itemDescription = this.dialog.open(DashboardItemDescriptionComponent);
  }
}
