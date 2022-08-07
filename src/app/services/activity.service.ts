import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/activity';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpService: HttpService,
              private http: HttpClient) { }

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

  downloadActivities(): Observable<any>
  {
    return this.http.get(this.baseApiUrl+'/download', {responseType: 'blob'});
  }
}
