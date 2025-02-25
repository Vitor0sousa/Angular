import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolgaleoComponent } from './solgaleo.component';

describe('SolgaleoComponent', () => {
  let component: SolgaleoComponent;
  let fixture: ComponentFixture<SolgaleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolgaleoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolgaleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
