<template>
  <div>
    <h2>Потешки</h2>
    <div v-if="!isLoading">
      <div v-for="item in rhymes" :key="item.title" class="pre-wrap">
        <b> {{ item.title }}</b>
        <p>
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllCheeryRhymes } from '@/api/rhymes';
import { RhymesResponse, Rhyme } from '@/api/interfaces';

const isLoading = ref(false);
let rhymes: Rhyme[] = [];

onMounted(() => {
  loadItems();
});

function loadItems() {
  isLoading.value = true;
  getAllCheeryRhymes()
    .then((res: RhymesResponse) => {
      rhymes = res.rhymes;
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
