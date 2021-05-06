import {
    ref,
    useFetch,
} from '@nuxtjs/composition-api'


export default function usePagedList<T>({ pageSize = 10, fetch }: { pageSize: number, fetch: (rangeStart: number, rangeEnd: number) => any }) {
    const currentPage = ref(0)
    const dataList = ref<T[]>([])
    const hasMore = ref(true)
    const loading = ref(true)
    const error = ref(null)

    useFetch(async () => {
        currentPage.value++
        const pageStart = (currentPage.value - 1) * pageSize
        loading.value = true
        error.value = null

        const { data, error: supabaseError, count } = await fetch(pageStart, pageStart + pageSize - 1)

        loading.value = false
        error.value = supabaseError
        dataList.value = dataList.value.concat(data)
        hasMore.value = count!! > dataList.value.length
    })

    const reset = function () {
        currentPage.value = 0
        hasMore.value = false
        dataList.value = []
        this.$fetch()
    }

    return {
        dataList,
        reset,
        loading,
        hasMore,
        error
    }
}