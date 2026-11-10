// Hours are placeholders; confirm the real ones with the owner
// const creates variable
const openHour = 9; //9 a.m.
const closeHour = 18; // 6 p.m.

const now = new Date(); //new Date() gets current date and time from the visitor's device
const hour = now.getHours(); //getHours() pulls out just the hour from 0 to 23. so 6 p.m. is 18
const day =now.getDay();//getDay pulls out Days
const status = document.querySelector('#status');//document.querySelector('status') finds an element on the page. it uses same selectors as css

if (day === 0){                     // === means "is exactly equal to"
    status.textContent = 'Closed Sundays'; //textContent changes the text.
    status.classList.add('closed');
}else if (hour >= openHour && hour < closeHour){
    status.textContent = 'Open now · closes 6 p.m.';
    status.classList.add('open');
} else {
    status.textContent = 'Closed now · opens 9 a.m.';
    status.classList.add('closed');
}