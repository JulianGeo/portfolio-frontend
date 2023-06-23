import { Component } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology.service';
import { Color, ScaleType  } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-technologies-chart',
  templateUrl: './technologies-chart.component.html',
  styleUrls: ['./technologies-chart.component.scss']
})
export class TechnologiesChartComponent {

  single: any = [];
  total: number = this.single.length;
  view: [number, number] = [300, 400];


  // Chart options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;


  //Colors options: https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical
  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#AFD3E2', '#19A7CE', '#146C94']
  };


  constructor(
    private service: TechnologyService,
  ) {
  }



  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.single = data;
        this.total = data.length;
      },
      error: (error) => console.log(error)
    });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatDataLabel(value: any )
  {
    return value + '%';
  }

  onSlideChange(): void {
    console.log('slide change');
  }
}
