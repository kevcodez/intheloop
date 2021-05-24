export default async function ({ store, redirect }) {
    if (!store.state.auth.isAuthenticated) {
      return redirect('/')
    }
  }