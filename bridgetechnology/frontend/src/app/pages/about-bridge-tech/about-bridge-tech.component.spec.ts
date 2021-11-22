import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBridgeTechComponent } from './about-bridge-tech.component';

describe('AboutBridgeTechComponent', () => {
  let component: AboutBridgeTechComponent;
  let fixture: ComponentFixture<AboutBridgeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBridgeTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBridgeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
