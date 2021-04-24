<template>
  <div class="main">
    <div class="main__navigation">
      <div class="main__wrapper">
        <Navigation :onUploadButtonClicked="openUploadModal" />
      </div>
    </div>
    <div class="main__contents">
      <div class="main__wrapper">
        <router-view />
      </div>
    </div>
    <div class="main__modals">
      <UploadModal :is-open="isUploadModalOpen" />
    </div>
  </div>
</template>

<script>
import { Navigation, UploadModal } from "@/common/components";

export default {
  components: {
    Navigation,
    UploadModal,
  },
  data() {
    return {
      isUploadModalOpen: false,
    };
  },
  methods: {
    openUploadModal() {
      this.isUploadModalOpen = true;
    },
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main__navigation {
  background: $color-neutral-900;
}

.main__contents {
  flex: 1;
  padding: 20px 0;
  background: $color-neutral-800;
}

.main__wrapper {
  margin: 0 auto;
  max-width: 1366px;
}
</style>
