import { createAdElement } from './similar-ads.js';
import {compareAds} from './map-filter.js';

const TOKYO_COORDINATES = {
  lat: 35.6895,
  lng: 139.692,
};
const mainPinSetting = {
  iconUrl: 'img/main-pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],
};
const similarAdPinSetting = {
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};
const MAP_ZOOM = 11;

const map = L.map('map-canvas')
  .setView({
    lat: TOKYO_COORDINATES.lat,
    lng: TOKYO_COORDINATES.lng,
  }, MAP_ZOOM);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapInit = (onLoad) => {
  map.on('load', onLoad());
};

const mainPinIcon = L.icon({
  iconUrl: mainPinSetting.iconUrl,
  iconSize: mainPinSetting.iconSize,
  iconAnchor: mainPinSetting.iconAnchor,
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_COORDINATES.lat,
    lng: TOKYO_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const similarAdsMarkerGroup = L.layerGroup().addTo(map);
const addressField = document.querySelector('#address');

mainPinMarker.addTo(map);
addressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5) }, ${  mainPinMarker.getLatLng().lng.toFixed(5)}`;

mainPinMarker.on('moveend', (evt) => {
  addressField.value = `${evt.target.getLatLng().lat.toFixed(5) }, ${  evt.target.getLatLng().lng.toFixed(5)}`;
});
const createSimilarAdMarker = (advertise) => {
  const similarAdPinIcon = L.icon({
    iconUrl: similarAdPinSetting.iconUrl,
    iconSize: similarAdPinSetting.iconSize,
    iconAnchor: similarAdPinSetting.iconAnchor,
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

const renderSimilarAds = (ads, adCount) => {
  similarAdsMarkerGroup.clearLayers();
  ads
    .slice()
    .sort(compareAds)
    .slice(0, adCount)
    .forEach((advertise) => {
      createSimilarAdMarker(advertise);
    });
};

const resetMap = () => {
  map
    .setView({
      lat: TOKYO_COORDINATES.lat,
      lng: TOKYO_COORDINATES.lng,
    }, MAP_ZOOM)
    .closePopup();
  mainPinMarker.setLatLng(TOKYO_COORDINATES);
  addressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5) }, ${  mainPinMarker.getLatLng().lng.toFixed(5)}`;
};

export {mapInit, renderSimilarAds, resetMap};
