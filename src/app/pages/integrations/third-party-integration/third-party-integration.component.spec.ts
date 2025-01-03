import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyIntegrationComponent } from './third-party-integration.component';

describe('ThirdPartyIntegrationComponent', () => {
  let component: ThirdPartyIntegrationComponent;
  let fixture: ComponentFixture<ThirdPartyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdPartyIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPartyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
