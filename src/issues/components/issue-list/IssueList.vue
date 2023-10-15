<script setup lang="ts" >
import IssueCard from './IssueCard.vue';

</script>


<template>
    <div class="row">
      <IssueCard v-for="Issue of 20" :key="Issue" />
    </div>
</template>


<style scoped  ></style>
