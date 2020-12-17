import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroAnoComponent } from './terceiro-ano.component';

describe('TerceiroAnoComponent', () => {
  let component: TerceiroAnoComponent;
  let fixture: ComponentFixture<TerceiroAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
