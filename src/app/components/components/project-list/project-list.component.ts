import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  pageSlice: Project[] = [];

  constructor(
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (project) => {
        this.l_projects = project,
        this.total = this.l_projects.length;
        this.updatePageSlice(0,3);

      },
      error: (console.log),
      complete: (console.log)
    })
  }

  OnPageChange(event: PageEvent){
    console.log(event)
    this.updatePageSlice(event.pageIndex, event.pageSize);
  }

  private updatePageSlice(pageIndex: number, pageSize: number): void {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    this.pageSlice = this.l_projects.slice(startIndex, endIndex);

  }

}
