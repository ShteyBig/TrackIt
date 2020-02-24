import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemDescriptionComponent } from './dashboard-item-description.component';

describe('DashboardItemDescriptionComponent', () => {
  let component: DashboardItemDescriptionComponent;
  let fixture: ComponentFixture<DashboardItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
