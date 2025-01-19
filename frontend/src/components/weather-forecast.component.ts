import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Watch } from 'vue-property-decorator';

interface Place {
  lat: number;
  lng: number;
}

@Options({
  props: {
    selectedPlace: Object,
  }
})

export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  @Prop({ type: Object, required: true })
  public selectedPlace!: { lat: number; lng: number };

  public weatherData: any = null; // To store weather data
  public error: string | null = null; 

   
  mounted() {
    console.log("***************", this.selectedPlace);
    
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    if (!this.selectedPlace) {
      return;
    }
    console.log("Selected Place on mount:", this.selectedPlace);
    if (this.selectedPlace) {
      this.fetchWeather(this.selectedPlace);
    }
  }

  @Watch('selectedPlace', { immediate: true, deep: true })
  onSelectedPlaceChange(newPlace: Place) {
    console.log('Selected Place updated:', newPlace);
    this.fetchWeather(newPlace);
  }

  async fetchWeather(place: Place) {
    try {
      this.error = null; // Reset error before the call
      console.log(`Fetching weather for: ${place.lat}, ${place.lng}`);
      const response = await this.weatherService.getWeatherForecast(place.lat, place.lng);
      this.weatherData = response;
      console.log('Weather Data:', this.weatherData);
    } catch (err) {
      console.error('Failed to fetch weather data:', err);
      this.error = 'Failed to fetch weather data. Please try again later.';
    }
  }

  

}

