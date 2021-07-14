const pricesForType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');
const titleField = document.querySelector('#title');
const roomNumberField = document.querySelector('#room_number');
const capacityField = document.querySelector('#capacity').children;
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const DEFAULT_AVATAR_IMAGE = avatarPreview.src;
const photoChooser = document.querySelector('#images');
const photoField = document.querySelector('.ad-form__photo');
const photoPreview = document.createElement('img');

const showPreviewImage = (imageInput, previewField) => {
  const file = imageInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewField.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const resetImage = () => {
  avatarPreview.src = DEFAULT_AVATAR_IMAGE;
  photoField.children[0].remove();
};

typeField.addEventListener('change', (evt) => {
  priceField.placeholder = pricesForType[evt.target.value];
  priceField.min = pricesForType[evt.target.value];
});

titleField.addEventListener('input', () => {
  if (titleField.validity.tooShort) {
    titleField.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
  }else if(titleField.validity.tooLong){
    titleField.setCustomValidity('Заголовок должен состоять максимум из 100 символов');
  }else if(titleField.validity.valueMissing){
    titleField.setCustomValidity('Обязательное поле');
  }else{
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});

roomNumberField.addEventListener('change', (evt) => {
  const eventValue = Number(evt.target.value);
  for (const option of capacityField){
    const optionValue = Number(option.value);
    if(optionValue > eventValue && eventValue !== 100){
      option.disabled='disabled';
      option.removeAttribute('selected');
    }else if(eventValue === 100) {
      option.removeAttribute('selected');
      option.disabled='disabled';
      if(optionValue === 100){
        option.removeAttribute('disabled');
        option.selected='selected';
      }
    }else{
      option.removeAttribute('disabled');
      option.selected='selected';
    }
  }
});

timeInField.addEventListener('change', (evt) => {
  timeOutField.value = evt.target.value;
});

timeOutField.addEventListener('change', (evt) => {
  timeInField.value = evt.target.value;
});


avatarChooser.addEventListener('change', () => {
  showPreviewImage(avatarChooser, avatarPreview);
});

photoChooser.addEventListener('change', () => {
  photoPreview.height = 70;
  photoPreview.width = 70;
  photoField.appendChild(photoPreview);
  showPreviewImage(photoChooser, photoPreview);
});

export {resetImage};
