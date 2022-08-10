<script setup></script>

<template>
  <section class="flex flex-col sm:flex-row gap-fr-lg mb-fr-2xl">
    <article class="about-wrapper">
      <h4 class="text-fr-h1 font-semibold mb-fr-sm">Über mich</h4>
      <p class="max-w-[38ch] text-fr-body mb-fr-md">
        Hi, ich bin der Arkadiusz Fritscher und komme aus der Nähe von Mainz. Neben meinem Hauptberuf als
        Anlagenmechaniker SHK und Vater von zwei kleinen Kindern lerne ich in meiner Freizeit Programmieren und setzte
        das gelernte in eigenen Projekten um. Mein Focus liegt dabei im Frontend und besonders im UI.
      </p>
      <div>
        <base-button>Contact me</base-button>
      </div>
    </article>
    <div class="image-wrapper">
      <img
        class="about-img"
        src="https://api.lorem.space/image/face?w=380&h=214"
        alt="Arkadiusz Fritscher"
        width="460"
        height="259"
        loading="lazy"
        decoding="async"
        srcset="
          https://api.lorem.space/image/face?w=640&h=360    640w,
          https://api.lorem.space/image/face?w=768&h=432    768w,
          https://api.lorem.space/image/face?w=1024&h=576  1024w,
          https://api.lorem.space/image/face?w=1366&h=768  1366w,
          https://api.lorem.space/image/face?w=1600&h=900  1600w,
          https://api.lorem.space/image/face?w=1920&h=1080 1920w
        "
        sizes="(min-width: 62.5em) 50vw, 100vw"
      />
    </div>
  </section>
</template>

<style scoped>
.about-img {
  width: 100%;
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 1/1;
  display: block;
}

.image-wrapper {
}

@media (min-width: theme('screens.sm')) {
  .about-wrapper {
    flex: 1 1 50%;
    order: 2;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  .image-wrapper {
    flex: 0 0 45%;
    order: 1;
  }

  .about-img {
    aspect-ratio: 3 / 4;
  }
}

@media (min-width: theme('screens.lg')) {
  .about-img {
    aspect-ratio: 1 / 1;
  }
}
</style>
