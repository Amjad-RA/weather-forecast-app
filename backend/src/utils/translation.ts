import { ForecastModel } from "../services/weather.service";

export function getTranslatedWeatherData(result: any): ForecastModel | PromiseLike<ForecastModel> {
  return {
      latitude: result.data['latitude'],
      longitude: result.data['longitude'],
      elevation: result.data['elevation'],
      current_weather: {
          temperature: result.data['current_weather']['temperature'],
          windspeed: result.data['current_weather']['windspeed'],
          winddirection: result.data['current_weather']['winddirection'],
          weathercode: result.data['current_weather']['weathercode'],
          time: new Date(result.data['current_weather']['time'])
      }
  };
}