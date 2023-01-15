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
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

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

// **** Services functions **** //
const servicesContainer = document.querySelector(".services-container");
const service = document.querySelectorAll(".service");
const btnBack = document.querySelector(".back");
const clientTypeBtn = Array.from(
  document.querySelectorAll(".client-type_button")
);

clientTypeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnIndex = clientTypeBtn.indexOf(btn);
    const newClientTypeBtn = Array.from(clientTypeBtn);

    newClientTypeBtn.splice(btnIndex, 1);

    btn.parentElement.setAttribute("data-clicked", true);

    newClientTypeBtn.forEach((e) => {
      e.parentElement.classList.add("fade-out");

      e.parentElement.onanimationend = () => {};
      if (btn.innerText === "Professionels") {
        btn.parentElement.classList.add("translate-one");
      } else if (btn.innerText === "Entreprises") {
        btn.parentElement.classList.add("translate-two");
      } else if (btn.innerText === "Particuliers") {
        e.parentElement.style.display = "none";
      }
    });
    if (btn.innerText === "Professionels" || btn.innerText === "Entreprises") {
      btn.parentElement.onanimationend = () => {
        newClientTypeBtn.forEach((e) => {
          e.parentElement.style.display = "none";
          btn.parentElement.classList.remove("translate-one", "translate-two");
          servicesContainer.style.display = "grid";
          servicesContainer.classList.add("fade-in");
        });
      };
    } else if (btn.innerText === "Particuliers") {
      newClientTypeBtn.forEach((e) => {
        e.parentElement.style.display = "none";
        servicesContainer.style.display = "grid";
        servicesContainer.classList.add("fade-in");
      });
    }
    servicesContainer.onanimationend = () => {
      service.forEach((service) => {
        const serviceAttr = service.getAttributeNames();
        console.log(serviceAttr, btn.innerText);
        if (serviceAttr.includes(btn.innerText.toLowerCase())) {
          console.log(btn.innerText);
          service.style.display = "grid";
        }
      });
    };

    btnBack.style.display = "grid";
    btnBack.addEventListener("click", () => {
      window.location.href = "#services";
      window.location.reload();
    });
  });
});
