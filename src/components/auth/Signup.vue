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
      <p
        class="red-text center"
        v-if="feedback"
      >
        {{feedback}}
      </p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify';
import db from '@/firebase/init';

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
    }
  },
  methods: {
    signup () {
      if (this.alias) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this alias already exists"
          } else {
            this.feedback = 'thia alias is free to use';
          }
        })
        console.log(this.slug)
      } else {
        this.feedback = "you must enter a alias"
      }
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
