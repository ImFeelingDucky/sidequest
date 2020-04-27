<template>
  <div>
    <h1>Welcome back!</h1>
    <form @submit="checkForm">
      <label for="email">Email</label>

      <input v-model="email" type="email" placeholder="Email" />
      <label for="password">Password</label>

      <input v-model="password" type="password" placeholder="Password" />

      <button type="submit">Login</button>
    </form>
    <p>
      Need an account?
      <router-link to="/signup">Signup</router-link>
    </p>
  </div>
</template>

<script>
// import { authenticateUser } from "../utils/auth";
export default {
  name: "Login",
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
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>
<style>
</style>
