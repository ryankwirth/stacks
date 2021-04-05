<template>
  <nav class="navigation">
    <div class="navigation__logo">Stacks</div>

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

<style>
.navigation {
  display: flex;
}

.navigation__logo {
  font-weight: 900;
}

.navigation__links {
  display: flex;
  flex: 1;

  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation__link {
  font-weight: 600;
}
</style>
