<template>
  <div class="flex flex-col md:flex-row gap-4 p-4 h-full md:h-screen">
    <SearchCity @placeChanged="placeChanged" :selectedPlace="selectedPlace"/>
    <WeatherForecast :selectedPlace="selectedPlace"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
