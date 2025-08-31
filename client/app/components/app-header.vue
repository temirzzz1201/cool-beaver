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
      class="fixed top-0 left-0 w-full z-50 bg-blue-200 dark:bg-gray-900 text-gray-600 backdrop-blur-sm shadow-md"
    >
      <slot></slot>
      <u-separator />
      <div class="h-[30px] hidden md:flex md:items-center md:justify-end pr-4">
        <u-link
          href="mailto:name@email.com"
          class="text-[14px] dark:text-white font-bold mr-2"
        >
          ✉️ name@email.com
        </u-link>
        <u-link
          href="tel:+790000000"
          class="text-[14px] font-bold dark:text-white"
        >
          тел: 8 900 000 00 00
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
