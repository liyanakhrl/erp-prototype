import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditableFormComponent } from './inline-editable-form.component';

describe('InlineEditableFormComponent', () => {
  let component: InlineEditableFormComponent;
  let fixture: ComponentFixture<InlineEditableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineEditableFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
