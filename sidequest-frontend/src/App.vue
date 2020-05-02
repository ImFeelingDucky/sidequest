<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script>
export default {
	name: "App",

	components: {},

	data: () => ({
		//
	}),
}
</script>

<style>
@font-face {
	font-family: "Larsseit";
	src: "/assets/fonts/Larsseit.ttf";
}

* {
	font-family: "Larsseit";
}
</style>
