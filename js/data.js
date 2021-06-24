import { getRandomPositiveFloat, getRandomPositiveInt, getRandomArrayElement, getRandomLengthArray } from './utils.js';

const avatars = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const createSimilarAd = () => ({
  author: {
    avatar: `img/avatars/user${getRandomArrayElement(avatars)}.png`,
  },
  offer: {
    title: 'Cдам 1-комнатную квартиру',
    address: `${getRandomPositiveFloat(35.65000, 35.7000, 5)  }, ${  getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
    price: getRandomPositiveInt(2000, 15000),
    type: getRandomArrayElement(types),
    rooms: getRandomPositiveInt(1, 5),
    guests: getRandomPositiveInt(1, 10),
    checkin: getRandomArrayElement(times),
    checkout: getRandomArrayElement(times),
    features: getRandomLengthArray(features),
    description: 'светлое приятное помещение',
    photos: getRandomLengthArray(photos),
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.7000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  },
});

export { createSimilarAd };
