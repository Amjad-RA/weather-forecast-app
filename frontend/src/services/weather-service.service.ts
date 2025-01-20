import { WeatherData } from '@/types';
import * as backendApi from '../shared/backend-api';

export default class WeatherService {

  getWeatherForecast(lat: number, lng: number): Promise<WeatherData> {
    return backendApi.get('weather/forecast', {lat, lng});
  }

}
