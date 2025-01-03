import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiManagementComponent } from './api-management.component';

describe('ApiManagementComponent', () => {
  let component: ApiManagementComponent;
  let fixture: ComponentFixture<ApiManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
