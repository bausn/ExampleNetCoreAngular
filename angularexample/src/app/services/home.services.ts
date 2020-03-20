import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
    
@Injectable()
export class HomeService {
    
    private url: string = environment.url + 'Service';

    constructor(private http: HttpClient ) { }

    public getDatos(): Observable<any> {
        // se consume {url}/service metodo GET 'GetData'
        return this.http.get(this.url); 
    }
    
}
