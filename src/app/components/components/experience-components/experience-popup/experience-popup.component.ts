import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-popup',
  templateUrl: './experience-popup.component.html',
  styleUrls: ['./experience-popup.component.scss']
})
export class ExperiencePopupComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data:Experience) {}

}
