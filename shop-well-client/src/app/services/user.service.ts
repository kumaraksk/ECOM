import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import Configuration from 'src/config/configuration.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = Configuration.apiServer.url  //// "https://localhost:44375";
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
    constructor(private http: HttpClient,private jwtHelper:JwtHelperService) { }
   
    getUserNames() {
      return this.http.get(this.baseUrl + '/api/Account/usernames');
  }
  addUser(user:any){
  return  this.http.post(this.baseUrl+"/api/account/register",user);
  }
  confirmEmail(userid:string , code:string){
    return this.http.get(this.baseUrl+"/api/account/confirm-email?userid="+userid+"&code="+code);
  }
  login(user:any){
    return  this.http.post(this.baseUrl+"/api/Account/authenticate",user);
    }
    isUserAuthenticated = (): boolean => {
      const token = localStorage.getItem("jwt");
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      return false;
    }
    
  geUsers() {
      return this.http.get(this.baseUrl + '/api/Account/users');
  }
}
