<script setup></script>

<template>
  <button class="btn">
    <slot>Click me</slot>
  </button>
</template>

<style scoped>
.btn {
  color: theme('colors.zinc.900');
  position: relative;
  border: 2px solid theme('colors.zinc.900');
  padding: 0.4em 1.25em;
  z-index: 1;
  @apply text-fr-body font-semibold uppercase;
}

.btn::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
  background-color: theme('colors.zinc.900');
  z-index: -1;
}

.btn:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.btn:hover {
  color: theme('colors.zinc.50');
  transition: color 0.2s ease-in-out;
}
</style>
