import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  activities: Activity[] = [];
  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {

    this.activityService.getActivities()
    .subscribe({
      next: (activitiesResponse) => {
        console.log(activitiesResponse);
        this.activities = activitiesResponse;
      },
      error: (response) => {
        alert(response);
      }
    })
  }

}
