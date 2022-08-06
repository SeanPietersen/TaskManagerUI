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
    return this.httpService.post<Activity>('upload', file);
  }

  getActivities(): Observable<Activity[]>
  {
    return this.httpService.get<Activity[]>('retrieve');
  }
}
