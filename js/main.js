import { renderSimilarAds } from './similar_ads.js';
import { createSimilarAd } from './data.js';
import { disableForm, enableForm } from './form.js';
import './validation.js';

const SIMILAR_AD_COUNT = 1;
const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());


renderSimilarAds(similarAds);
disableForm();
enableForm();
