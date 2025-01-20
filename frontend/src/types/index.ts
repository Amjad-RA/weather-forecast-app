type Place = {
  lat: number;
  lng: number;
};

type WeatherData = {
  current_weather: {
    temperature: number;
    time: string;
    winddirection: number;
    windspeed: number;
  };
  elevation: number;
  latitude: number;
  longitude: number;
};

type MapPlace = {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
};

export { Place, WeatherData, MapPlace};