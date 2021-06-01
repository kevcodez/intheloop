export const state = () => ({
  isAuthenticated: false,
  user: null,
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = user !== null
    state.user = user
  },
}

export const actions = {
  async register({ commit }, { email, password }) {
    const { user, session, error } = await this.$supabase.auth.signUp({
      email,
      password,
    })

    return { user, session, error }
  },

  async login({ commit, rootStore }, { email, password }) {
    const { user, error, session } = await this.$supabase.auth.signIn({ email, password })

    commit('set', user)
    if (user) {
      await rootStore.dispatch('follow/loadTopics', { userId: user.id })
    }
    return { user, error, session }
  },

  async logout({ commit }) {
    await this.$supabase.auth.signOut()

    commit('set', null)
  },
}