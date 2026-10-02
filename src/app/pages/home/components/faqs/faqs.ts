import { Component, signal } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  open: ReturnType<typeof signal<boolean>>;
}

@Component({
  selector: 'app-faqs',
  template: `
    <section class="px-10 pb-24">
      <h2 class="text-4xl font-bold">FAQs</h2>

      <div class="mt-10 border-t border-neutral-300">
        @for (faq of faqs; track faq.question) {
          <div class="border-b border-neutral-300 py-6">
            <button
              type="button"
              (click)="faq.open.set(!faq.open())"
              class="flex w-full items-center justify-between text-left"
            >
              <span class="text-lg font-medium">{{ faq.question }}</span>
              <span class="text-xl">{{ faq.open() ? '−' : '+' }}</span>
            </button>

            @if (faq.open()) {
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
                {{ faq.answer }}
              </p>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class Faqs {
  faqs: Faq[] = [
    {
      question: 'Why do our clients choose us?',
      answer: 'Respuesta pendiente.',
      open: signal(false),
    },
    {
      question: 'How do we deliver?',
      answer: 'Respuesta pendiente.',
      open: signal(false),
    },
    {
      question: 'Do you provide shipping insurance?',
      answer:
        'We offer insurance, but the final decision is up to you. The insurance costs 1% of the value of the goods when delivered by sea, and 2% when delivered by auto or air.',
      open: signal(true),
    },
    {
      question: 'How do we check the goods?',
      answer: 'Respuesta pendiente.',
      open: signal(false),
    },
    {
      question: 'How do we pack the goods?',
      answer: 'YES MI BRODA.',
      open: signal(false),
    },
    {
      question: 'How to get the cargo?',
      answer: 'Respuesta pendiente.',
      open: signal(false),
    },
    {
      question: 'How to calculate all expenses?',
      answer: 'Respuesta pendiente.',
      open: signal(false),
    },
  ];
}