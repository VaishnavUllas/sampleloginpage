import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
  
  public username;
  public password;
  public haveError=false;
  
  constructor(private _router:Router,private _auth:AuthService) { }

  ngOnInit(): void {
  }

  onLoginClick(){
    alert("usename:"+this.username+"password:"+this.password);
    if(this._auth.checkauth(this.username,this.password)){
      this.haveError=false;
      this._router.navigate(['home'])
    }
    else{
      this.haveError=true;
    }
  }
}
