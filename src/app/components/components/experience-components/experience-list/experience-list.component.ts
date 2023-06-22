import { Component } from '@angular/core';
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

  throttle = 150;
  distance = 2;
  page = 0;
  last_page = Math.floor(this.total / this.distance)

  constructor(
    private service: ExperienceService
  ) { }


  ngOnInit(): void {
    this.service.getAll(this.page, this.distance-1).subscribe({
      next: (experience) => {
        this.l_experience = experience,
          this.total = this.l_experience.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }


  onScroll(): void {
    const from = 2+this.page*2;
    const to = (2+this.page*2)+1;

    this.service.getAll(from, to)
    .subscribe((experience: Experience[]) => {
      this.l_experience.push(...experience);
      ++this.page;
    });
  }


}
