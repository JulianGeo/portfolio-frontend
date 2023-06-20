import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {

  l_experience: Experience[] = [];
  total: number = this.l_experience.length;
  pageSlice: Experience[] = [];

  constructor(
    private service: ExperienceService,
    public _MatPaginatorIntl: MatPaginatorIntl
  ) { }


  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items';

    this.service.getAll().subscribe({
      next: (experience) => {
        this.l_experience = experience,
        this.total = this.l_experience.length;
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

    this.pageSlice = this.l_experience.slice(startIndex, endIndex);
  }


}
