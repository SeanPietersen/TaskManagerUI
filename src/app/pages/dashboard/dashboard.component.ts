import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedFile!: File;
  uploaded = false;

  constructor(private activityService: ActivityService) { }

  onFileSelected(event: any)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  { 
    this.activityService.uploadActivities(this.selectedFile)
    .subscribe({
      next:(response) =>{
        this.uploaded = true;
          
      },
      error:(response) => {
        alert(response);
      }
    })
  }

  onDownload()
  {
    this.activityService.downloadActivities()
    .subscribe(response => {
      const blob = new Blob([(response)], {type: 'text/csv'});
      FileSaver.saveAs(blob, "Activity.txt");

    })
  }

  ngOnInit(): void {
  }

}
