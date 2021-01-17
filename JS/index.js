
document.querySelector('.header-menu-top-logo').click();

let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function () {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  }
} else {
  body.classList.add('mouse');
}


// Селект
const mySelekt = () => {
  const element = document.querySelector('.gallery-left-select__body');
  const choices = new Choices(element, {
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: ' ',
  });
}

mySelekt();




// SimpleBar 
new SimpleBar(document.querySelector('.header-menu-bottom-inner'), { autoHide: false },
);
new SimpleBar(document.querySelector('.header-menu-top-total-right__list'), { autoHide: false },
);




// Поиск
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-top-logo').classList.toggle('header-menu-top-logo--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-burger').classList.toggle('header-menu-burger--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__input').classList.toggle('header-menu-searh__input--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__btn').classList.toggle('header-menu-searh__btn--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh').classList.toggle('header-menu-searh--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__close').classList.toggle('header-menu-searh__close--active');

});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu').classList.toggle('header-menu--active');
});
document.querySelector('.header-menu-searh').addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header').classList.toggle('header--active');
});


// бургер меню

document.querySelector('.header-menu-burger').addEventListener('click', function () {
  document.querySelector('.header-menu-burger').classList.toggle('open-menu');

});
document.querySelector('.header-menu-burger').addEventListener('click', function () {
  document.querySelector('.header-menu-top-total').classList.toggle('open-menu');

});


// Галерея
let galSwiper = new Swiper('.gallery-right-swiper-container', {
  pagination: {
    el: '.gallery-right-swiper-button__pagination',
    type: 'fraction',
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

  },
  navigation: {
    nextEl: '.gallery-right-swiper-button__next',
    prevEl: '.gallery-right-swiper-button__prev'
  },
  slidesPerView: 1,
  watchOverflow: true,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 7,
  slidesPerColumn: 1,

  breakpoints: {
    300: {
      slidesPerView: 1,
      autoHeight: false,
      watchOverflow: true,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: 12,
      slidesPerColumn: 1,


    },
    500: {
      slidesPerView: 2,
      watchOverflow: true,
      spaceBetween: 34,
      slidesPerGroup: 2,
      initialSlide: 7,
      slidesPerColumn: 2,

    },
    1171: {
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 50,
      slidesPerGroup: 3,
      centeredSlides: false,
      initialSlide: 7,
      slidesPerColumn: 2,
    }
  },
});


// плавный скрол
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// Каталог
// аккордеон
$(function () {
  $("#accordion-one").accordion({
    heightStyle: "content",

  });
});

$(function () {
  $("#accordion-two").accordion({
    heightStyle: "content",

  });
});
$(function () {
  $("#accordion-three").accordion({
    heightStyle: "content",
  });
});
$(function () {
  $("#accordion-four").accordion({
    heightStyle: "content",

  });
});
$(function () {
  $("#accordion-five").accordion({
    heightStyle: "content",

  });
});


// табы
const tabsBtn = document.querySelectorAll(".catalog-header-tab__item");
const tabsItems = document.querySelectorAll(".catalog-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.italy').click();


const tabsPainter = document.querySelectorAll(".accordion-tabs");
const tabsItem = document.querySelectorAll(".accordion-tabs-item");

tabsPainter.forEach(onTabsClick);

function onTabsClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-painter");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsPainter.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItem.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}
document.querySelector('.girlan').click();


document.querySelector('.france').addEventListener('click', function () {
  document.querySelector('.fukes').click();
});
document.querySelector('.germany').addEventListener('click', function () {
  document.querySelector('.duders').click();
});
document.querySelector('.italy').addEventListener('click', function () {
  document.querySelector('.girlan').click();
});
document.querySelector('.russia').addEventListener('click', function () {
  document.querySelector('.andrey').click();
});
document.querySelector('.belgium').addEventListener('click', function () {
  document.querySelector('.yan').click();
});


// кнопки-флаги
const list = document.querySelectorAll('.catalog-header-tab__item')
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => { el.classList.remove('catalog-header-tab__item--active'); });
    item.classList.add('catalog-header-tab__item--active')
  })
});

// кнопка события
document.querySelector('.events-btn').addEventListener('click', function () {
  document.querySelector('.events-btn').classList.toggle('events-btn--active');

});

document.querySelector('.events-btn').addEventListener('click', function () {
  document.querySelector('.slide-four').classList.toggle('slide-four--active');

});

document.querySelector('.events-btn').addEventListener('click', function () {
  document.querySelector('.slide-five').classList.toggle('slide-five--active');

});

document.querySelector('.events-btn').addEventListener('click', function () {
  document.querySelector('.slide-six').classList.toggle('slide-six--active');

});
document.querySelector('.events-btn').addEventListener('click', function () {
  document.querySelector('.slide-three').classList.toggle('slide-three--active');

});

// слайдер события 
const slider = document.querySelector('.events-container');
let eventsSwiper;

function mobileSlider() {
  if (window.innerWidth <= 550 && slider.dataset.mobile == 'false') {
    eventsSwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 15,
      slideClass: 'events-slide',
      wrapperClass: 'events-wrapper',
      // bulletClass: 'events-bullet',
      pagination: {
        el: '.event-pagination',
      }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 550) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      eventsSwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});




// Издания
const sliders = document.querySelector('.editions-right-swiper-container');
let editionsSwiper;

function mobileSliders() {
  if (window.innerWidth > 723 && sliders.dataset.mobiles == 'false') {
    editionsSwiper = new Swiper(sliders, {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
      slideClass: 'editions-right-swiper-slide',
      wrapperClass: 'editions-right-swiper',
      pagination: {
        el: '.editions-right-swiper-button__pagination',
        type: 'fraction',
        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
      },
      navigation: {
        nextEl: '.editions-right-swiper-button__next',
        prevEl: '.editions-right-swiper-button__prev'
      },

      breakpoints: {
        722: {
          spaceBetween: 33,
          slidesPerView: 2,
        },
        1001: {
          slidesPerView: 2,
          spaceBetween: 49,
        },
        1700: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 50,
        }
      }
    });

    sliders.dataset.mobile = 'true';
  }

  if (window.innerWidth <= 723) {
    sliders.dataset.mobile = 'false';
    if (sliders.classList.contains('swiper-container-initialized')) {
      editionsSwiper.destroy();
    }
  }
}

mobileSliders()

window.addEventListener('resize', () => {
  mobileSliders();
});

document.querySelector('.editions-categories-header').addEventListener('click', function () {
  document.querySelector('.editions-categories-header').classList.toggle('editions-categories-header--active');
});
document.querySelector('.editions-categories-header').addEventListener('click', function () {
  document.querySelector('.design').classList.toggle('design--active');
});

let left = document.querySelectorAll('.label');
function f1() {
  for (let i = 0; i < left.length; i++) {
    left[i].classList.toggle('label--active');
  }
}
document.querySelector('.editions-categories-header').onclick = f1;


// инпут 25 000
document.getElementById("input").onkeydown = function (e) {
  if ((e.which >= 48 && e.which <= 57)
    || (e.which >= 96 && e.which <= 105)
    || e.which == 8 // backspace
    || (e.which >= 37 && e.which <= 40)
    || e.which == 46) {
    return true;
  } else {
    return false;
  }
}



// Проекты
let projectsSwiper = new Swiper('.projects-bottom-container', {
  slidesPerView: 3,
  spaceBetween: 50,

  slideClass: 'projects-bottom-slide',
  wrapperClass: 'projects-bottom-wrapper',
  navigation: {
    nextEl: '.projects-bottom-prev',
    prevEl: '.projects-bottom-next'
  },
  breakpoints: {
    280: {
      spaceBetween: 33,
      slidesPerView: 1,
    },
    722: {
      spaceBetween: 33,
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

  }

})


new JustValidate('.contacts-form-wrapper', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,

    },
    phone: {
      required: true,
      phone: true,
    },
  },
});



ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.75846306898368, 37.601079499999905],
    zoom: 15,
    controls: []
  }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/footer7/ring.png',
    })

  myPlacemarkWithContent = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {
    hintContent: '',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'img/contacts/ring.png',
    // Размеры метки.
    iconImageSize: [20, 20],

  });


  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      position: { right: 0, top: 100 },
      size: "small"
    }
  });
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: { right: 0, top: 170 },
    }
  });
  myMap.controls.add(zoomControl);
  myMap.controls.add(geolocationControl);
  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
  myMap.behaviors.disable('scrollZoom')
});



const btns = document.querySelectorAll('.gallery-swiper-slide');
const modalOverlay = document.querySelector('.gallery-right-modal ');
const modals = document.querySelectorAll('.gallery-modal-card');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery-modal-card--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery-modal-card--visible');
    modalOverlay.classList.add('gallery-right-modal--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('gallery-right-modal--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery-modal-card--visible');
    });
  }
});
// document.querySelector('.gallery-modal-card-close').addEventListener('click', function () {
//   classList.remove('gallery-modal-card--visible');
// });

let galleryRight = document.querySelectorAll('.gallery-modal-card-close');
function f2() {
  for (let i = 0; i < galleryRight.length; i++) {
    galleryRight[i].classList.remove('gallery-modal-card--visible');
    f2.preventDefault();
  }
}
document.querySelector('.gallery-modal-card-close').onclick = f2;


