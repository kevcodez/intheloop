import { acceptHMRUpdate, defineStore } from 'pinia'
import { TopicFollow } from '~/lib/Topic'
import { Database } from '~/lib/database.types'

export const useFollow = defineStore('follow', {
    state: () => ({
        topicIds: [] as string[],
    }),
    actions: {
        async loadTopics(userId: string) {
            const supabase = useSupabaseClient<Database>()
            const { data } = await supabase.from("topic_follow")
                .select("*")
                .eq('user_id', userId)

            this.topicIds = (data ?? []).map((it) => (it as TopicFollow).topic_id)
        },
        async follow(topicId: string) {
            const supabaseUser = useSupabaseUser()
            if (!supabaseUser.value) return;

            const supabase = await useSupabaseClient<Database>()

            await supabase.from("topic_follow").upsert({ user_id: supabaseUser.value.id, topic_id: topicId })


            if (!this.topicIds.includes(topicId)) {
                this.topicIds.push(topicId)
            }
        },
        async unfollow(topicId: string) {
            const supabaseUser = useSupabaseUser()
            if (!supabaseUser.value) return;

            const supabase = await useSupabaseClient<Database>()

            await supabase.from("topic_follow").delete().eq('user_id', supabaseUser.value.id).eq('topic_id', topicId)

            this.topicIds = this.topicIds.filter(it => it !== topicId)
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFollow, import.meta.hot))
}
