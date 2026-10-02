import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <section class="grid grid-cols-2 gap-16 px-10 pb-20">
      <div>
        <h2 class="text-4xl font-bold leading-tight">
          Find out the price<br />
          right now —<br />
          <span class="text-neutral-400">use our shipping</span><br />
          <span class="text-neutral-400">cost calculator</span>
        </h2>
      </div>

      <div>
        <p class="text-xs font-medium uppercase text-neutral-500">Shipping method</p>
        <div class="mt-2 flex overflow-hidden rounded-full bg-white">
          @for (method of shippingMethods; track method) {
            <button
              type="button"
              (click)="selectedMethod.set(method)"
              class="flex-1 py-3 text-sm font-medium transition-colors"
              [class.bg-neutral-900]="selectedMethod() === method"
              [class.text-white]="selectedMethod() === method"
            >
              {{ method }}
            </button>
          }
        </div>

        <div class="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p class="text-xs font-medium uppercase text-neutral-500">Type of goods</p>
            <select class="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-500">
              <option>Select</option>
            </select>
          </div>
          <div>
            <p class="text-xs font-medium uppercase text-neutral-500">Weight</p>
            <div class="mt-2 flex items-center rounded-xl bg-white px-4 py-3">
              <input type="number" placeholder="0" class="w-full text-sm outline-none" />
              <span class="text-sm text-neutral-400">lbs</span>
            </div>
          </div>
        </div>

        <p class="mt-6 text-xs font-medium uppercase text-neutral-500">Dimensions</p>
        <div class="mt-2 flex items-center gap-2">
          @for (dim of dimensions; track dim) {
            <div class="flex flex-1 items-center rounded-xl bg-white px-4 py-3">
              <input type="number" [placeholder]="dim" class="w-full text-sm outline-none" />
              <span class="text-sm text-neutral-400">in</span>
            </div>
          }
        </div>

        <div class="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p class="text-xs font-medium uppercase text-neutral-500">From</p>
            <select class="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-500">
              <option>Country</option>
            </select>
            <select class="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-500">
              <option>City</option>
            </select>
          </div>
          <div>
            <p class="text-xs font-medium uppercase text-neutral-500">To</p>
            <select class="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-500">
              <option>Country</option>
            </select>
            <select class="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-500">
              <option>City</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          class="mt-8 flex items-center gap-3 rounded-full bg-neutral-300 px-6 py-3 text-sm font-medium"
        >
          Estimate
          <span>→</span>
        </button>
      </div>
    </section>
  `,
})
export class Calculator {
  shippingMethods = ['Land', 'Air', 'Sea'];
  selectedMethod = signal('Land');
  dimensions = ['Height', 'Height', 'Height'];
}