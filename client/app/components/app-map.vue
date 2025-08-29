<template>
  <div id="map" class="map-container"></div>
</template>

<script setup>
import { useMainStore } from "#imports";
import { onMounted } from "vue";
import L from "leaflet";

const store = useMainStore();

onMounted(() => {
  const map = L.map("map").setView([45.039808, 38.976454], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(map);

  store.contactsMapPoints.forEach((point) => {
    L.marker([point.lat, point.lng]).addTo(map).bindPopup(point.name);
  });

  const flag = document.querySelector(".leaflet-control-attribution");
  flag.style.display = "none";
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}
</style>
