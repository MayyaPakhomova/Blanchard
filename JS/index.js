(function () {
  let menuBottom = document.querySelector('.header-menu-bottom');
  let bottomInner = menuBottom.querySelectorAll('.header-menu-bottom-inner');


  document.addEventListener("click", (event) => {
    for (i = 0; i < bottomInner.length; i++) {
      if (bottomInner[i].classList.contains('open')) {
        bottomInner[i].classList.remove('open');
      }
    }
    let headerLink = event.target.closest('li');
    if (!headerLink) return;
    if (headerLink.querySelector('.header-menu-bottom-inner')) {
      let headerMenu = headerLink.querySelector('.header-menu-bottom-inner');
      headerMenu.classList.add('open');
    }
  })

  document.addEventListener('keyup', (event) => {
    focused = document.querySelector(":focus");
    if ((event.keyCode == '09') && (focused.classList.contains('header-menu-bottom__item'))) {
      focused.addEventListener('keyup', (event) => {
        if ((event.keyCode == '13')) {
          for (i = 0; i < bottomInner.length; i++) {
            if (bottomInner[i].classList.contains('open')) {
              bottomInner[i].classList.remove('open');
            }
          }
          let header = focused.querySelector('.header-menu-bottom-inner');
          header.classList.add('open');
        }
      })
    }
  })

})();

// фокус
let focus = document.querySelectorAll('.focus');
for (let i = 0; i < focus.length; i++)
  focus[i].addEventListener('click', function () {
    focus[i].blur();
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
let headerMenuSearh = document.querySelector('.header-menu-searh');

headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-top-logo').classList.toggle('header-menu-top-logo--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-burger').classList.toggle('header-menu-burger--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__input').classList.toggle('header-menu-searh__input--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__btn').classList.toggle('header-menu-searh__btn--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  headerMenuSearh.classList.toggle('header-menu-searh--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu-searh__close').classList.toggle('header-menu-searh__close--active');

});
headerMenuSearh.addEventListener('click', function (elem) {
  elem.preventDefault();
  document.querySelector('.header-menu').classList.toggle('header-menu--active');
});
headerMenuSearh.addEventListener('click', function (elem) {
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
      if (window.matchMedia("(max-width:815px)").matches) {
        currentTab.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
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


// кнопка события

if (window.matchMedia("(max-width:920px)").matches) {
  document.querySelector('.events-slide-three').classList.add('events-slide-hidden')
}

let eventsBtn = document.querySelector('.events-btn')
let slideHidden = document.querySelectorAll('.events-slide-hidden');


eventsBtn.addEventListener('click', function () {
  eventsBtn.classList.toggle('events-btn--active');

});

for (let i = 0; i < slideHidden.length; i++)
  eventsBtn.addEventListener('click', function () {
    slideHidden[i].classList.toggle('events-slide--active')
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

let editionsCategoriesHeader = document.querySelector('.editions-categories-header');
editionsCategoriesHeader.addEventListener('click', function () {
  editionsCategoriesHeader.classList.toggle('editions-categories-header--active');
});
editionsCategoriesHeader.addEventListener('click', function () {
  document.querySelector('.design').classList.toggle('design--active');
});

let left = document.querySelectorAll('.edition-elem');
function f1() {
  for (let i = 0; i < left.length; i++) {
    left[i].classList.toggle('edition-elem--active');
  }
}
editionsCategoriesHeader.onclick = f1;


// инпут 25 000
// document.getElementById("input").onkeydown = function (e) {
//   if ((e.which >= 48 && e.which <= 57)
//     || (e.which >= 96 && e.which <= 105)
//     || e.which == 8 // backspace
//     || (e.which >= 37 && e.which <= 40)
//     || e.which == 46) {
//     return true;
//   } else {
//     return false;
//   }
// }



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
      iconLayout: 'default#image',
      iconImageHref: 'img/footer7/ring.png',
    })
  myPlacemarkWithContent = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {
    hintContent: '',
  }, {
    iconLayout: 'default#imageWithContent',
    iconImageHref: 'img/contacts/ring.png',
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


class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = [
      'a[href]',
      'input',
      'button',
      'select',
      'textarea',
      '[tabindex]'
    ];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-path]');
        if (clickedElement) {
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.gallery-modal-card-close')) {
          this.close();
          return;
        }
      }.bind(this));

      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }

      }.bind(this));

      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('gallery-modal-card') && !e.target.closest('.gallery-modal-card') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();

    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');

      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}

const modal = new Modal();

