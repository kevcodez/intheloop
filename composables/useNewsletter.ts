
export default function useNewsletter() {
  const email = ref('')
  const success = ref(false)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const subscribe = async (): Promise<void> => {
    if (email.value === null || loading.value) {
      return
    }

    success.value = false;
    error.value = null
    loading.value = true

    const url = `https://europe-west1-intheloop-d4940.cloudfunctions.net/subscribeToNewsletter`

    try {
      await useFetch(url, {
        method: 'POST',
        body: {
          email: email.value,
        }
      })

      success.value = true
      email.value = ''
    } catch (err) {
      console.log(err)
      error.value = 'Oh no'
    } finally {
      loading.value = false
    }
  }

  const setEmail = (event: any) => {
    email.value = event.target.value.trim()
  }

  return {
    email,
    success,
    error,
    loading,
    subscribe,
    setEmail,
  }
}
