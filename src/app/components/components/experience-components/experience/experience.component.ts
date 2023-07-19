import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.model';
import { ExperiencePopupComponent } from '../experience-popup/experience-popup.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input() experience: Experience | undefined = {
    company: '',
    description: '',
    position: '',
    image_url: '',
    start_date: new Date(),
    end_date: new Date(),
  }

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(ExperiencePopupComponent, { data: this.experience });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  isEndDateCurrent(endDate: Date | undefined): boolean {

    return endDate === undefined
      || (endDate instanceof Date && (isNaN(endDate.getTime())
        || endDate.getDate() === new Date().getDate()));
  }



}


