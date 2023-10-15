<script lang="ts" setup>
import LoaderSpinner from '../components/LoaderSpinner.vue';


</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">GitHub Issues</span>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!--Filtros -->
    </div>
    <div class="col-xs-12 col-md-8">
      <LoaderSpinner
        size="5rem"
        color="white"
        :thickness="5"
      />
      <!--Lista de issues -->
    </div>
  </div>
</template>

<style scoped>
</style>

