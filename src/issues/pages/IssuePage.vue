<script lang="ts" setup>
import { useRoute } from 'vue-router';
import LoaderSpinner from '../components/LoaderSpinner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';

const router = useRoute();

const { id  = ' '} = router.params;

</script>

<template>
  <LoaderSpinner color="white" />

  <router-link  class="text-white" to="/">Back</router-link>

  <!--Header-->
  <IssueCard />

  <LoaderSpinner class="text-white" :thickness="1" size="1.5rem"  :show-text="false"/>

  <div class="column">
    <span class="text-h3 q-mb-md">
      Comments (5)
    </span>
    <IssueCard v-for="comment of 5" :key="comment" />
  </div>

</template>

<style scoped>
</style>

