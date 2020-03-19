import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardItemDescriptionComponent } from '../dashboard-item-description/dashboard-item-description.component';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  changeText: boolean;
  public taskForm: FormGroup;

  constructor(
    public itemDescription: MatDialogRef<DashboardItemDescriptionComponent>
  ) {
    this.changeText = false;
  }


  ngOnInit() {
    this.taskForm = new FormGroup({
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  emailFormControl = new FormControl('');

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  backgroundColor = new FormControl();
  backgroundColorList: string[] = ['blue', 'red', 'orange', 'yellow', 'green'];

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  public hasError = (controlName: string, errorName: string) => {
    return this.taskForm.controls[controlName].hasError(errorName);
  }

  setRecipeName() {
    this.itemDescription.close();
  }

}
