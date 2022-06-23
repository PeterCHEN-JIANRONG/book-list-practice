<template>
  <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor"
  :style="`width: ${size}px; height: ${size}px;`">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
</svg>
</template>
<script setup>
defineProps({
  size: {
    type: String,
    default: '24',
  },
});
</script>
