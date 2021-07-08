const getData = (onFail, onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      onFail('При загрузке данных с сервера произошла ошибка');
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData,sendData};
