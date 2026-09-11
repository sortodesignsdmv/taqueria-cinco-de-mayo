import { foodIcon } from './fiesta.js';
export function flavorBanner() {
  const group = `<div class="flavor-loop-group">${['TACOS','BUENA COMIDA','BUENA VIBRA','CINCO DE MAYO'].map(text=>`<span>${text}</span>${foodIcon('taco','food-icon pulse-taco')}`).join('')}</div>`;
  return `<div class="flavor-strip flavor-marquee" aria-hidden="true"><div class="flavor-track">${group}${group}</div></div>`;
}
