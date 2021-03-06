const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const adTypeTranslations = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const setTemplateValue = (templateBlock, value) => {
  if (value) {
    templateBlock.textContent = value;
  } else {
    templateBlock.classList.add('hidden');
  }
};

const setAdvertisementImage = (object, adElement) => {
  if (object.offer.photos && object.offer.photos.length > 1) {
    for (let index = 0; index < object.offer.photos.length; index++) {
      const newPhoto = adElement.querySelector('.popup__photo').cloneNode(true);
      newPhoto.src = object.offer.photos[index];
      adElement.querySelector('.popup__photos').appendChild(newPhoto);    }
    adElement.querySelector('.popup__photo').remove();
  } else if (object.offer.photos) {
    adElement.querySelector('.popup__photo').src = object.offer.photos;
  } else {
    adElement.querySelector('.popup__photos').classList.add('hidden');
  }
};

const createAdElement = (similarAd) => {
  const adElement = similarAdTemplate.cloneNode(true);

  setTemplateValue(adElement.querySelector('.popup__title'), similarAd.offer.title);
  setTemplateValue(adElement.querySelector('.popup__text--address'), similarAd.offer.address);
  setTemplateValue(adElement.querySelector('.popup__text--price'), similarAd.offer.price);
  setTemplateValue(adElement.querySelector('.popup__type'), adTypeTranslations[similarAd.offer.type]);
  setTemplateValue(adElement.querySelector('.popup__text--capacity'), `${similarAd.offer.rooms  } комнаты для ${  similarAd.offer.guests } гостей`);
  setTemplateValue(adElement.querySelector('.popup__text--time'), `Заезд после ${  similarAd.offer.checkin  }, выезд до ${  similarAd.offer.checkout}`);
  if(similarAd.offer.features){
    const featuresClass = similarAd.offer.features.map((feature) => `popup__feature--${feature}`);
    adElement.querySelectorAll('.popup__feature').forEach((item) => {
      if (!featuresClass.includes(item.classList[1])) {
        item.remove();
      }
    });
  }else{
    adElement.querySelectorAll('.popup__feature').forEach((item) => {
      item.remove();
    });
  }
  setTemplateValue(adElement.querySelector('.popup__description'), similarAd.offer.description);
  setAdvertisementImage(similarAd, adElement);
  adElement.querySelector('.popup__avatar').src = similarAd.author.avatar;
  return adElement;
};

export { createAdElement };
