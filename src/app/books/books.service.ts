import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BooksService {
    baseUrl:string = 'http://localhost:4201/api/books';

    constructor(private http: HttpClient) {}

    get(): Observable<{}> {
        return this.http.get<{}>(this.baseUrl);
    }
}