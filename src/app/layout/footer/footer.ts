import { Component } from '@angular/core';

interface FooterColumn {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer',
  template: `
    <footer class="rounded-b-3xl bg-neutral-900 px-10 py-14 text-white">
      <div class="flex items-center gap-2 text-sm font-medium">
        <span>◈</span>
        Cargo.Town
      </div>
      <p class="mt-2 text-xs text-neutral-400">© 2023 Nash. All rights reserved.</p>

      <div class="mt-10 grid grid-cols-3 gap-10">
        @for (column of columns; track column.title) {
          <div>
            <p class="text-xs font-medium uppercase text-neutral-500">{{ column.title }}</p>
            <ul class="mt-4 space-y-3 text-sm font-medium">
              @for (link of column.links; track link) {
                <li>{{ link }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </footer>
  `,
})
export class Footer {
  columns: FooterColumn[] = [
    {
      title: 'Cargo.Town for',
      links: ['Restaurants', 'Grocery', 'Meal Kits', 'Marketplaces', 'Pharmacy', 'Retail', 'Delivery Suppliers'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact Us'],
    },
    {
      title: 'Terms for',
      links: ['Platform', 'Privacy Policy', 'Security', 'Delivery Providers'],
    },
  ];
}