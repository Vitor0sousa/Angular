import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoOhComponent } from './ho-oh.component';

describe('HoOhComponent', () => {
  let component: HoOhComponent;
  let fixture: ComponentFixture<HoOhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoOhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoOhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
