import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/activity';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService: HttpService) { }

  uploadActivities(file: File): Observable<Activity>
  {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.httpService.post<Activity>('upload', formData);
  }

  getActivities(): Observable<Activity[]>
  {
    return this.httpService.get<Activity[]>('retrieve');
  }
}
