import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

base_url='https://umsserver.onrender.com'

  constructor(private http:HttpClient) { }

  // add user api

  addUser(bodyData:any){

    return this.http.post(`${this.base_url}/users`,bodyData)

  }


  // get user api

  getUser(){
   return this.http.get(`${this.base_url}/users`)
  
  }


  // delete user

  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/users/${id}`)
  }

  // edit user part
  // get single user

  getUserData(uid:any){
    return this.http.get(`${this.base_url}/users/${uid}`)
  }

  // update user data

  updateUser(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/users/${id}`,bodyData)
  }
}
