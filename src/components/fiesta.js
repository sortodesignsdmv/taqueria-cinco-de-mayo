export function foodIcon(name='taco', className='food-icon') {
  return `<svg class="${className}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><use href="/fiesta-icons.svg#${name}"/></svg>`;
}
export function foodForLabel(label) {
  if (/sip|drink|fresca|refresh|summer|soda|coffee|café|horchata|mango|jamaica|tamarindo|melón/i.test(label)) return 'agua';
  if (/ques|chees/i.test(label)) return 'quesadilla';
  if (/burrito|torta|gordita|take|to-go|carryout/i.test(label)) return 'burrito';
  if (/sopa|caldo|side|comfort/i.test(label)) return 'bowl';
  if (/visit|find us|road|hyattsville|local|corner/i.test(label)) return 'pin';
  if (/heart|love|welcome|neighborhood|corazón|familia|bienvenidos/i.test(label)) return 'heart';
  if (/plate|grill|fajita|dine|chair/i.test(label)) return 'plate';
  return 'taco';
}
export function topicIcons(body) {
  return body.replace(/<span class="(eyebrow|menu-number|step)">([^<]+)<\/span>/g, (_,cls,text)=>`<span class="${cls} topic-label">${foodIcon(foodForLabel(text))}<span>${text}</span></span>`)
    .replace(/<h3>([^<]+)<\/h3>/g,(_,text)=>`<h3 class="icon-heading">${foodIcon(foodForLabel(text))}<span>${text}</span></h3>`);
}
export function floatingFood() {
  return `<div class="fiesta-backdrop" aria-hidden="true">${['taco','burrito','agua','quesadilla'].map((name,i)=>`<div class="floating-food float-${i+1}">${foodIcon(name)}</div>`).join('')}</div>`;
}
export function papelPicado() {
  const colors=['#087e80','#ac2455','#ed9c23','#b92127','#087e80','#ac2455','#ed9c23'];
  return `<div class="papel-picado" aria-hidden="true"><svg viewBox="0 0 1050 105" fill="none" focusable="false"><path d="M0 10Q525 84 1050 10" stroke="#92704d" stroke-width="2"/>${colors.map((color,i)=>{const x=22+i*148;const y=13+25*Math.sin(i/6*Math.PI);return `<g class="papel-flag" style="--delay:-${i*.8}s;transform-origin:${x+55}px ${y}px"><path d="M${x} ${y}h110v51l-11 10-11-5-11 10-11-5-11 10-11-10-11 5-11-10-11 5-11-10Z" fill="${color}"/><g fill="#fff5df"><circle cx="${x+55}" cy="${y+28}" r="8"/><path d="m${x+55} ${y+10} 4 6-4 5-4-5Zm0 25 4 6-4 5-4-5Zm-18-7 6-4 5 4-5 4Zm25 0 6-4 5 4-5 4Z"/>${[14,26,84,96].map(dx=>`<circle cx="${x+dx}" cy="${y+13}" r="2.5"/><circle cx="${x+dx}" cy="${y+39}" r="2.5"/>`).join('')}</g></g>`;}).join('')}</svg></div>`;
}
