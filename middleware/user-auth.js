export default async function ({ $http, redirect, store }) {
  const data = await $http.$post('/api/user')
  const { user = null } = data

  if (!store.state.auth.user !== user) {
    store.commit('auth/set', user)

    if (user) {
      await store.dispatch('follow/loadTopics', { userId: user.id })
    }
  }
}
