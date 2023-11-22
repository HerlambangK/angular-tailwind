import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // ImageGalleryComponent,
    // RouterOutlet,
    // RouterLink,
    // RouterLinkActive,
    HeaderComponent,
    // HeaderComponent,
    FooterComponent,
    // AboutComponent,
    HomePageComponent,
    // BrowserModule,
    // HttpClientModule,
  ],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tailwind';
  imageUrls = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/238/200/300',
  ];
}
