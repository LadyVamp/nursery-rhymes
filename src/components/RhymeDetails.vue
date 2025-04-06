<template>
  <div>
    RhymeDetails!!!
    <div v-if="!isLoading">
      {{ currentRhyme }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getAllSleepRhymes } from '@/api/rhymes';
import { RhymesResponse, Rhyme } from '@/api/interfaces';

const route = useRoute();
let currentRhyme: Rhyme = {};
const isLoading = ref(false);

onMounted(() => {
  loadItems();
});

function loadItems() {
  isLoading.value = true;
  getAllSleepRhymes()
    .then((res: RhymesResponse) => {
      console.log(res);
      currentRhyme = res.rhymes.filter((item) => item.id === route.params.id)[0];
      document.title = `${currentRhyme.title}`;
      console.log(currentRhyme);
    })
    .catch((err) => console.error(err))
    .finally(() => (isLoading.value = false));
}
</script>

<style scoped>
.q-select {
  margin: 0 10px;
}
.border-gray:before {
  border: 1px solid lightgray;
}
</style>
