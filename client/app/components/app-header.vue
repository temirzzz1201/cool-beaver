<template>
  <header
    class="w-full bg-blue-400 text-black dark:bg-gray-900 dark:border-b dark:border-b-white dark:text-white"
  >
    <slot></slot>
    <u-separator />
    <div
      class="w-full bg-blue-400 text-black dark:bg-gray-900 dark:border-b dark:border-b-white dark:text-whitew-full max-w-[1920px] px-3 py-1 mr-auto ml-auto"
    >
      <div class="flex justify-end">
        <a
          class="text-white font-semibold underline mr-5"
          href="mailto:name@email.com"
          >написать: name@email.com</a
        >
        <a class="text-white font-semibold" href="tel:+7 900 00 00"
          >позвонить: 8 900 00 00</a
        >
      </div>
    </div>
  </header>
</template>
