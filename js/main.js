const tabNavItems = document.querySelectorAll(".btn-block__item");
const tabContentItems = document.querySelectorAll(".choose-specialist__items");

for (const tabNavItem of tabNavItems) {
  tabNavItem.addEventListener("click", activeTab);
}

function activeTab() {
  for (const tabNavItem of tabNavItems) {
    tabNavItem.classList.remove("btn-block__item--active");
  }
  this.classList.add("btn-block__item--active");
  let tabName = this.getAttribute("data-variant");
  activeTabContent(tabName);
}

function activeTabContent(tabName) {
  for (const tabContentItem of tabContentItems) {
    tabContentItem.classList.remove("choose-specialist__items--active");
    if (tabContentItem.getAttribute("data-variant") === tabName) {
      tabContentItem.classList.add("choose-specialist__items--active");
    }
  }
}

//слайдер в разделе торо

const taroSwiper = new Swiper(".taro-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//слайдер в разделе астрологии

const astrologySwiper = new Swiper(".astrology-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//слайдер в разделе нумерологии

const numerologySwiper = new Swiper(".numerology-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//слайдер в разделе нумерологии1

const numerologySwiper1 = new Swiper(".numerology1-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//слайдер в разделе нумерологии

const numerologySwiper2 = new Swiper(".numerology2-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//слайдер в разделе нумерологии

const numerologySwiper3 = new Swiper(".numerology3-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
