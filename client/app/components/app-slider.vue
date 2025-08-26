<template>
  <client-only>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <nuxt-img :src="slide" :alt="slide" />
      </swiper-slide>
    </swiper-container>
  </client-only>
</template>

<script setup lang="ts">
const containerRef = ref(null);
const slides = ref(
  Array.from({ length: 6 }, (_, i) => `/slider/worker${i + 1}.jpg`)
);

const startSwiper = () => {
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
};

startSwiper();
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
