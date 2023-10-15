<script setup lang="ts">
import LoaderSpinner from '../LoaderSpinner.vue';

</script>


<template>
  <LoaderSpinner
    size="50px"
    color="white"
    :thickness="1"
    :showText="false"
  />
  <q-chip v-for="label of 10" :key="label" color="primary" outline clickable >
    some name
  </q-chip>
</template>


<style scoped>

</style>
