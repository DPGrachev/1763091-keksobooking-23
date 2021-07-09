import { sendData } from './server.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const featureCheckbox = mapFilters.children;
const fieldset = adForm.querySelectorAll('fieldset');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  fieldset.forEach((element) => element.setAttribute('disabled', 'disabled'));
  mapFilters.classList.add('map__filters--disabled');
  for (const element of featureCheckbox) {
    element.setAttribute('disabled', 'disabled');
  }
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldset.forEach((element) => element.removeAttribute('disabled', 'disabled'));
  mapFilters.classList.remove('map__filters--disabled');
  for (const element of featureCheckbox) {
    element.removeAttribute('disabled', 'disabled');
  }
};

const setAdFormSubmit = (onSuccess,onFail) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

export {disableForm, enableForm, setAdFormSubmit};
