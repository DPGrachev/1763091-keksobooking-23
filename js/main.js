import {mapInit,resetForm, renderSimilarAds} from './map.js';
import { disableForm, enableForm, setAdFormSubmit } from './form.js';
import {showAlert, debounce} from './utils.js';
import {getData} from './server.js';
import {openMessageSuccessSendForm, openMessageErrorSendForm} from './send-user-form.js';
import './validation.js';
import './map.js';
import {setAdsFilter} from './map-filter.js';

disableForm();
mapInit(enableForm);
const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;

getData(showAlert, (ads) => {
  renderSimilarAds(ads, SIMILAR_AD_COUNT);
  setAdsFilter(debounce(() => renderSimilarAds(ads, SIMILAR_AD_COUNT),RERENDER_DELAY));
});

setAdFormSubmit(
  () => {
    resetForm();
    openMessageSuccessSendForm();
  },
  () => openMessageErrorSendForm(),
);

