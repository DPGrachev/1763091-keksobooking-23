import {mapInit, createSimilarAdMarker,resetForm} from './map.js';
import { disableForm, enableForm, setAdFormSubmit } from './form.js';
import {showAlert} from './utils.js';
import {getData} from './server.js';
import {openMessageSuccessSendForm, openMessageErrorSendForm} from './send_user_form.js';
import './validation.js';
import './map.js';

disableForm();
mapInit(enableForm);
const SIMILAR_AD_COUNT = 10;

getData(showAlert, (ads) => {
  ads
    .slice(0, SIMILAR_AD_COUNT)
    .forEach((advertise) => {
      createSimilarAdMarker(advertise);
    });
});

setAdFormSubmit(
  () => {
    resetForm();
    openMessageSuccessSendForm();
  },
  () => openMessageErrorSendForm(),
);
