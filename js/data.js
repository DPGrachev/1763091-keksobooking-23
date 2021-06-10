import {getRandomPositiveFloat, getRandomPositiveInt} from './utils.js';

const AVATARS = ['01','02','03','04','05','06','07','08','09','10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00' , '14:00'];
const FEAUTURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg' , 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_AD_COUNT = 10;

const getRandomArrayElement = (array) => array[getRandomPositiveInt(0, array.length - 1)];

const getRandomLengthArray = (array) => {
  const arr = new Array(getRandomPositiveInt(1, array.length -1));
  for (let i=0; i<arr.length; i++){
    let value= getRandomArrayElement(array);
    while(arr.indexOf(value) >= 0){
      value= getRandomArrayElement(array);
    }
    arr[i] = value;
  }
  return arr;
};

const createSimilarAd = () => ({
  author: {
    avatar: `img/avatars/user${getRandomArrayElement(AVATARS)}`,
  },
  offer: {
    title: 'Cдам 1-комнатную квартиру',
    // в задании сказано: address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
    // я так и не понял что за маски {{location.x}}, {{location.y}}.
    address: `${getRandomPositiveFloat(35.65000, 35.7000, 5)  }, ${  getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
    price: getRandomPositiveInt(2000, 15000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInt(1, 5),
    guests: getRandomPositiveInt(1, 10),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomLengthArray(FEAUTURES),
    description: 'светлое приятное помещение',
    photos: getRandomLengthArray(PHOTOS) ,
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.7000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  },
});

const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());
export {similarAds};
