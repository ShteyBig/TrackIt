import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { DashboardItemDescriptionComponent } from './dashboard-item-description/dashboard-item-description.component';

export const dashboardComponents: any[] = [
    AddNewItemComponent,
    MainDashboardComponent,
    EditItemComponent,
    DeleteItemComponent,
    DashboardItemDescriptionComponent
];

export * from './add-new-item/add-new-item.component';
export * from './main-dashboard/main-dashboard.component';
