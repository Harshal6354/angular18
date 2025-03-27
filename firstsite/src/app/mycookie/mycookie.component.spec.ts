import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycookieComponent } from './mycookie.component';

describe('MycookieComponent', () => {
  let component: MycookieComponent;
  let fixture: ComponentFixture<MycookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycookieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
