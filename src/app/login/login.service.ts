import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from './status.model';

@Injectable({providedIn: 'root'})
export class LoginService {

    constructor(private http:HttpClient) { }

    post(credentials): Observable<Response> {
        return this.http.post<Response>('http://localhost:4201/api/admin/login', credentials);
    }
}