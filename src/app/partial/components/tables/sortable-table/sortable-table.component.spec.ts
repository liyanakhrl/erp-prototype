import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTableComponent } from './sortable-table.component';

describe('SortableTableComponent', () => {
  let component: SortableTableComponent;
  let fixture: ComponentFixture<SortableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortableTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
