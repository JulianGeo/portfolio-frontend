import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent {


  @Input() education: Education|undefined = {
    institution: '',
    degree: '',
    imageUrl: '',
    start_date: new Date(),
    end_date: new Date(),
  }

}
