import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {


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


