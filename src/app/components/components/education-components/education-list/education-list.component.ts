import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { EducationPopupComponent } from '../education-popup/education-popup.component';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent {

  l_education: Education[] = [];
  total: number = this.l_education.length;
  pageSlice: Education[] = [];

  constructor(
    private service: EducationService,
    public _MatPaginatorIntl: MatPaginatorIntl,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items';

    this.service.getAll().subscribe({
      next: (education) => {
        this.l_education = education.sort((a: { end_date: Date; }, b: { end_date: Date; }) => {
          const dateA = a.end_date ? new Date(a.end_date).getTime() : 0;
          const dateB = b.end_date ? new Date(b.end_date).getTime() : 0;
          return dateB - dateA;
        });
        this.total = this.l_education.length;
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

    this.pageSlice = this.l_education.slice(startIndex, endIndex);
  }

  openDialog(education: Education) {
    const dialogRef = this.dialog.open(EducationPopupComponent, { data: education });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
