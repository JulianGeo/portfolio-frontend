import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  private technology: Technology = {
    technology_name: '',
    expertise: 0,
    main_skill: false,
  };



  @Input() project: Project|undefined = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    project_tech: [],
    githubUrl: '',
    webUrl: ''
  }

}


