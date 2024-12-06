import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../interface/skills';
const API = environment.apiBaseLink + '/api/skill/';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient: HttpClient) { }
  add(data: Skills) {
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
