<template>
  <div v-if="!isLoading">
    <h2>{{ currentRhyme.title }}</h2>
    <b>{{ currentRhyme.author }}</b>
    <p class="pre-wrap q-my-sm">
      {{ currentRhyme.content }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getAllSleepRhymes } from '@/api/rhymes';
import { RhymesResponse, Rhyme } from '@/api/interfaces';

const route = useRoute();
let currentRhyme: Rhyme = {
  id: '',
  title: '',
  content: '',
};
const isLoading = ref(false);

onMounted(() => {
  loadItems();
});

function loadItems() {
  isLoading.value = true;
  getAllSleepRhymes()
    .then((res: RhymesResponse) => {
      currentRhyme = res.rhymes.filter((item) => item.id === route.params.id)[0];
      document.title = `${currentRhyme.title}`;
    })
    .catch((err) => console.error(err))
    .finally(() => (isLoading.value = false));
}
</script>

<style scoped>
.pre-wrap {
  white-space: pre-wrap;
}
</style>
