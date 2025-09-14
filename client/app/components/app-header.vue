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
      class="fixed top-0 left-0 w-full z-1000 bg-white/50 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
    >
      <slot></slot>
      <u-separator />
      <div
        class="w-full max-w-[1920px] hidden md:flex justify-end items-center mx-auto px-6 py-2 text-sm text-gray-600 dark:text-gray-300"
      >
        <u-link
          href="mailto:tmzzz@inbox.ru"
          class="flex items-center text-indigo-500 hover:text-blue-600 dark:text-gray-300 mr-6"
        >
          <u-icon name="i-lucide-mail" class="w-4 h-4 mr-2" />
          tmzzz@inbox.ru
        </u-link>
        <u-link
          href="tel:+79180989694"
          class="flex items-center text-indigo-500 hover:text-blue-600 dark:text-gray-300"
        >
          <u-icon name="i-lucide-phone" class="w-4 h-4 mr-2" />
          +7 918 098 96 94
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
  visible.value = current <= 0 || current < lastScroll;
  lastScroll = current;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
