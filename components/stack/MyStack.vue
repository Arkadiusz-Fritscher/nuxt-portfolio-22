<script setup>
const skills = [
  {
    title: 'Technologien die ich bin jetzt einsetze.',
    stacks: ['Javascript', 'Vue.js 2&3', 'Nuxt.js', 'Tailwind.css', 'Quasar', 'HTML', 'CSS/SASS'],
    description: 'Die meisten meiner Projekte entstehen mit Vue.js, bin aber auch offen für andere Frameworks',
  },
  {
    title: 'Tools mit denen ich vertraut bin.',
    stacks: ['Figma', 'Photoshop', 'Illustrator', 'Notion'],
    description: 'Die meisten meiner Projekte entstehen mit Vue.js, bin aber auch offen für andere Frameworks',
  },
];
</script>

<template>
  <section class="flex flex-col gap-y-fr-xl">
    <stack-card v-for="(skill, i) in skills" :key="i" v-bind="skill" />
  </section>
</template>

<style scoped></style>
