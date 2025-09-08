import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('MoviesAPI');

  // // title = 'web-app';

  // ngOnInit(): void {
  //   initFlowbite();
  // }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Flowbite only in browser environment
      this.initFlowbite();
    }
  }

  private initFlowbite() {
    // Your Flowbite initialization code here
    // For example:
    // import { initFlowbite } from 'flowbite';
    initFlowbite();
  }

}
