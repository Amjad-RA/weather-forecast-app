<template>
  <div class="p-4 border border-gray-200 rounded-lg">
    <h3>Weather forecast for {{ weatherData ? weatherData.latitude : 'City' }}</h3>

    <!-- Display weather data if available -->
    <div v-if="weatherData">
      <p>Temperature: {{ weatherData.current_weather.temperature }}°C</p>
      <p>Time: {{ weatherData.current_weather.time }}</p>
      <p>Wind Speed: {{ weatherData.current_weather.windspeed }} km/h</p>
    </div>

    <!-- Loading message if weather data is being fetched -->
    <div v-else>
      <p>Loading weather data...</p>
    </div>

    <!-- Error message if there was an issue fetching data -->
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>
<style>

</style>
