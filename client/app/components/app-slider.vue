<template>
  <client-only>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32, 233, 70); color: white"
      >
        Slide {{ idx + 1 }}
      </swiper-slide>
    </swiper-container>
  </client-only>
</template>

<script setup lang="ts">
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -100],
    },
    next: {
      shadow: true,
      translate: [0, 0, -100],
    },
  },
});
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 30vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
