import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarfetchComponent } from './farfetch.component';

describe('FarfetchComponent', () => {
  let component: FarfetchComponent;
  let fixture: ComponentFixture<FarfetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarfetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
