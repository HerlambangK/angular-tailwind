import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {} // private router: Router // private toaster: ToastrService // private authService: AuthService,

  ngOnInit(): void {}

  async signIn() {
    // await this.authService.logout();
    // this.router
    //   .navigateByUrl('/')
    //   .then(() => this.toaster.warning('You signed out'));
  }
}
