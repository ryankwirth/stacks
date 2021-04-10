<template>
  <nav class="navigation">
    <div class="navigation__logo">Stacks</div>

    <div class="navigation__divider" />

    <ul class="navigation__links">
      <li class="navigation__link">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li class="navigation__link">
        <router-link to="/accounts">Accounts</router-link>
      </li>
      <li class="navigation__link">
        <router-link to="/positions">Positions</router-link>
      </li>
      <li class="navigation__link">
        <router-link to="/strategies">Strategies</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  height: 80px;
}

.navigation__logo {
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

.navigation__link {
  color: $color-neutral-200;
  font-weight: 500;
  font-size: 15.5px;
  letter-spacing: 0.25px;

  a {
    padding: 16px;

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
