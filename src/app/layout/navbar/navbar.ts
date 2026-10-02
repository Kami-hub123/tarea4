import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="flex items-center justify-between px-10 py-6">
      <div class="flex items-center gap-2 text-sm font-medium">
        <span class="text-base">◈</span>
        Cargo.Town
      </div>
    </header>
  `,
})
export class Navbar {}