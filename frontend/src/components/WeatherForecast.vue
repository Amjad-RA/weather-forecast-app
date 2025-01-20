<template>
  <div class="flex-1 border border-gray-300 p-4 rounded-xl shadow-md h-screen">
    <h3 class="text-2xl p-4 border-b font-bold">Weather forecast for City</h3>

    <!-- Display weather data if available -->
    <div v-if="weatherData" class="flex flex-col space-y-4">
      <div class="p-2 text-left">
        <p class="text">Longitude: <span class="font-bold">{{ weatherData.longitude }}</span></p>
        <p class="text">Latitude: <span class="font-bold">{{ weatherData.latitude }}</span></p>
        <p class="text">Elevation: <span class="font-bold">{{ weatherData.elevation }}</span></p>
      </div>
      <div class="border border-red-300 p-2 rounded w-full">
        <p class="text-xl">Temperature</p>
        <span class="text-2xl font-bold">{{ weatherData.current_weather.temperature }}°C</span>
      </div>
      <div class="border border-emerald-300 p-2 rounded w-full">
        <p class="text-xl">Wind Speed</p>
        <p class="text-2xl font-bold">{{ weatherData.current_weather.windspeed }} km/h</p>
      </div>
      <div class="border border-amber-300 p-2 rounded w-full">
        <p class="text-xl">Wind Direction</p>
        <span class="text-2xl font-bold">{{ weatherData.current_weather.winddirection }}°C</span>
      </div>
      <p>Time: {{ weatherData.current_weather.time }}</p>
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
