import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  l_projects: Project[] = [];
  total: number = this.l_projects.length;

  constructor(
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (project) => {
        this.l_projects = project,
          console.log(project[0].project_tech[0].technology.technology_name)
        this.total = this.l_projects.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }


}
