import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsService {
    baseUrl:string = 'http://localhost:4201/api/';
    constructor (private http:HttpClient) {}

    public get(): Observable<[]> {
        return this.http.get<[]>(`${this.baseUrl}news`);
    } 
}