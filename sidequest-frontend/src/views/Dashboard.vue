<template>
  <div>
    <h1>Dashboard</h1>

    <ChallengeGroups v-bind:challengeGroups="currentUser.challengeGroups" />
  </div>
</template>

<script>
import ChallengeGroups from "../components/ChallengeGroups";
export default {
  name: "Dashboard",
  components: { ChallengeGroups },
  data() {
    return {
      currentUser: {
        id: 1,
        name: "Shai",
        challengeGroups: [
          {
            id: 80,
            name: "Dack for Dado",
            description: "We want to be more active and get shredded.",
            members: [
              {
                id: 2,
                name: "Max"
              },
              {
                id: 3,
                name: "Jamie"
              }
            ],

            challenges: [
              {
                id: 100,
                name: "Do Pushups",
                type: "quantityBased", //As opposed to timeBased
                quantity: "40"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
<style>
</style>
