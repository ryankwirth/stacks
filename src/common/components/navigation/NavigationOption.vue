<template>
  <li class="navigation-option">
    <a v-on:click.prevent="onClick">{{ label }}</a>
  </li>
</template>

<script>
export default {
  props: {
    label: String,
    onClick: Function,
  },
};
</script>

<style lang="scss">
.navigation-option {
  color: $color-neutral-200;
  font-weight: 500;
  font-size: 15.5px;
  letter-spacing: 0.25px;

  a {
    padding: 16px;
    cursor: pointer;

    &:hover {
      color: $color-neutral-100;
    }
  }
}
</style>
