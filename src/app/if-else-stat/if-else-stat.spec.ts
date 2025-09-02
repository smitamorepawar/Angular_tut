import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseStat } from './if-else-stat';

describe('IfElseStat', () => {
  let component: IfElseStat;
  let fixture: ComponentFixture<IfElseStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
