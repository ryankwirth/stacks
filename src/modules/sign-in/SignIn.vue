<template>
  <div class="sign-in">
    <h1>Sign in to Stacks</h1>
    <form>
      <div class="sign-in__field">
        <label>Email address</label>
        <input v-model="email" type="text" autocomplete="email" />
      </div>
      <div class="sign-in__field">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
        />
      </div>
      <div class="sign-in__field">
        <button @click.prevent="signIn()">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      validationErrors: [],
    };
  },
  methods: {
    signIn() {
      console.log("sign in", this.email, this.password);
    },
  },
};
</script>
