import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { firstValueFrom } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  providers: [UserService],
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  users: any = [];
  items = [
    {
      title: 'Web Production Spesialist',
      place: 'Yogyakarta',
      date: '2020',
    },
    {
      title: 'Web Production Spesialist',
      place: 'Yogyakarta',
      date: '2020',
    },
    {
      title: 'Web Production Spesialist',
      place: 'Yogyakarta',
      date: '2020',
    },
  ];
  fizzBuzzList: string[] = [];

  constructor(private userService: UserService) {
    // this.generateFizzBuzz();
  }

  ngOnInit(): void {
    this.userService.getAllUser().then((resp) => {
      resp.toPromise().then((data: any) => {
        this.users = data;
      });
    });
  }

  generateFizzBuzz(): void {
    for (let i = 1; i <= 100; i++) {
      let result = '';

      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }

      this.fizzBuzzList.push(result || i.toString());
      console.log(this.fizzBuzzList);
    }
  }
  // ngOnInit(): void {
  //   this.userService.getAllUser().then(async (resp) => {
  //     try {
  //       const data = await firstValueFrom(resp);
  //       this.users = data;
  //     } catch (error) {
  //       // Handle errors
  //       console.error('Error fetching data:', error);
  //     }
  //   });
  // }
}
