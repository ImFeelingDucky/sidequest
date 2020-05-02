<template>
	<div class="page-wrapper">
		<img src="../assets/users-icon.svg" />
		Challenge {{ $route.params.id }}
	</div>
</template>

<script>
import { currentUser } from "../api/tempDataDump"
export default {
	name: "QuestGroup",
	data() {
		return {
			currentUser: currentUser,
		}
	},
}
</script>
<style>
.page-wrapper {
	background-color: #574cff;
	min-height: 100vh;
	color: white;
	text-align: center;
}

.quest-groups {
	display: flex;
	justify-content: center;
}
</style>
