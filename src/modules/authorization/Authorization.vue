<template>
  <div class="authorization">
    Authorization!
    <h1>Sign In</h1>
    <p>Don't have an account yet? Sign Up</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted")
    //this.$store.dispatch('auth/signIn', {
    //  email: 'ryan@ryanwirth.ca',
    //  password: 'loremipsum'
    //})
  }
}
</script>
