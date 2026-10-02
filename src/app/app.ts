import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <div class="min-h-screen bg-neutral-600 py-6">
      <div class="mx-auto max-w-[1400px] overflow-hidden rounded-[40px] bg-neutral-200">
        <app-navbar />
        <main>
          <router-outlet />
        </main>
        <app-footer />
      </div>
    </div>
  `,
})
export class App {}