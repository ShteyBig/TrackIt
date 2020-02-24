import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-item-description',
  templateUrl: './dashboard-item-description.component.html',
  styleUrls: ['./dashboard-item-description.component.scss']
})
export class DashboardItemDescriptionComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DashboardItemDescriptionComponent>,
  ) { }

  ngOnInit() {
  }

}
