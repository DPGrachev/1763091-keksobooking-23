
function getRundomInt (min, max){
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)+ min);
  }
  return 'Данные указаны неверно: допускаются только положительные числа, расположенные от меньшего к большему';
}

getRundomInt(10,100);

function getRundomСoordinates (min, max, nuberOfDecimal){
  if (min >= 0 && min < max){
    return (Math.random()*(max - min)+ min).toFixed(nuberOfDecimal);
  }
  return 'Данные указаны неверно: допускаются только положительные числа, расположенные от меньшего к большему';
}

getRundomСoordinates(1,100,3);
