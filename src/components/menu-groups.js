import { foodIcon, foodForLabel } from './fiesta.js';
const list = (items, icon) => `<ul class="food-bullets">${items.map(item => `<li>${foodIcon(icon)}<span>${item}</span></li>`).join('')}</ul>`;
const plates = [
  ['From the grill', 'plate', ['Carne asada','Costilla asada','Bistec a la Mexicana','Pechuga asada','Platillo de barbacoa']],
  ['Comfort classics', 'quesadilla', ['Mole poblano','Enchiladas de mole','Green chicken enchiladas','Pechuga empanizada','Pork in red adobo']],
  ['A little of everything', 'taco', ['Chilaquiles','Chilaquiles con cecina','Tacos dorados','Birria tacos with rice','Mojarra frita','Fish fillet']],
  ['Fajitas', 'plate', ['Chicken','Steak','Shrimp','Chicken & steak','Chicken, steak & shrimp','Chicken & shrimp','Steak & shrimp']],
  ['Sopas & caldos', 'bowl', ['Caldo de res','Caldo de gallina','Pancita / menudo']],
  ['A little on the side', 'bowl', ['Rice','Black beans','Refried beans','Handmade tortillas','Guacamole','Chips','Fried plantains']],
];
const classics = ['Asada / steak','Pollo / chicken','Al pastor','Chorizo','Carnitas','Lengua','Barbacoa'];
const more = [
  ['Burritos', [...classics,'Shrimp','Chicken & steak','Vegetarian']],
  ['Tortas', [...classics,'Ham','Chicken milanesa','Beef milanesa']],
  ['Sopes & huaraches', classics, 'Sopes are also available in orders of three.'],
  ['Gorditas', [...classics,'Tripa'], 'Individual and three-piece options are on Toast.'],
  ['Pupusas & tamales', ['Queso pupusa','Frijol pupusa','Loroco pupusa','Revuelta pupusa','Tamal de elote / corn tamal']],
  ['Nachos & more', ['Nachos','Taco salad','Chicken salad','Carne asada fries','Chips','Queso','Guacamole']],
  ['For the little ones', ['Chicken nuggets','Kids’ chicken quesadilla','Kids’ cheese quesadilla','Kids’ steak quesadilla'], 'See Toast for current portions and prices.'],
];
export const plateGroups = () => `<div class="plate-grid">${plates.map(([name,icon,items]) => `<article class="plate-card"><h3>${name}</h3>${list(items,icon)}</article>`).join('')}</div>`;
export const moreGroups = () => `<div class="menu-disclosures">${more.map(([name,items,note])=>`<details><summary><span class="summary-label">${foodIcon(foodForLabel(name))}${name}</span></summary>${list(items,foodForLabel(name))}${note?`<p class="group-note">${note}</p>`:''}</details>`).join('')}</div>`;
