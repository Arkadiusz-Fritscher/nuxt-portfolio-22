<script setup>
const navLinks = [
  {
    name: 'Work',
    url: { hash: '#work' },
    important: false,
  },

  {
    name: 'About',
    url: { hash: '#about' },
    important: false,
  },

  {
    name: 'Contact',
    url: { hash: '#contact' },
    important: true,
  },
];
</script>

<template>
  <nav class="flex justify-between items-center py-8">
    <div class="font-bold uppercase">
      <nuxt-link to="/"> Fritscher </nuxt-link>
    </div>

    <div id="desktop-menu" class="hidden sm:flex sm:gap-x-6 md:gap-x-8 items-center">
      <base-link v-for="link in navLinks" :key="link.name" :to="link.url" :important="link.important">
        {{ link.name }}
      </base-link>
    </div>
    <div id="mobile-menu" class="sm:hidden">
      <icons-menu />
    </div>
  </nav>
</template>

<style scoped></style>
