const NavBar = document.querySelector("#bars");
const NavLinks = document.querySelector("#navLinks");
const text = document.querySelector("#text");
const displayDate = document.querySelector(".header_and_hero_section_header");
const dateAndTime = document.querySelector(
  ".header_and_hero_section_header_navigation_number"
);
const LoadEvenListerners = () => {
  NavBar.addEventListener("click", toogleNavs);
};

const toogleNavs = () => {
  NavLinks.classList.toggle("show");
  NavBar.classList.toggle("active");
};

LoadEvenListerners();

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "AMOS";
    text.style.fontSize = "4.5rem";
  }, 0);
  setTimeout(() => {
    text.textContent = "DEVELOPER";
  }, 5000);
  setTimeout(() => {
    text.textContent = "DESIGNER";
  }, 10000);
};

textLoad();
setInterval(textLoad, 12000);

const today = new Date();

const dayOfWeek = today.getDay();

// Array of day names
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the name of the day
const dayName = daysOfWeek[dayOfWeek].toUpperCase();

const time = `${new Date().getUTCHours()} : ${new Date().getUTCMinutes()} : ${new Date().getUTCSeconds()}`;

const html = `
<div class="flex date_and_time">
<h4 data-testid="currentDay">Today is ${dayName}</h4>
<h3 data-testid="currentTimeUTC">${time}</h3>

</div>
`;

displayDate.insertAdjacentHTML("afterbegin", html);

console.log(time);

// NavLinks.insertAdjacentHTML("beforeend", <h2>${time}</h2>); //
