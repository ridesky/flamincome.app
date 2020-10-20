import Vue from "vue"

export default {
	state: {
		votes: [],
	},
	mutations: {
		setVotes(state, { votes }) {
			Vue.set(state.votes, votes)
		},
	},
	actions: {
		SET_VOTES({ commit }, votes) {
			commit("setVotes", { votes })
		},
	},
}
