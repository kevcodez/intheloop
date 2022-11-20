export default function usePagedList<T>({
  pageSize = 10,
  fetch,
}: {
  pageSize: number
  fetch: (rangeStart: number, rangeEnd: number) => any
}) {
  const currentPage = ref(0)
  const dataList = ref<T[]>([])
  const hasMore = ref(false)
  const error = ref(null)
  const loading = ref(false)

  const loadData = async () => {
    currentPage.value++
    const pageStart = (currentPage.value - 1) * pageSize

    loading.value = true
    error.value = null;

    const { data, error: supabaseError, count } = await fetch(pageStart, pageStart + pageSize - 1)

    error.value = supabaseError
    loading.value = false

    dataList.value.push(...data)
    console.log(dataList.value)
    hasMore.value = count!! > dataList.value.length

    return dataList.value
  }

  const reset = function () {
    currentPage.value = 0
    hasMore.value = false
    dataList.value = []
    return loadData()
  }

  return {
    data: dataList,
    reset,
    loading,
    hasMore,
    error,
    loadData,
  }
}
