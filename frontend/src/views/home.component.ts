import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';

interface Place {
  lat: number;
  lng: number;
}

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  }
})

export default class HomeView extends Vue {
  selectedPlace: Place | null = {
    lat: 56.26156,
    lng: 9.500168,
  };

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
  }
}