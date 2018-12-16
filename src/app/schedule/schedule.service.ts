import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ScheduleService {
    baseUrl:string = 'http://localhost:4201/api/schedule';

    constructor(private http:HttpClient) {}

    get(): Observable<{}> {
        return this.http.get<{}>(this.baseUrl);
    }
}