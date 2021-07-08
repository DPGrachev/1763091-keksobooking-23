import {isEscEvent} from './utils.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const onMessageErrorSendClick = () => {
  closeMessageErrorSendForm();
};

const onMessageErrorSendEskKeydown = (evt) => {
  if(isEscEvent(evt)){
    evt.preventDefault();
    closeMessageErrorSendForm();
  }
};

const closeMessageErrorSendForm = () => {
  errorMessage.remove();
  document.removeEventListener('click', onMessageErrorSendClick);
  document.removeEventListener('keydown', onMessageErrorSendEskKeydown);
};

const openMessageErrorSendForm = () => {
  document.body.append(errorMessage);
  document.addEventListener('click', onMessageErrorSendClick);
  document.addEventListener('keydown', onMessageErrorSendEskKeydown);
};

const onMessageSuccessSendClick = () => {
  closeMessageSuccessSendForm();
};

const onMessageSuccessSendEskKeydown = (evt) => {
  if(isEscEvent(evt)){
    evt.preventDefault();
    closeMessageSuccessSendForm();
  }
};

const openMessageSuccessSendForm = () => {
  document.body.append(successMessage);
  document.addEventListener('click', onMessageSuccessSendClick);
  document.addEventListener('keydown', onMessageSuccessSendEskKeydown);
};

const closeMessageSuccessSendForm = () => {
  successMessage.remove();
  document.removeEventListener('click', onMessageSuccessSendClick);
  document.removeEventListener('keydown', onMessageSuccessSendEskKeydown);
};

export {openMessageSuccessSendForm, openMessageErrorSendForm};
