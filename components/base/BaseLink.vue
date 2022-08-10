<script setup>
defineProps({
  important: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nuxt-link class="link uppercase font-semibold" :class="{ important: important }">
    <slot></slot>
  </nuxt-link>
</template>

<style scoped>
.link {
  color: theme('colors.zinc.900');
  position: relative;
  text-decoration: none;
}

.link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: theme('colors.zinc.900');
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.link:is(.router-link-exact-active)::before {
  transform-origin: left;
  transform: scaleX(1);
}

.important {
  border: 2px solid theme('colors.zinc.900');
  padding: 0.3em 0.8em;
  z-index: 1;
}

.important::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
  z-index: -1;
}

.important:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  z-index: -1;
}

.important:hover {
  color: theme('colors.zinc.50');
  transition: color 0.2s ease-in-out;
}

.important:is(.router-link-exact-active) {
  color: theme('colors.zinc.50');
}
</style>
