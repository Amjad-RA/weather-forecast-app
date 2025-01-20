import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Watch } from 'vue-property-decorator';
import CardView from '@/components/core/CardView.vue';
import LabelView from './core/LabelView.vue';

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

  @Prop({ type: Object, required: true })
  public selectedPlace!: { lat: number; lng: number };

  public weatherData: any = null; // To store weather data
  public error: string | null = null; 

   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    if (!this.selectedPlace) {
      return;
    }
    if (this.selectedPlace) {
      this.fetchWeather(this.selectedPlace);
    }
  }

  @Watch('selectedPlace', { immediate: true, deep: true })
  onSelectedPlaceChange(newPlace: Place) {
    this.fetchWeather(newPlace);
  }

  async fetchWeather(place: Place) {
    try {
      this.error = null; // Reset error before the call
      const response = await this.weatherService.getWeatherForecast(place.lat, place.lng);
      this.weatherData = response;
    } catch (err) {
      this.error = 'Failed to fetch weather data. Please try again later.';
    }
  }

  

}

