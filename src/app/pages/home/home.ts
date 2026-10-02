import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { PlaneBanner } from './components/plane-banner/plane-banner';
import { Solutions } from './components/solutions/solutions';
import { Calculator } from './components/calculator/calculator';
import { Faqs } from './components/faqs/faqs';

@Component({
  selector: 'app-home',
  imports: [Hero, PlaneBanner, Solutions, Calculator, Faqs],
  template: `
    <app-hero />
    <app-plane-banner />
    <app-solutions />
    <app-calculator />
    <app-faqs />
  `,
})
export class Home {}