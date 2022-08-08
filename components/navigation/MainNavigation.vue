<script setup>
const navLinks = [
  {
    name: 'Work',
    url: '/',
  },

  {
    name: 'About',
    url: { name: 'work' },
  },

  {
    name: 'Contact',
    url: { name: 'contact' },
  },
];
</script>

<template>
  <nav class="flex justify-between items-center py-8">
    <div>
      <nuxt-link to="/"> Logo </nuxt-link>
    </div>

    <div id="desktop-menu" class="hidden md:flex gap-x-4">
      <base-link v-for="link in navLinks" :key="link.name" :to="link.url"> {{ link.name }} </base-link>
    </div>
    <div id="mobile-menu" class="md:hidden">mobile</div>
  </nav>
</template>

<style scoped></style>
