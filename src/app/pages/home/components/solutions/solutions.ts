import { Component } from '@angular/core';

interface ShippingMethod {
  title: string;
  cost: string;
  weight: string;
}

@Component({
  selector: 'app-solutions',
  template: `
    <section class="px-10 pb-20">
      <h2 class="text-4xl font-bold leading-tight">
        Customized solutions<br />
        for your business
      </h2>

      <div class="mt-10 grid grid-cols-3 gap-6">
        @for (method of methods; track method.title) {
          <div class="rounded-2xl bg-neutral-100 p-6">
            <h3 class="border-b border-neutral-300 pb-4 text-2xl font-bold">
              {{ method.title }}
            </h3>

            <p class="mt-5 text-xs uppercase text-neutral-500">Cost</p>
            <p class="font-medium">{{ method.cost }}</p>

            <p class="mt-4 text-xs uppercase text-neutral-500">Weight</p>
            <p class="font-medium">{{ method.weight }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Solutions {
  methods: ShippingMethod[] = [
    { title: 'By Land', cost: 'From $2.5 per lbs', weight: 'Up to 44,000 lbs' },
    { title: 'By Air', cost: 'From $9 per lbs', weight: 'Up to 20,000 lbs' },
    { title: 'By Sea', cost: 'From $2.5 per lbs', weight: '∞' },
  ];
}