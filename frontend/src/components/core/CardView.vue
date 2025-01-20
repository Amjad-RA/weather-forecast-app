<template>
  <div :class="['border', 'p-4', 'rounded', 'w-full', 'flex', 'flex-row', customClass]">
    <span class="text-xl w-full text-left">{{ label }}</span>
    <span class="text-2xl font-bold w-full text-right">{{ value }}</span>
  </div>
</template>

<script lang="ts" src="./card.component.ts"></script>