import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesChartComponent } from './technologies-chart.component';

describe('TechnologiesChartComponent', () => {
  let component: TechnologiesChartComponent;
  let fixture: ComponentFixture<TechnologiesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
