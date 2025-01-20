import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Watch } from 'vue-property-decorator';
import CardView from '@/components/core/CardView.vue';
import LabelView from './core/LabelView.vue';
import store from '@/store';
import { WeatherData } from '@/types';

interface Place {
  lat: number;
  lng: number;
}

@Options({
  props: {
    selectedPlace: Object,
  },
  components: {
    CardView,
    LabelView,
  },
})

export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  public weatherData: WeatherData | null = null; // To store weather data
  public error: string | null = null; 
  public store = store;

   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    if (!store.state.selectedPlace) {
      return;
    }
    if (store.state.selectedPlace) {
      this.fetchWeather(store.state.selectedPlace);
    }
  }

  @Watch('store.state.selectedPlace', { immediate: true, deep: true })
  onSelectedPlaceChange(newPlace: Place) {
    this.fetchWeather(newPlace);
  }

  async fetchWeather(place: Place) {
    try {
      store.commit('setLoading', true);
      this.error = null; // Reset error before the call
      const response = await this.weatherService.getWeatherForecast(place.lat, place.lng);
      this.weatherData = response;
      store.commit('setLoading', false);
    } catch (err) {
      this.error = 'Failed to fetch weather data. Please try again later.';
      store.commit('setLoading', false);
    }
  }
}

