import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazikenComponent } from './blaziken.component';

describe('BlazikenComponent', () => {
  let component: BlazikenComponent;
  let fixture: ComponentFixture<BlazikenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlazikenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazikenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
