const priceForType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');

typeField.addEventListener('change', (evt) => {
  priceField.placeholder = priceForType[evt.target.value];
  priceField.min = priceForType[evt.target.value];
  priceField.setCustomValidity(`Значение должно быть больше или равно ${ priceField.min}`);
  priceField.reportValidity();
});

const titleField = document.querySelector('#title');
titleField.addEventListener('input', () => {
  if (titleField.validity.tooShort) {
    titleField.setCustomValidity('Заголовок должно состоять минимум из 30 символов');
  }else if(titleField.validity.tooLong){
    titleField.setCustomValidity('Заголовок должно состоять максимум из 100 символов');
  }else if(titleField.validity.valueMissing){
    titleField.setCustomValidity('Обязательное поле');
  }else{
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});

const roomNumberField = document.querySelector('#room_number');
const capacityField = document.querySelector('#capacity').children;

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

const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');

timeInField.addEventListener('change', (evt) => {
  timeOutField.value = evt.target.value;
});

timeOutField.addEventListener('change', (evt) => {
  timeInField.value = evt.target.value;
});
