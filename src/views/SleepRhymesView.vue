<template>
  <div>
    <h2>Засыпайки</h2>
    <div v-if="!isLoading">
      <div v-for="item in rhymes" :key="item.id" class="col-md-4 col-xl-3 col-xs-12">
        <q-card class="q-my-sm">
          <q-card-section>
            <router-link
              :to="{
                name: 'RhymeDetails',
                params: { id: item.id },
              }"
            >
              <div class="text-h6 q-pa-xs">
                {{ item.title }}
              </div>
            </router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllSleepRhymes } from '@/api/rhymes';
import { RhymesResponse, Rhyme } from '@/api/interfaces';

const isLoading = ref(false);
let rhymes: Rhyme[] = [];

onMounted(() => {
  loadItems();
});

function loadItems() {
  isLoading.value = true;
  getAllSleepRhymes()
    .then((res: RhymesResponse) => {
      rhymes = res.rhymes;
    })
    .catch((err) => console.error(err))
    .finally(() => (isLoading.value = false));
}
</script>

<style scoped></style>
