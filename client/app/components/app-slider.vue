<template>
  <client-only>
    <swiper-container class="relative" ref="containerRef" :init="false">
      <swiper-slide v-for="(slide, idx) in props.slides" :key="idx">
        <nuxt-img
          :src="slide"
          width="1600"
          height="800"
          format="webp"
          class="w-full h-full object-cover"
          :alt="`Слайд ${idx + 1}`"
          v-bind="idx === 0 ? { priority: true } : { loading: 'lazy' }"
        />
      </swiper-slide>

      <div
        class="absolute flex flex-col items-start max-w-[320px] z-10 right-10 bottom-10 ml-5"
      >
        <h1 class="text-[64px] font-bold text-white mb-4">Tasko</h1>
        <p class="text-lg text-left text-white">
          Надёжные разнорабочие для любых задач&nbsp;&mdash; быстро, честно,
          с&nbsp;гарантией качества
        </p>
      </div>
    </swiper-container>
  </client-only>
</template>

<script setup lang="ts">
const containerRef = ref(null);
const props = defineProps<{ slides: string[] }>();

useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: { shadow: true, translate: [0, 0, -100] },
    next: { shadow: true, translate: [0, 0, -100] },
  },
});
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 50vh;
}
swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1280px) {
  swiper-slide {
    height: 540px;
  }
}
@media (max-width: 768px) {
  swiper-slide {
    height: 320px;
  }
}
</style>
