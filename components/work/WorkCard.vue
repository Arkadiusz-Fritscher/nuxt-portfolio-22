<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <figure>
    <img
      class="thumbnail"
      src="https://api.lorem.space/image/shoes?w=380&h=214"
      :alt="project.name"
      width="460"
      height="259"
      loading="lazy"
      decoding="async"
      srcset="
        https://api.lorem.space/image/shoes?w=640&h=360    640w,
        https://api.lorem.space/image/shoes?w=768&h=432    768w,
        https://api.lorem.space/image/shoes?w=1024&h=576  1024w,
        https://api.lorem.space/image/shoes?w=1366&h=768  1366w,
        https://api.lorem.space/image/shoes?w=1600&h=900  1600w,
        https://api.lorem.space/image/shoes?w=1920&h=1080 1920w
      "
      sizes="(min-width: 62.5em) 50vw, 100vw"
      @click="$router.push({ name: 'slug', params: { slug: project.slug } })"
    />

    <figcaption class="pt-fr-sm">
      <h3 class="text-fr-h3 font-semibold">{{ project.name }}</h3>
      <ul v-if="project.services.length" class="flex mt-fr-xs">
        <li v-for="(service, i) in project.services" :key="i" class="text-fr-caption">{{ service }}</li>
      </ul>
    </figcaption>
  </figure>
</template>

<style scoped>
.thumbnail {
  width: 100%;
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: auto 16/9;
  display: block;
}

ul li:not(:last-child)::after {
  content: '\00a0-';
}

ul li:not(:first-child)::before {
  content: '\00a0'; /* one white-space */
}
</style>
