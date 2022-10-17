import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config{}

@Injectable()
export class ConfigService{
    configUrl: string = 'https://app-technical-test-backend-juan.azurewebsites.net/';

    constructor(private http: HttpClient){        
     }

    postValidateUser(valid: any) {
        const headers = {"Access-Control-Allow-Origin":"*",
        'content-type': 'application/json'}
        const body = JSON.stringify(valid);        
        return this.http.post<Config>(this.configUrl+'security/validUser', body, {'headers':headers});
      }

    getAllUsers() {
        const headers = {"Access-Control-Allow-Origin":"*"}
        return this.http.get<Config>(this.configUrl+'security/getAllUsers', {"headers":headers});
      }
}