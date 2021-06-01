export const state = () => ({
    topicIds: [],
})

export const mutations = {
    addTopic(state, topicId) {
        if (!state.topicIds.includes(topicId)) {
            state.topicIds.push(topicId)
        }
    },
    removeTopic(state, topicId) {
        state.topicIds = state.topicIds.filter(it => it !== topicId)
    },
    setTopicsIds(state, topicIds) {
        state.topicIds = topicIds
    }
}

export const actions = {
    async loadTopics({ commit }, { userId }) {
        const { data } = await this.$supabase.from("topic_follow")
            .select("*")
            .eq('user_id', userId)

        commit('setTopicsIds', data.map(it => it.topic_id))
    },
    async follow({ commit, rootState }, { topicId }) {
        await this.$supabase.from("topic_follow").upsert({ user_id: rootState.auth.user.id, topic_id: topicId })

        commit('addTopic', topicId)
    },
    async unfollow({ commit, rootState }, { topicId }) {
        await this.$supabase.from("topic_follow").delete({ user_id: rootState.auth.user.id, topic_id: topicId })

        commit('removeTopic', topicId)
    }
}