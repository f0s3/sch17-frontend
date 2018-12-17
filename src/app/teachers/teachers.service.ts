import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TeachersService {
    baseUrl:string = 'http://localhost:4201/api/teachers';

    constructor(private http:HttpClient) {}

    get(): Observable<{}> {
        return this.http.get<{}>(this.baseUrl);
    }
}