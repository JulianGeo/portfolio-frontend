import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-education-popup',
  templateUrl: './education-popup.component.html',
  styleUrls: ['./education-popup.component.scss']
})
export class EducationPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Education) {}
}
