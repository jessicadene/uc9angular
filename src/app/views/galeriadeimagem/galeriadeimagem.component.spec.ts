import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriadeimagemComponent } from './galeriadeimagem.component';

describe('GaleriadeimagemComponent', () => {
  let component: GaleriadeimagemComponent;
  let fixture: ComponentFixture<GaleriadeimagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriadeimagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriadeimagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
