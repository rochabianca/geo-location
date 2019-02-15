<template>
  <div class="signup container">
    <form
      @submit.prevent="signup"
      class="card-panel"
    >
      <h2 class="center deep-purple-text">
        Signup
      </h2>
      <div class="field">
        <label for="email">Email:</label>
        <input
          v-model="email"
          type="email"
          name="email"
        >
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input
          v-model="password"
          type="password"
          name="password"
        >
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input
          v-model="alias"
          type="text"
          name="alias"
        >
      </div>
      <div class="field">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
    }
  },
  methods: {
    signup () {

    }
  }

}
</script>

<style lang="scss">
.signup {
  max-width: 400px;
  margin-top: 60px;
  h2 {
    font-size: 2.4em;
  }
  .field {
    margin-bottom: 16px;
  }
}
</style>
