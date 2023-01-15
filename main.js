// *** Header functions *** //
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// *** Map functions *** //

var map = L.map("map").setView([36.716103, 3.204905], 8);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([36.716103, 3.204905]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").closePopup();
var marker = L.marker([35.711202, -0.596015]).addTo(map);
marker.bindPopup("<b>Centre d&rsquo;Affaire Oran</b>.").closePopup();

// *** Swiper functions *** //

import Swiper from "swiper";
import "swiper/css/bundle";

// const swiper = new Swiper();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
