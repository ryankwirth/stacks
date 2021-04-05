<template>
  <div class="sign-in">
    <h1>Sign In</h1>
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
        <button @click.prevent="validate()">Sign In {{ isAuthorized }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthorized"]),
  },
  watch: {
    isAuthorized() {
      this.$router.push({ name: "Dashboard" });
    },
  },
  methods: {
    validate() {
      // TODO: Perform input validation
      this.signIn({ email: this.email, password: this.password });
    },
    ...mapActions("auth", ["signIn"]),
  },
};
</script>
