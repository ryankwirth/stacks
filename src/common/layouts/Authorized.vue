<template>
  <div class="authorized">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/common/components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>
