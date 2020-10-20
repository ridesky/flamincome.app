<template>
	<div id="app">
		<div style="height: 64vh;">
			<div id="terminal" style="scrollbar-width: thin;">loading ...</div>
			<!-- <voting ref="voting" ></voting> -->
		</div>
	</div>
</template>

<script>
import("@/assets/index")
import voting from "@/components/voting.vue"
export default {
	name: "App",
	components: {
		voting,
	},
	mounted() {
		window.vue = this
	},
	data() {
		return {
			// votes: [],
		}
	},
	methods: {
		what() {
			console.log("??")
		},
	},
	computed: {
		votingHtml() {
			return this.$refs.voting.$el
		},
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
