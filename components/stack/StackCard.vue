<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  stacks: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <article class="flex flex-col md:flex-row gap-fr-lg">
    <h3 class="title text-fr-h1 font-semibold">{{ title }}</h3>
    <ul class="list flex flex-col">
      <li v-for="stack of stacks" :key="stack" class="py-fr-md item">
        <span class="stack text-fr-h2 block"> {{ stack }} </span>
      </li>
      <li v-if="description" class="pt-fr-md">
        <p>{{ description }}</p>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.item {
  position: relative;
}

.item::before {
  content: '';
  position: absolute;
  top: 0;
  inset-inline: 0;
  background-color: currentColor;
  height: 2px;
}

.stack::before {
  content: '\2022\00a0';
}

@media (min-width: theme('screens.md')) {
  .title {
    flex: 0 1 45%;
  }

  .list {
    flex: 1 1 50%;
  }

  .stack {
    pointer-events: none;
  }

  .stack,
  .item {
    transition: all 0.2s ease-in-out;
  }

  .item:hover {
    background-color: theme('colors.zinc.800');
  }
  .item:hover .stack {
    transform: translateX(0.5em);
    color: theme('colors.zinc.50');
  }
}
</style>
