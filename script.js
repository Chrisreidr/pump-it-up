const menu = document.querySelector('.toggle');
const navListItems = document.querySelectorAll('.nav-list');
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString('en-US');
const displayDate = document.querySelector('.display-date');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const funClock = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees =((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(funClock, 1000);

displayDate.textContent = currentDate;



menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navListItems.forEach((x) => {
        x.classList.toggle('hidden');
        // x.classList.toggle('nav-transform');
    })
})
