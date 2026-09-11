export const business = {
  name: 'Taqueria Cinco de Mayo',
  address: '7201 Annapolis Rd',
  city: 'Hyattsville, MD 20784',
  phone: '(443) 433-0240',
  tel: 'tel:+14434330240',
  order: 'https://order.toasttab.com/online/taqueria-cinco-de-mayo-1-7201-annapolis-road',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=Taqueria+Cinco+de+Mayo+7201+Annapolis+Rd+Hyattsville+MD+20784',
  maps: 'https://www.google.com/maps/search/?api=1&query=Taqueria+Cinco+de+Mayo+7201+Annapolis+Rd+Hyattsville+MD+20784',
};
export const arrow = '<span aria-hidden="true">↗</span>';
export const orderButton = (label = 'Order pickup', cls = '') => `<a class="button ${cls}" href="${business.order}">${label} ${arrow}</a>`;
export const cta = () => `<section class="order-banner"><div class="wrap order-banner-inner"><div><span class="eyebrow">YOUR NEXT GOOD MEAL STARTS HERE</span><h2>Less scrolling.<br>More <em>tacos.</em></h2></div><div><p>Pick your favorites. Order online.<br>We’ll see you on Annapolis Road.</p>${orderButton('Let’s eat', 'button-cream')}<span class="small-note">Online ordering & checkout on Toast</span></div></div></section>`;
