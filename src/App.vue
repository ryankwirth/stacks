<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "SF Pro";
  font-weight: normal;
  src: url("assets/fonts/sf-pro-text-regular.woff") format("woff"),
    url("assets/fonts/sf-pro-text-regular.ttf") format("truetype");
}

@font-face {
  font-family: "SF Pro";
  font-weight: 600;
  src: url("assets/fonts/sf-pro-text-semibold.woff") format("woff"),
    url("assets/fonts/sf-pro-text-semibold.ttf") format("truetype");
}

@font-face {
  font-family: "SF Pro";
  font-weight: 900;
  src: url("assets/fonts/sf-pro-text-heavy.woff") format("woff"),
    url("assets/fonts/sf-pro-text-heavy.ttf") format("truetype");
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: "SF Pro", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.global__color--primary {
  color: #131416;
}

.global__color--secondary {
  color: #e6eaf6;
}

.global__color--success {
  color: #16cf7c;
}

.global__color--warning {
  color: #e5a140;
}

.global__color--danger {
  color: #ee5959;
}

.global__background--primary {
  background: #131416;
}

.global__background--secondary {
  background: #e6eaf6;
}

.global__background--success {
  background: #16cf7c;
}

.global__background--warning {
  background: #e5a140;
}

.global__background--danger {
  background: #ee5959;
}
</style>
