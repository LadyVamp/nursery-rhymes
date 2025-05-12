<template>
  <div>
    <h2>Потешки для кормления</h2>
    <div class="flex justify-end">
      <WakelockButton />
    </div>
    <div v-if="!isLoading">
      <div v-for="item in rhymes" :key="item.title" class="pre-wrap">
        <p>
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllFeedRhymes } from '@/api/rhymes';
import { RhymesResponse, Rhyme } from '@/api/interfaces';
import WakelockButton from '@/components/Shared/WakelockButton.vue';

const isLoading = ref(false);
let rhymes: Rhyme[] = [];

onMounted(() => {
  loadItems();
});

function loadItems() {
  isLoading.value = true;
  getAllFeedRhymes()
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
