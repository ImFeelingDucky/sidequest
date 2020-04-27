<template>
  <div>
    <h1>You're one step away from completing your first quest!</h1>
    <form @submit="checkForm">
      <label for="email">Email</label>

      <input v-model="email" type="email" placeholder="Email" />
      <label for="password">Password</label>

      <input v-model="password" type="password" placeholder="Password" />

      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?
      <router-link to="/Login">Login</router-link>
    </p>
  </div>
</template>

<script>
// import { authenticateUser } from "../utils/auth";
export default {
  name: "Signup",
  data() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  methods: {
    checkForm(e) {
      // authenticateUser(this.email, this.password);
      e.preventDefault();
      let userAuthenticated = true;
      if (userAuthenticated) {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
</style>
