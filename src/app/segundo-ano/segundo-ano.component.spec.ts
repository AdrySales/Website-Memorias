import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoAnoComponent } from './segundo-ano.component';

describe('SegundoAnoComponent', () => {
  let component: SegundoAnoComponent;
  let fixture: ComponentFixture<SegundoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
