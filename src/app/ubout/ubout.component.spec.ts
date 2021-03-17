import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UboutComponent } from './ubout.component';

describe('UboutComponent', () => {
  let component: UboutComponent;
  let fixture: ComponentFixture<UboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
