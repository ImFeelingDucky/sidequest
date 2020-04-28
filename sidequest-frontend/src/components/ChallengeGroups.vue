<template>
  <div>
    <div class="challenge-groups">
      <div
        v-for="challengeGroup in challengeGroups"
        v-bind:key="challengeGroup.id"
        class="challenge-group-card"
      >
        <div class="group-name">
          <h1>Group Name</h1>
          {{challengeGroup.name}}
        </div>
        <div class="group-description">
          <h1>Group Description</h1>
          {{challengeGroup.description}}
        </div>
        <div class="group-challenges">
          <h1>Challenges</h1>
          <div v-for="challenge in challengeGroup.challenges" v-bind:key="challenge.id">
            <router-link :to="{ name: 'challenge', params: { id: challenge.id }}">{{challenge.name}}</router-link>
          </div>
        </div>
        <div class="group-members">
          <h1>Members</h1>
          <div v-for="member in challengeGroup.members" v-bind:key="member.id">{{member.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengeGroups",
  props: ["challengeGroups"],
  data() {
    return {};
  }
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