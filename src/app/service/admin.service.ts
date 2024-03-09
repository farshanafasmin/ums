import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url='https://umsserver.onrender.com'

  constructor(private http:HttpClient) { }

  loginApi(){
    return this.http.get(`${this.base_url}/admins`)
  }

  // update admin

  updateAdmin(bodyData:any){
    return this.http.put(`${this.base_url}/admins/1`,bodyData)
  }
}
