import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEditTableComponent } from './bulk-edit-table.component';

describe('BulkEditTableComponent', () => {
  let component: BulkEditTableComponent;
  let fixture: ComponentFixture<BulkEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkEditTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
