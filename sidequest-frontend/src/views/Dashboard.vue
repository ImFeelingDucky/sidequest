<template>
  <div>
    <h1>Dashboard</h1>

    <ChallengeGroups v-bind:challengeGroups="currentUser.challengeGroups" />
  </div>
</template>

<script>
import ChallengeGroups from "../components/ChallengeGroups";
import { currentUser } from "../api/tempDataDump";
export default {
  name: "Dashboard",
  components: { ChallengeGroups },
  data() {
    return {
      currentUser: currentUser
    };
  }
};
</script>
<style>
</style>
