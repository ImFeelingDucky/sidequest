<template>
  <div class="page-wrapper">
    <img src="../assets/users-icon.svg" />
    <h1>Quest Groups</h1>
    <div v-for="questGroup in currentUser.challengeGroups" v-bind:key="questGroup.id">
      <QuestGroupCard :questGroup="questGroup" />
    </div>
  </div>
</template>

<script>
import QuestGroupCard from "../components/QuestGroupCard";
import { currentUser } from "../api/tempDataDump";
export default {
  name: "Dashboard",
  components: { QuestGroupCard },
  data() {
    return {
      currentUser: currentUser
    };
  }
};
</script>
<style>
.page-wrapper {
  background-color: #574cff;
  min-height: 100vh;
  color: white;
}

.quest-groups {
  display: flex;
  justify-content: center;
}
</style>
