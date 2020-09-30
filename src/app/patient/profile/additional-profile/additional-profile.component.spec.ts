import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalProfileComponent } from './additional-profile.component';

describe('AdditionalProfileComponent', () => {
  let component: AdditionalProfileComponent;
  let fixture: ComponentFixture<AdditionalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
