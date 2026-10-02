import { Component } from '@angular/core';

@Component({
  selector: 'app-plane-banner',
  template: `
    <section class="px-10 pb-20">
      <div
        class="h-[320px] w-full overflow-hidden rounded-3xl bg-cover bg-center"
        style="background-image: url('/plane.jpg')"
      ></div>
    </section>
  `,
})
export class PlaneBanner {}