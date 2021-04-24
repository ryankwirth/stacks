<template>
  <div :class="classes">
    Upload Modal!
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
  computed: {
    classes() {
      const modifier = this.open ? "open" : "closed";
      return ["upload-modal", `upload-modal--${modifier}`];
    },
  },
};
</script>

<style lang="scss">
.upload-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba($color-neutral-900, 0.7);
}

.upload-modal--closed {
  display: none;
}
</style>
