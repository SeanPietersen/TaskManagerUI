import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedFile!: File;

  constructor(private activityService: ActivityService) { }

  onFileSelected(event: any)
  {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    const fd = new FormData();
    fd.append('Activity', this.selectedFile, this.selectedFile.name);
    this.activityService.uploadActivities(fd)
    .subscribe({
      next:(response) =>{
        console.log(response)
      },
      error:(response) => {
        alert(response);
      }
    })
  }

  ngOnInit(): void {
  }

}
