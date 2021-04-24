<template>
  <div :class="classes">
    <div class="upload-modal__content">
      <h1>Upload</h1>
      <input type="file" v-on:change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  computed: {
    classes() {
      const modifier = this.isOpen ? "open" : "closed";
      return ["upload-modal", `upload-modal--${modifier}`];
    },
  },
  methods: {
    onChange(event) {
      const files = event.target.files;
      console.log(files);
    },
  },
};
</script>

<style lang="scss">
.upload-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba($color-neutral-900, 0.7);
}

.upload-modal--closed {
  display: none;
}

.upload-modal__content {
  width: 512px;
  height: 512px;
  background: $color-neutral-700;
}
</style>
