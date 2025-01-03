import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropWidgetComponent } from './drag-drop-widget.component';

describe('DragDropWidgetComponent', () => {
  let component: DragDropWidgetComponent;
  let fixture: ComponentFixture<DragDropWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragDropWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
