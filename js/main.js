import {createSimilarAd, SIMILAR_AD_COUNT} from './data.js';
import './similar_ads.js';

const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());
