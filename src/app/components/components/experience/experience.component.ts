import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input() experience: Experience|undefined = {
    company: '',
    description: '',
    position: '',
    image_url: '',
    start_date: new Date(),
    end_date: new Date(),
  }

}


