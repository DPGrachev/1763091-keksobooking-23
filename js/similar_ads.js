import { createSimilarAd, SIMILAR_AD_COUNT, AD_TYPE_TRANSLATE } from './data.js';

const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());
const similarAdList = document.querySelector('#map-canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const enterTemplateValue = (templateBlock, value) => {
  if (value) {
    templateBlock.textContent = value;
  } else {
    templateBlock.classList.add('hidden');
  }
};

const enterTemplateImage = (object) => {
  if (object.offer.photos && object.offer.photos.length > 1) {
    for (let index = 0; index < object.offer.photos.length; index++) {
      const newPhoto = similarAdTemplate.querySelector('.popup__photo').cloneNode(true);
      newPhoto.src = object.offer.photos[index];
      similarAdTemplate.querySelector('.popup__photos').appendChild(newPhoto);
    }
    similarAdTemplate.querySelector('.popup__photo').remove();
  } else if (object.offer.photos) {
    similarAdTemplate.querySelector('.popup__photo').src = object.offer.photos;
  } else {
    similarAdTemplate.querySelector('.popup__photos').classList.add('hidden');
  }
};

const showSimilarAds = () => {
  similarAds.forEach((ad) => {
    const featuresClass = ad.offer.features.map((feature) => `popup__feature--${feature}`);

    enterTemplateValue(similarAdTemplate.querySelector('.popup__title'), ad.offer.title);
    enterTemplateValue(similarAdTemplate.querySelector('.popup__text--address'), ad.offer.address);
    enterTemplateValue(similarAdTemplate.querySelector('.popup__text--price'), ad.offer.price);
    enterTemplateValue(similarAdTemplate.querySelector('.popup__type'), AD_TYPE_TRANSLATE[ad.offer.type]);
    enterTemplateValue(similarAdTemplate.querySelector('.popup__text--capacity'), `${ad.offer.rooms  } комнаты для ${  ad.offer.guests } гостей`);
    enterTemplateValue(similarAdTemplate.querySelector('.popup__text--time'), `Заезд после ${  ad.offer.checkin  }, выезд до ${  ad.offer.checkout}`);
    similarAdTemplate.querySelectorAll('.popup__feature').forEach((item) => {
      const feature = item.classList[1];
      if (!featuresClass.includes(feature)) {
        item.remove();
      }
    });
    enterTemplateValue(similarAdTemplate.querySelector('.popup__description'), ad.offer.description);
    enterTemplateImage(ad);
    similarAdTemplate.querySelector('.popup__avatar').src = ad.author.avatar;

    const similarAd = similarAdTemplate.cloneNode(true);
    similarAdList.appendChild(similarAd);
  });
};
export { showSimilarAds };
