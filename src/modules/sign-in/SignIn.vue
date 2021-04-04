<template>
  <h1>Sign in to Stacks</h1>
  <form>
    <div class="sign-in__field">
      <label>Email address</label>
      <input
        v-model="email"
        type="text"
        autocomplete="email"
        placeholder="example@gmail.com"
      />
    </div>
    <div class="sign-in__field">
      <label>Password</label>
      <input
        v-model="email"
        type="password"
        autocomplete="current-password"
        placeholder="example@gmail.com"
      />
    </div>
  </form>
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
