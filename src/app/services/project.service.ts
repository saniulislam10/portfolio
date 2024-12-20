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

 
  add(data: any) {
    return this.httpClient.post<{message: string}>(API + 'add', data);
  }
  getById(id: any) {
    return this.httpClient.get<{data: any}>(API + 'get-by-id/'+id);
  }
  getAll(filter?: any) {
    return this.httpClient.post<{data: any[], message?: string}>(API + 'get-all', {filter});
  }

  edit(data: any) {
    return this.httpClient.put<{message: string}>(API + 'edit', data);
  }
  delete(id: any) {
    return this.httpClient.delete<{message: string}>(API + 'delete/'+ id);
  }
}
