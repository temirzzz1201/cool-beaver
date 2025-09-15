<template>
  <section
    class="relative w-full min-h-[450px] md:min-h-[550px] lg:min-h-[900px] flex items-center"
  >
    <NuxtImg
      src="/hero.webp"
      alt="Профессиональные разнорабочие для любых задач"
      width="1920"
      height="1080"
      class="absolute inset-0 w-full h-full object-cover"
      preload
      fetchpriority="high"
    />

    <div
      class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
    ></div>

    <div class="relative z-10 text-white px-6 py-12 max-w-[560px] text-left">
      <h1 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
        Профессиональные разнорабочие <br class="hidden md:block" />
        для любых <br class="hidden md:block" />
        задач
      </h1>
      <p class="text-lg md:text-xl mb-10 text-gray-200">
        Быстро, надёжно и&nbsp;качественно. <br class="hidden md:block" />
        Закажите прямо сейчас.
      </p>
      <nuxt-link
        to="/contacts"
        aria-label="Связаться с нами"
        class="inline-block px-8 py-3 rounded-lg bg-transparent border text-white font-semibold shadow hover:bg-indigo-700 hover:border-indigo-500 transition"
      >
        Связаться с нами
      </nuxt-link>
    </div>
  </section>
</template>
