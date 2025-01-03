import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightToggleComponent } from './dark-light-toggle.component';

describe('DarkLightToggleComponent', () => {
  let component: DarkLightToggleComponent;
  let fixture: ComponentFixture<DarkLightToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkLightToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLightToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
