import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Technology } from 'src/app/models/technology.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  private technology: Technology = {
    technology_name: 's',
  };

  constructor(
    private service: DataService,
  ) { }

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


