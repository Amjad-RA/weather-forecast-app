<template>
  <div class="flex-1 border border-gray-300 p-4 rounded-xl shadow-md overflow-auto relative h-screen">
    <h3 class="text-2xl p-4 border-b font-bold">Weather forecast for City</h3>

    <!-- Error message if there was an issue fetching data -->
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

      <!-- Loading message if weather data is being fetched -->
      <div v-if="store.state.loading" class="loading">
      <p>Loading weather data...</p>
    </div>
    <!-- Display weather data if available -->
    <div v-else-if="weatherData && Object.keys(weatherData).length > 0" class="flex flex-col space-y-4">
      <div class="p-2 text-left">
        <LabelView label="Longitude" :value="weatherData.longitude"/>
        <LabelView label="Latitude" :value="weatherData.latitude"/>
        <LabelView label="Elevation" :value="weatherData.elevation"/>
      </div>
      <CardView label="Temperature" :value="`${weatherData.current_weather.temperature + '°C'}`" customClass="border-red-300"/>
      <CardView label="Wind Speed" :value="`${weatherData.current_weather.windspeed + ' km/h'}`" customClass="border-emerald-300"/>
      <CardView label="Wind Direction" :value="`${weatherData.current_weather.winddirection + '°'}`" customClass="border-amber-300"/>
      <LabelView label="Time" :value="weatherData.current_weather.time" class="text-xs absolute bottom-2" />
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>
<style>

</style>
