import { disableForm, enableForm, setAdFormSubmit,  resetForm, setResetButtom } from './form.js';
import {openMessageSuccessSendForm, openMessageErrorSendForm} from './send-user-form.js';
import {mapInit, renderSimilarAds, resetMap} from './map.js';
import {setAdsFilter, reserMapFilter} from './map-filter.js';
import {showAlert, debounce} from './utils.js';
import {resetImage} from './validation.js';
import {getData} from './server.js';
import './validation.js';
import './map.js';

const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;

disableForm();
mapInit(() => {
  enableForm();
  setResetButtom(resetMap,reserMapFilter,resetImage);
});

getData(showAlert, (ads) => {
  renderSimilarAds(ads, SIMILAR_AD_COUNT);
  setAdsFilter(debounce(() => renderSimilarAds(ads, SIMILAR_AD_COUNT),RERENDER_DELAY));
});

setAdFormSubmit(
  () => {
    resetForm(resetMap);
    reserMapFilter();
    resetImage();
    openMessageSuccessSendForm();
  },
  () => openMessageErrorSendForm(),
);
