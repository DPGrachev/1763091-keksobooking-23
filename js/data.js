import { getRandomPositiveFloat, getRandomPositiveInt, getRandomArrayElement, getRandomLengthArray } from './utils.js';

const AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const FEAUTURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_AD_COUNT = 1;
const AD_TYPE_TRANSLATE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Дворец',
  hotel: 'Отель',
};

const createSimilarAd = () => ({
  author: {
    avatar: `img/avatars/user${getRandomArrayElement(AVATARS)}.png`,
  },
  offer: {
    title: 'Cдам 1-комнатную квартиру',
    address: `${getRandomPositiveFloat(35.65000, 35.7000, 5)  }, ${  getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
    price: getRandomPositiveInt(2000, 15000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInt(1, 5),
    guests: getRandomPositiveInt(1, 10),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomLengthArray(FEAUTURES),
    description: 'светлое приятное помещение',
    photos: getRandomLengthArray(PHOTOS),
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.7000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  },
});

export { createSimilarAd, SIMILAR_AD_COUNT, AD_TYPE_TRANSLATE };
