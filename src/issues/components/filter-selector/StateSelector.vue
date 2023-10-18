<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issues';


const issuesStore = useIssuesStore();

</script>


<template>
  <q-btn-toggle
    v-model="issuesStore.state"
    toogle-color = "primary"
    push spread
      :options="[ {
        label: 'All',
        value: 'all'
      }, {
        label: 'Open',
        value: 'open'
      }, {
        label: 'Closed',
        value: 'closed'
      }]"

    />
</template>


<style scoped>

</style>
