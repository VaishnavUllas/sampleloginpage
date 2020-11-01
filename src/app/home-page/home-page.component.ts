import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _auth:AuthService,private _router :Router) { }

  ngOnInit(): void {
    if(!this._auth.checkLoggedIn()){
      alert("not logged in");
      this._router.navigate(['']);
    }
  }
  logout(){
    this._auth.logOut();
    this._router.navigate(['']);
  }
}
