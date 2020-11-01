import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogginedIn=false;
  checkauth(usern,passw){
    if(usern=="admin"&& passw=="admin"){
      this.isLogginedIn=true;
      return true;
    }
    else
      return false;
  }
  logOut(){
    this.isLogginedIn=false;
  }
  checkLoggedIn(){
    return this.isLogginedIn;
  }
}
