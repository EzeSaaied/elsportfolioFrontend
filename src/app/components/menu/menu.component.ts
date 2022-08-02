import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faBars = faBars;

  displayMenu = false;

  constructor(protected authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.authSvc.LogOut();
  }

  hideMenu() {
    this.displayMenu = !this.displayMenu;
  }
}
