import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(protected authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.authSvc.LogOut();
  }
}
