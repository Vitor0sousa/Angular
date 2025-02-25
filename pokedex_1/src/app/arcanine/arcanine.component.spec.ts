import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcanineComponent } from './arcanine.component';

describe('ArcanineComponent', () => {
  let component: ArcanineComponent;
  let fixture: ComponentFixture<ArcanineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcanineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcanineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
