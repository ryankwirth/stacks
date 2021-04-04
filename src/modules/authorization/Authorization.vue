<template>
  <div class="authorization">
    <SignIn v-if="true" />
    <SignUp v-else />
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

export default {
  components: {
    SignIn,
    SignUp
  }
}
</script>
