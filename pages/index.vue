<template>
  <div>
    <div class="text-white bg-purple-800">
      <div class="page-container flex flex-col">
        <h2 class="text-3xl font-extrabold tracking-tight text-white mt-6">
          Stay in the loop
        </h2>
        <p class="max-w-3xl mt-4 text-lg">
          Keeping up with the ever-changing developer ecosystem can be tough.
        </p>
        <p class="max-w-3xl mt-4 text-lg">
          Intheloop helps stay up-to-date with the technologies you're
          interested in.
        </p>
        <div
          class="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <link-icon class="w-6 h-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">
                Links &amp; Communities
              </h3>
              <p class="mt-2 text-base">
                Quickly see the most important links and find communities to
                engage with.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <twitter-icon class="w-6 h-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Tweets</h3>
              <p class="mt-2 text-base">
                Don't miss the most discussed, popular or controversial tweets.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <tag-icon class="w-6 h-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Releases</h3>
              <p class="mt-2 text-base">
                Get an overview of the latest releases and their changelog.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <rss-icon class="w-6 h-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Blog Posts</h3>
              <p class="mt-2 text-base">
                See all the related blog posts in one place.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <book-icon class="w-6 h-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">
                Books &amp; Courses
              </h3>
              <p class="mt-2 text-base">
                Dive deep with recommended books &amp; courses.
              </p>
            </div>
          </div>

          <div class="mb-6">
            <div class="flex flex-row justify-between">
              <span class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                <robot-icon class="w-6 h-6 text-white" />
              </span>
              <span class="float-right px-2 bg-purple-900 self-start">SOON</span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">
                Notifications &amp; Digest
              </h3>
              <p class="mt-2 text-base">
                Follow topics/developers and get personal digests or
                notifications based on your interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-8 lg:py-14">
      <newsletter-home-section />
    </div>

    <div class="page-container">
      <div class="flex flex-row justify-between mb-6">
        <p class="text-2xl tracking-wide font-medium">Discover topics</p>
        <nuxt-link class="button" to="/topics">See all</nuxt-link>
      </div>

      <topic-list v-if="topics" :topics="topics" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LinkIcon from '@/assets/icons/link.svg?component'
import TwitterIcon from '@/assets/icons/twitter.svg?component'
import TagIcon from '@/assets/icons/tag.svg?component'
import BookIcon from '@/assets/icons/book.svg?component'
import RssIcon from '@/assets/icons/rss.svg?component'
import RobotIcon from '@/assets/icons/robot.svg?component'
import { Database } from '@/lib/database.types'

const supabase = useSupabaseClient<Database>()

const { data: topics } = useAsyncData('topics', async () => {
  const { data } = await supabase
    .from('topic')
    .select('*')
    .eq('info->>live', 'true')
    .limit(6)

  return data
})
</script>
