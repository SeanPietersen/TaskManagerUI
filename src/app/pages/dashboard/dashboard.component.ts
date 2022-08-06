import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedFile!: File;
  clicked = false;

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
        this.clicked = true;
      },
      error:(response) => {
        alert(response);
      }
    })
  }

  ngOnInit(): void {
  }

}
