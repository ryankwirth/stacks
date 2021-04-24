<template>
  <li class="navigation-link">
    <router-link :to="path">{{ label }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    label: String,
    path: String,
  },
};
</script>

<style lang="scss">
.navigation-link {
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

    &.router-link-active {
      color: $color-neutral-100;
      font-weight: bold;

      text-underline-offset: 6px;
      text-decoration: underline $color-neutral-100 2px;
    }
  }
}
</style>
