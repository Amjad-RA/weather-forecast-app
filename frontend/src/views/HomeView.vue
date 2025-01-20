<template>
  <div class="flex space-x-4 p-4">
    <SearchCity @placeChanged="placeChanged" :selectedPlace="selectedPlace"/>
    <WeatherForecast :selectedPlace="selectedPlace"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
