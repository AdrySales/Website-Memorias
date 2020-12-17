import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroAnoComponent } from './primeiro-ano.component';

describe('PrimeiroAnoComponent', () => {
  let component: PrimeiroAnoComponent;
  let fixture: ComponentFixture<PrimeiroAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
