import {createSimilarAdMarker} from './map.js';
import { createSimilarAd } from './data.js';
import './validation.js';


const SIMILAR_AD_COUNT = 10;
const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());


similarAds.forEach((advertise) => {
  createSimilarAdMarker(advertise);
});
