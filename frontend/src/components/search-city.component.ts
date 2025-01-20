import store from '@/store';
import { MapPlace } from '@/types';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  public store = store;

  placeChanged(place: MapPlace) {
    const selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    store.commit('setSelectedPlace', selectedPlace);
  }

  onMapClick(event: any) {
    const place = {
      geometry: {
        location: {
          lat: () => event.latLng.lat(),
          lng: () => event.latLng.lng(),
        }
      }
    };
    this.placeChanged(place);
  }

}