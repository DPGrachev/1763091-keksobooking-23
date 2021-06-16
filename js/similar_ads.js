import { createSimilarAd, SIMILAR_AD_COUNT } from './data.js';

const similarAds = new Array(SIMILAR_AD_COUNT).fill('').map(() => createSimilarAd());
similarAds.forEach((ad) => {
  const similarAdList = document.querySelector('#map-canvas');
  const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');
  const featuresClass = ad.offer.features.map((feature) => `popup__feature--${feature}`);

  similarAdTemplate.querySelector('.popup__title').textContent = ad.offer.title;
  similarAdTemplate.querySelector('.popup__text--address').textContent = ad.offer.address;
  similarAdTemplate.querySelector('.popup__text--price').textContent = ad.offer.price;
  similarAdTemplate.querySelector('.popup__type').textContent = ad.offer.type;
  similarAdTemplate.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms  } комнаты для ${  ad.offer.guests } гостей`;
  similarAdTemplate.querySelector('.popup__text--time').textContent = `Заезд после${  ad.offer.checkin  }, выезд до ${  ad.offer.checkout}`;
  similarAdTemplate.querySelectorAll('.popup__feature').forEach((item) => {
    const modifie = item.classList[1];
    if (!featuresClass.includes(modifie)) {
      item.remove();
    }
  });
  similarAdTemplate.querySelector('.popup__description').textContent = ad.offer.description;
  if(ad.offer.photos.length > 1){
    for(let index=0; index< ad.offer.photos.length; index++){
      const newPhoto = similarAdTemplate.querySelector('.popup__photo').cloneNode(true);
      newPhoto.src = ad.offer.photos[index];
      similarAdTemplate.querySelector('.popup__photos').appendChild(newPhoto);
    }
    similarAdTemplate.querySelector('.popup__photo').remove();
  }else{
    similarAdTemplate.querySelector('.popup__photo').src = ad.offer.photos;
  }
  similarAdTemplate.querySelector('.popup__avatar').src = ad.author.avatar;

  const similarAd = similarAdTemplate.cloneNode(true);
  similarAdList.appendChild(similarAd);
});


// остановился на .popup__photos
