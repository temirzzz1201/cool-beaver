<template>
  <div class="relative w-full h-[500px]">
    <div id="map" class="map-container w-full h-[500px]"></div>
    <app-spinner
      v-if="loading"
      class="absolute top-0 right-0 bottom-0 left-0 bg-blue-200 inset-0 z-30"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "#imports";
import { onMounted } from "vue";
import L from "leaflet";

const store = useMainStore();
const loading = ref(true);

onMounted(() => {
  const map = L.map("map").setView([45.039808, 38.976454], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  })
    .on("load", () => {
      loading.value = false;
    })
    .addTo(map);

  store.contactsMapPoints.forEach((point) => {
    L.marker([point.lat, point.lng]).addTo(map).bindPopup(point.name);
  });

  const flag = document.querySelector(".leaflet-control-attribution");
  flag.style.display = "none";
});
</script>
