function getRandomPositiveInt (min, max){
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (min, max, nuberOfDecimal=1){
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(nuberOfDecimal);
}

const getRandomArrayElement = (array) => array[getRandomPositiveInt(0, array.length - 1)];

const getRandomLengthArray = (array) => {
  const arr = new Array(getRandomPositiveInt(1, array.length -1));
  for (let index =0; index <arr.length; index ++){
    let value= getRandomArrayElement(array);
    while(arr.indexOf(value) >= 0){
      value= getRandomArrayElement(array);
    }
    arr[index ] = value;
  }
  return arr;
};

export {getRandomPositiveFloat, getRandomPositiveInt, getRandomArrayElement, getRandomLengthArray};
