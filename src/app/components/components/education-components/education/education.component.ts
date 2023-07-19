import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.model';
import { EducationPopupComponent } from '../education-popup/education-popup.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  @Input() education: Education|undefined = {
    institution: '',
    degree: '',
    imageUrl: '',
    start_date: new Date(),
    end_date: new Date(),
  }

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(EducationPopupComponent, { data: this.education });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
