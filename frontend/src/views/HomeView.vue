<template>
  <div class="home">
    <SearchCity @placeChanged="placeChanged" :selectedPlace="selectedPlace"/>
    <WeatherForecast :selectedPlace="selectedPlace"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
