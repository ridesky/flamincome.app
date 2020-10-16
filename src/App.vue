<template>
	<div id="app">
		<div style="height: 64vh;">
			<div id="terminal" style="scrollbar-width: thin;">loading ...</div>
		</div>
	</div>
</template>

<script>
import("@/assets/index")
export default {
	name: "App",
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
