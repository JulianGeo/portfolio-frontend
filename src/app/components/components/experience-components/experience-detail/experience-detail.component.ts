import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent {

  @Input() experience: Experience|undefined = {
    company: '',
    description: '',
    position: '',
    image_url: '',
    start_date: new Date(),
    end_date: new Date(),
  }


}
