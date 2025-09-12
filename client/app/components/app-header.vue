<template>
  <transition
    enter-active-class="transition-transform duration-500"
    enter-from-class="-translate-y-20 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-transform duration-500"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-20 opacity-0"
  >
    <header
      v-show="visible"
      class="absolute top-0 left-0 w-full z-100 bg-blue-500 dark:bg-gray-800 text-gray-600 backdrop-blur-sm shadow-md"
    >
      <slot></slot>
      <u-separator color="neutral" />
      <div
        class="w-full max-w-[1920px] h-[30px] hidden md:flex md:items-center md:justify-end px-4 mr-auto ml-auto"
      >
        <u-link
          href="mailto:name@email.com"
          class="text-[14px] dark:text-white font-bold mr-2"
        >
          <div class="flex items-center text-gray-100 dark:text-white">
            <u-icon name="i-lucide-mail" class="w-4 h-4 mr-2" />
            tmzzz@inbox.ru
          </div>
        </u-link>
        <u-link
          href="tel:+790000000"
          class="text-[14px] font-bold dark:text-white"
        >
          <div class="flex items-center text-gray-100 dark:text-white">
            <u-icon name="i-lucide-phone" class="w-4 h-4 mr-2" />
            +7 918 098 96 94
          </div>
        </u-link>
      </div>
    </header>
  </transition>
</template>

<script setup lang="ts">
const visible = ref(true);
let lastScroll = 0;

const handleScroll = () => {
  const current = window.scrollY;
  if (current <= 0) {
    visible.value = true;
  } else {
    visible.value = current < lastScroll;
  }
  lastScroll = current;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
