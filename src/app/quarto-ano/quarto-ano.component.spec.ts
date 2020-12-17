import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoAnoComponent } from './quarto-ano.component';

describe('QuartoAnoComponent', () => {
  let component: QuartoAnoComponent;
  let fixture: ComponentFixture<QuartoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
