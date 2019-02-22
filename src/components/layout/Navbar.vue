<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link class="brand-logo left" :to="{ name: 'GMap' }"
          >Geo Location</router-link
        >
        <ul class="right">
          <li v-if="!user">
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li v-else>{{ user.email }}</li>
          <li v-if="user"><a @click="logOut">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navbar',
  data() {
    return {
      user: null,
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  },
  created() {
    // let user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    })
  }
}
</script>

<style lang="sass">

</style>

