import { Component } from '@angular/core';
import { now } from 'd3';
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


  constructor(
    private service: ExperienceService
  ) { }


  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (experience) => {

        this.l_experience = experience.sort((a: { end_date: Date; }, b: { end_date: Date; }) => {
          const dateA = a.end_date ? new Date(a.end_date).getTime() : new Date().getTime();
          const dateB = b.end_date ? new Date(b.end_date).getTime() : new Date().getTime();
          return dateB - dateA;
        });


        this.total = this.l_experience.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

}
