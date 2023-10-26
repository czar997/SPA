import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    speed: 1200,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
  // Находим элементы DOM
  const pickupButton = document.querySelector('.pickup-appartment__btn');
  const rightTop = document.querySelector('.main__wrapper-right_top');
  const apartmentForm = document.querySelector('.apartment-selection__form');
  const textToHide = document.querySelectorAll('.main__wrapper-left h1, .main__wrapper-left p');
  const mainWrapperLeft = document.querySelector('.main__wrapper-left_content');
  const facadeBlock = document.querySelector('.facade__block');
  const apartmentMain = document.querySelector('.apartment-selection__main');
  const ctaBlock = document.querySelector('.cta');
  const ctaBtnForward1 = document.querySelector('.cta__btn-forward1');
  const ctaBtnForward2 = document.querySelector('.cta__btn-forward2');
  const ctaBtnForward3 = document.querySelector('.cta__btn-forward3');
  const ctaBtnForward4 = document.querySelector('.cta__btn-forward4');
  const ctaBtnForward5 = document.querySelector('.cta__btn-forward5');
  const roofsBlock = document.querySelector('.roofs__block');
  const gateBlock = document.querySelector('.gate__block');
  const budgetBlock = document.querySelector('.budget__block');
  const hedgeEntryBlock = document.querySelector('.hedge-entry__block');
  const entryRoadBlock = document.querySelector('.entryroad__block');
  const ctaFormRooms = document.querySelector('.cta__form-rooms');
  const ctaFormDates = document.querySelector('.cta__form-dates');
  const ctaFormBudget = document.querySelector('.cta__form-budget');
  const ctaFormOptions = document.querySelector('.cta__form-options');
  const ctaFormResult = document.querySelector('.cta__form-result');
  const ctaFormFinishing = document.querySelector('.cta__form-finishing');
  const ctaBtns = document.querySelector('.cta__btns');
  const ctaBtnsForBack1 = document.querySelector('.cta__btns-forback1');
  const ctaBtnBackward1 = document.querySelector('.cta__btn-backward1');
  const ctaBtnsForBack2 = document.querySelector('.cta__btns-forback2');
  const ctaBtnsForBack3 = document.querySelector('.cta__btns-forback3');
  const ctaBtnsForBack4 = document.querySelector('.cta__btns-forback4');
  const ctaBtnBackward2 = document.querySelector('.cta__btn-backward2');
  const ctaBtnBackward3 = document.querySelector('.cta__btn-backward3');
  const ctaBtnBackward4 = document.querySelector('.cta__btn-backward4');
  const btnResult = document.querySelector('.result__btn');

  // первая мэйн кнопка
  pickupButton.addEventListener('click', function () {
    rightTop.style.transition = 'height 0.5s';
    rightTop.style.height = '0';
    if (window.innerWidth < 800) {
      apartmentForm.style.height = 'unset';
    } else {
      apartmentForm.style.height = '100%';
    }
    setTimeout(function () {
      rightTop.style.display = 'none';
    }, 500);
    textToHide.forEach((element) => {
      element.style.transition = 'opacity 0.5s';
      element.style.opacity = 0;
    });
    setTimeout(function () {
      textToHide.forEach((element) => {
        element.style.display = 'none';
      });
    }, 500);
    setTimeout(function () {
      mainWrapperLeft.style.transition = 'height 0.5s, padding 0.5s';
      mainWrapperLeft.style.height = '0';
      mainWrapperLeft.style.padding = '0';
      setTimeout(function () {
        mainWrapperLeft.style.display = 'none';
        facadeBlock.style.display = 'block';
        facadeBlock.style.left = '0';
      }, 400);
    }, 500);
    apartmentMain.style.transition = 'opacity 0.5s';
    apartmentMain.style.opacity = 0;
    setTimeout(function () {
      apartmentMain.style.display = 'none';
      ctaBlock.style.display = 'flex';
      setTimeout(function () {
        ctaBlock.style.transition = 'opacity 0.5s';
        ctaBlock.style.opacity = 1;
      }, 400);
    }, 500);
  });
  // кнопки 2 формы начало
  ctaBtnForward1.addEventListener('click', function () {
    facadeBlock.style.left = '-100%';
    roofsBlock.style.left = '0';
    ctaFormRooms.style.opacity = 0;
    ctaBtnForward1.style.opacity = 0;
    setTimeout(function () {
      ctaFormRooms.style.display = 'none';
      ctaFormDates.style.display = 'flex';
      ctaBtnForward1.style.display = 'none';
      ctaBtnsForBack1.style.display = 'flex';
      setTimeout(function () {
        ctaFormDates.style.opacity = 1;
        ctaBtnsForBack1.style.opacity = 1;
      }, 200);
    }, 200);
  });
  ctaBtnBackward1.addEventListener('click', function () {
    roofsBlock.style.left = '-100%';
    facadeBlock.style.left = '0';
    ctaFormDates.style.opacity = 0;
    ctaBtnsForBack1.style.opacity = 0;
    setTimeout(function () {
      ctaFormDates.style.display = 'none';
      ctaFormRooms.style.display = 'flex';
      ctaBtnsForBack1.style.display = 'none';
      ctaBtnForward1.style.display = 'flex';
      setTimeout(function () {
        ctaFormRooms.style.opacity = 1;
        ctaBtnForward1.style.opacity = 1;
      }, 200);
    }, 200);
  });
  // кнопки 2 формы конец

  // кнопки 3 формы начало
  ctaBtnForward2.addEventListener('click', function () {
    roofsBlock.style.left = '-100%';
    gateBlock.style.left = '0';
    ctaFormDates.style.opacity = 0;
    ctaBtnsForBack1.style.opacity = 0;
    setTimeout(function () {
      ctaFormDates.style.display = 'none';
      ctaFormFinishing.style.display = 'flex';
      ctaBtnsForBack1.style.display = 'none';
      ctaBtnsForBack2.style.display = 'flex';
      setTimeout(function () {
        ctaFormFinishing.style.opacity = 1;
        ctaBtnsForBack2.style.opacity = 1;
      }, 200);
    }, 200);
  });
  ctaBtnBackward2.addEventListener('click', function () {
    gateBlock.style.left = '-100%';
    roofsBlock.style.left = '0';
    ctaFormFinishing.style.opacity = 0;
    ctaBtnsForBack2.style.opacity = 0;
    setTimeout(function () {
      ctaFormFinishing.style.display = 'none';
      ctaFormDates.style.display = 'flex';
      ctaBtnsForBack2.style.display = 'none';
      ctaBtnsForBack1.style.display = 'flex';
      setTimeout(function () {
        ctaFormDates.style.opacity = 1;
        ctaBtnsForBack1.style.opacity = 1;
      }, 200);
    }, 200);
  });
  // кнопки 3 формы конец

  // кнопки 4 формы начало
  ctaBtnForward3.addEventListener('click', function () {
    gateBlock.style.left = '-100%';
    budgetBlock.style.left = '0';
    ctaFormFinishing.style.opacity = 0;
    ctaBtnsForBack2.style.opacity = 0;
    setTimeout(function () {
      ctaFormFinishing.style.display = 'none';
      ctaFormBudget.style.display = 'flex';
      ctaBtnsForBack2.style.display = 'none';
      ctaBtnsForBack3.style.display = 'flex';
      setTimeout(function () {
        ctaFormBudget.style.opacity = 1;
        ctaBtnsForBack3.style.opacity = 1;
      }, 200);
    }, 200);
  });
  ctaBtnBackward3.addEventListener('click', function () {
    budgetBlock.style.left = '-100%';
    gateBlock.style.left = '0';
    ctaFormBudget.style.opacity = 0;
    ctaBtnsForBack3.style.opacity = 0;
    setTimeout(function () {
      ctaFormBudget.style.display = 'none';
      ctaFormFinishing.style.display = 'flex';
      ctaBtnsForBack3.style.display = 'none';
      ctaBtnsForBack2.style.display = 'flex';
      setTimeout(function () {
        ctaFormFinishing.style.opacity = 1;
        ctaBtnsForBack2.style.opacity = 1;
      }, 200);
    }, 200);
  });
  // кнопки 4 формы конец

  // кнопки 5 формы начало
  ctaBtnForward4.addEventListener('click', function () {
    budgetBlock.style.left = '-100%';
    hedgeEntryBlock.style.left = '0';
    ctaFormBudget.style.opacity = 0;
    ctaBtnsForBack3.style.opacity = 0;
    setTimeout(function () {
      ctaFormBudget.style.display = 'none';
      ctaFormOptions.style.display = 'flex';
      ctaBtnsForBack3.style.display = 'none';
      ctaBtnsForBack4.style.display = 'flex';
      setTimeout(function () {
        ctaFormOptions.style.opacity = 1;
        ctaBtnsForBack4.style.opacity = 1;
      }, 200);
    }, 200);
  });
  ctaBtnBackward4.addEventListener('click', function () {
    hedgeEntryBlock.style.left = '-100%';
    budgetBlock.style.left = '0';
    ctaFormOptions.style.opacity = 0;
    ctaBtnsForBack4.style.opacity = 0;
    setTimeout(function () {
      ctaFormOptions.style.display = 'none';
      ctaFormBudget.style.display = 'flex';
      ctaBtnsForBack4.style.display = 'none';
      ctaBtnsForBack3.style.display = 'flex';
      setTimeout(function () {
        ctaFormBudget.style.opacity = 1;
        ctaBtnsForBack3.style.opacity = 1;
      }, 200);
    }, 200);
  });
  // кнопки 5 формы конец

  // кнопки 6 формы конец
  ctaBtnForward5.addEventListener('click', function () {
    hedgeEntryBlock.style.left = '-100%';
    entryRoadBlock.style.left = '0';
    ctaFormOptions.style.opacity = 0;
    ctaBtnsForBack4.style.opacity = 0;
    setTimeout(function () {
      ctaBtns.style.marginTop = '0';
      ctaFormOptions.style.display = 'none';
      ctaFormResult.style.display = 'flex';
      ctaBtnsForBack4.style.display = 'none';
      btnResult.style.display = 'flex';
      setTimeout(function () {
        ctaFormResult.style.opacity = 1;
        btnResult.style.opacity = 1;
      }, 200);
    }, 200);
  });
  // кнопки 6 формы конец
});
