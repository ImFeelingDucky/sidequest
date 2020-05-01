<template>
  <div>
    <div class="quest-group-card">
      <div class="card-top">
        <div class="group-name">{{questGroup.name}}</div>
        <div class="group-stake">
          {{questGroup.stake}}
          <span>stake</span>
        </div>
      </div>

      <!-- <div class="group-quests">
          <h1>quests</h1>
          <div v-for="quest in questGroup.quests" v-bind:key="quest.id">
            <router-link :to="{ name: 'quest', params: { id: quest.id }}">{{quest.name}}</router-link>
          </div>
      </div>-->
      <div class="card-row first">
        <h2>Members</h2>
        <div class="member-icons-wrapper">
          <div v-for="member in questGroup.members" v-bind:key="member.id">
            <img class="member-icon" src="../assets/user-icon.svg" />
          </div>
        </div>
      </div>
      <div class="card-row">
        <h2>Today</h2>
        <div class="progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestGroupCard",
  props: ["questGroup"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.quest-group-card {
  padding: 20px;
  border-radius: 6px;
  width: 80%;
  background-color: #7269ff;
  margin: auto;
}

.card-top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

span {
  font-size: 10px;
}
.card-row {
  display: flex;
  align-items: center;
}

.card-row.first {
  margin-top: 20px;
}

.group-stake {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
.member-icons-wrapper {
  margin-left: 20px;
  display: flex;
  flex-wrap: nowrap;
}
.member-icon {
  margin-right: 5px;
}
</style>