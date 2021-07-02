import { createAdElement } from './similar_ads.js';
import { disableForm, enableForm } from './form.js';

disableForm();

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

const similarAdsMarkerGroup = L.layerGroup().addTo(map);
const addressField = document.querySelector('#address');
addressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5) }, ${  mainPinMarker.getLatLng().lng.toFixed(5)}`;

mainPinMarker.on('moveend', (evt) => {
  addressField.value = `${evt.target.getLatLng().lat.toFixed(5) }, ${  evt.target.getLatLng().lng.toFixed(5)}`;
});

const createSimilarAdMarker = (advertise) => {
  const similarAdPinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const similarAdMarker = L.marker(
    {
      lat: advertise.location.lat,
      lng: advertise.location.lng,
    },
    {
      icon: similarAdPinIcon,
    },
  );

  similarAdMarker
    .addTo(similarAdsMarkerGroup)
    .bindPopup(
      createAdElement(advertise),
    );
};

export {createSimilarAdMarker};
