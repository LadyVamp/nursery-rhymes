<template>
  <section>
    <div class="q-pa-md">
      <h2>Кириллица в транслит для id</h2>
      <CyrillicTransliterator />
    </div>
    <div class="q-pa-md">
      <q-btn
        color="orange"
        label="Иконки"
        :href="'https://pictogrammers.com/library/mdi/'"
        :target="'_blank'"
        text-color="grey-9"
        icon="mdi-silverware"
      />
      Добавить перед именем иконки префикс mdi-
    </div>
    <div class="q-pa-md q-gutter-sm">
      <h2>Цвета</h2>
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="accent" label="accent" />
      <q-btn color="dark" label="dark" />
      <q-btn color="positive" label="positive" />
      <q-btn color="negative" label="negative" />
      <q-btn color="info" label="info" />
      <q-btn color="warning" label="warning" />
    </div>
  </section>
</template>

<script setup>
import CyrillicTransliterator from '@/components/Shared/CyrillicTransliterator.vue';
</script>
