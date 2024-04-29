// Adding Earth Image to Header
const earthImg = document.createElement("img");
const header = document.querySelector("header");

earthImg.setAttribute("id", "earth-img");
earthImg.setAttribute("alt", "planet earth")
// Image by studiogstock on Freepik "https://www.freepik.com/free-vector/earth-planet-icon-isolated_136485618.htm#fromView=search&page=1&position=0&uuid=c83f5447-7e44-4400-91a7-e1cdeca6da2b">
earthImg.setAttribute("src","img/earth-vector.png");
header.appendChild(earthImg);

// Adding urls to hyperlinks
const action = document.querySelector(".action-call");
const actionLink = action.querySelector("a");
actionLink.setAttribute("href","https://www.earthday.org/the-climate-change-quiz/");
actionLink.setAttribute("target","_blank");


const events = document.querySelector(".events");
const eventsLink = events.querySelector("a");
eventsLink.setAttribute("href", "https://www.eventbrite.com/d/united-states/earth-day/");
eventsLink.setAttribute("target","_blank");

