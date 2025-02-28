import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { ApiResponse, user } from '../models/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http=inject(HttpClient)
  loggeduserdata:any;
  apiUrl:string='https://projectapi.gerasim.in/api/SoilTest/';

  constructor() { 

    const loggeddata=localStorage.getItem("soiluser")
    if(loggeddata != null){

      this.loggeduserdata=JSON.parse(loggeddata);
      

    }
  }

  userlogin(obj:any){

   return this.http.post(this.apiUrl +"login",obj)
  }

  createUser(obj:user):Observable<ApiResponse>{

    console.log(obj)
    return this.http.post<ApiResponse>(`${this.apiUrl}AddNewUser`,obj)
  }

  updateUser(obj:user):Observable<ApiResponse>{

    console.log(obj)
    return this.http.post<ApiResponse>(`${this.apiUrl}UpdateUser`,obj)
  }
  
  getAllUsers():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.apiUrl}GetAllUsers`)
     
  }

DeleteUserbyId(id:number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.apiUrl}DeleteUserByUserId?userId=${id}`)
     
  }

  createNewSite(obj:any):Observable<ApiResponse>
  {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateNewSites`,obj)
  }
}
