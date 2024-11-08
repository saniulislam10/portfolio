import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API = environment.apiBaseLink + '/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isLoggedIn: boolean = false;
  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(filter?: any) {
    return this.httpClient.post<{data: any[], message?: string}>(API + 'get-all', {filter});
  }
  add(data: any) {
    return this.httpClient.post<{message?: string}>(API + 'add', data);
  }
  edit(data: any) {
    return this.httpClient.put<{message?: string}>(API + 'edit', data);
  }
  delete(id: any) {
    return this.httpClient.delete<{message?: string}>(API + 'delete/'+ id);
  }
  getLoginStatus(){
    return this.isLoggedIn;
  }
  loggedIn(){
    this.isLoggedIn = true;
    
  }
  login(data: any){
    return this.httpClient.post<{message: string}>(API + 'login', data);
  }
}
