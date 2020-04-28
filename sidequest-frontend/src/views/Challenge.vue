<template>
  <div>
    Challenge {{ $route.params.id }}
    <h1>{{challenge.name}}</h1>
  </div>
</template>

<script>
import { challenge } from "../api/challenge";
export default {
  name: "Challenge",
  data() {
    return {
      challenge: challenge
    };
  },
  created() {}
};
</script>

<style scoped>
.challenge-groups {
  display: flex;
  justify-content: center;
}
.challenge-group-card {
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  max-width: 400px;
}
</style>