<script setup></script>

<template>
  <nuxt-link class="link uppercase font-semibold">
    <slot></slot>
  </nuxt-link>
</template>

<style scoped>
.link {
  color: theme('colors.slate.900');
  position: relative;
  text-decoration: none;
}

.link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: theme('colors.slate.900');
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
</style>
