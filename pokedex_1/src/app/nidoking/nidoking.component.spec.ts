import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidokingComponent } from './nidoking.component';

describe('NidokingComponent', () => {
  let component: NidokingComponent;
  let fixture: ComponentFixture<NidokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NidokingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NidokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
