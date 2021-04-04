<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <form>
      <div class="sign-up__field">
        <label>Email address</label>
        <input v-model="email" type="text" autocomplete="email" />
      </div>
      <div class="sign-up__field">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
        />
      </div>
      <div class="sign-up__field">
        <button @click.prevent="validate()">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    validate() {
      // TODO: Perform input validation

      this.signUp({
        email: this.email,
        password: this.password,
      });
    },
    ...mapActions("auth", ["signUp"]),
  },
};
</script>
