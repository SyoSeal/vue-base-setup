<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slow" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </Suspense>
</template>
