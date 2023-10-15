<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  size?: string
  color?: string
  thickness?: number
  showText?: boolean
}

// define props with default values
const props = withDefaults(defineProps<Props>(),
  {
  size: '3.5rem',
  color: 'primary',
  thickness: 5,
  showText: true
  })


</script>


<template>
  <div class="column items-center">

    <q-spinner-gears :size="props.size" :color="props.color" :thickness="props.thickness"  />

    <div
      v-if="props.showText"
    class="text-h6 q-mt-sm">Loading...</div>

  </div>
</template>


<style scoped>
</style>
