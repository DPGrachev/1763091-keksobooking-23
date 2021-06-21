import { renderSimilarAds } from './similar_ads.js';
import { createSimilarAd } from './data.js';
import { disableForm, activateForm } from './form.js';

const SIMILAR_AD_COUNT = 1;
const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());


renderSimilarAds(similarAds);
disableForm();
activateForm();
