import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForReuseComponent } from './for-reuse.component';

describe('ForReuseComponent', () => {
  let component: ForReuseComponent;
  let fixture: ComponentFixture<ForReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForReuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
