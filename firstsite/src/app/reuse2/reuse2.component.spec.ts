import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reuse2Component } from './reuse2.component';

describe('Reuse2Component', () => {
  let component: Reuse2Component;
  let fixture: ComponentFixture<Reuse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reuse2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reuse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
