import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Service {
    private apiUrl = "http://starlord.hackerearth.com/movieslisting";
    constructor(private http: HttpClient) {}
    getMovieData()
    {
        return this.http.get(this.apiUrl);
    }
}