<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "@/common/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>
