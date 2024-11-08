import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API = environment.apiBaseLink + '/api/project/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(filter?: any) {
    return this.httpClient.post<{data: any[], message?: string}>(API + 'get-all', {filter});
  }
  add(data: any) {
    return this.httpClient.post<{message?: string}>(API + 'add', data);
  }
}
