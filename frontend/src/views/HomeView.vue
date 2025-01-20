<template>
  <div class="flex flex-row flex-wrap gap-4 p-4 h-screen">
    <SearchCity @placeChanged="placeChanged" :selectedPlace="selectedPlace"/>
    <WeatherForecast :selectedPlace="selectedPlace"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
