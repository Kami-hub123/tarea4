import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="relative overflow-hidden px-10 pt-6 pb-16">
      <h1 class="text-6xl font-bold leading-[0.95] tracking-tight">
        Cargo. Delivery.<br />
        Worldwide.
      </h1>

      <div class="mt-8 flex items-center gap-6">
        <button
          type="button"
          class="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium"
        >
          Order Delivery
          <span>→</span>
        </button>
        <p class="max-w-[220px] text-sm text-neutral-600">
          We help our customers to get and provide reliable delivery services
        </p>
      </div>

      <svg
        class="pointer-events-none absolute -right-20 -top-10 h-auto w-[700px] text-neutral-400"
        viewBox="0 0 700 400"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M80 340 L620 60 M80 340 L130 370 L660 110 L620 60" />
        <path d="M130 370 L660 110" />

        @for (col of containerCols; track col) {
          <path [attr.d]="'M' + (100 + col * 22) + ' ' + (330 - col * 14) + ' L' + (100 + col * 22) + ' ' + (260 - col * 14)" />
        }

        @for (row of containerRows; track row) {
          <path [attr.d]="'M100 ' + (330 - row * 11) + ' L500 ' + (140 - row * 11)" />
        }
      </svg>
    </section>
  `,
})
export class Hero {
  containerCols = Array.from({ length: 15 }, (_, i) => i);
  containerRows = Array.from({ length: 6 }, (_, i) => i);
}