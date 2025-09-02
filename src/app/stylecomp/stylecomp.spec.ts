import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylecomp } from './stylecomp';

describe('Stylecomp', () => {
  let component: Stylecomp;
  let fixture: ComponentFixture<Stylecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stylecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylecomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
