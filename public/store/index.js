import Vue from "vue"
import Vuex from "vuex"
import votes from "./votes"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		votes,
	},
})
