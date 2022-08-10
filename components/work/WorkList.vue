<script setup>
import { projects } from '~/api/projects';
</script>

<template>
  <section id="work" class="project-grid">
    <work-card v-for="(project, i) in projects" :key="i" :project="project" />
  </section>
</template>

<style scoped>
.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: theme('spacing.fr-lg');
}

.project-grid > figure {
  flex: 1 1 100%;
}

@media (min-width: 1000px) {
  .project-grid > figure {
    flex: 1 1 calc(50% - (theme('spacing.fr-lg') / 2));
  }

  .project-grid > :first-child {
    flex: 1 0 100%;
  }
}
</style>
