<template>
  <nav class="navigation">
    <div class="navigation__logo">Stacks</div>

    <div class="navigation__divider" />

    <ul class="navigation__links">
      <navigation-link label="Dashboard" path="/dashboard" />
      <navigation-link label="Accounts" path="/accounts" />
      <navigation-link label="Positions" path="/positions" />
      <navigation-link label="Strategies" path="/strategies" />
    </ul>

    <ul class="navigation__options">
      <navigation-option label="Upload" />
    </ul>
  </nav>
</template>

<script>
import NavigationLink from "./NavigationLink.vue";
import NavigationOption from "./NavigationOption.vue";

export default {
  components: {
    NavigationLink,
    NavigationOption,
  },
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  height: 80px;
}

.navigation__logo {
  width: 118px;
  font-weight: bold;
  padding-right: 16px;
}

.navigation__divider {
  width: 1px;
  height: 12px;
  margin: 0 40px;
  background: $color-neutral-400;
}

.navigation__links {
  display: flex;
  flex: 1;

  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation__options {
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
