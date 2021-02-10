<template>
  <Nav />

  <div>
    <BaseInfo class="container" :info="kotlin" />

    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          :style="`stroke: none; fill: ${kotlin.color}`"
        ></path>
      </svg>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-24 container">
      <div class="col-span-2">
        <router-view :topic="kotlin"></router-view>
      </div>

      <div class="space-y-4">
        <Communities :communities="kotlin.communities" />

        <Newsletters :newsletters="kotlin.newsletters" />

        <Podcasts :podcasts="kotlin.podcasts" />
      </div>
    </div>
  </div>

  <Footer />
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import Nav from "/@/components/Nav.vue";
import BaseInfo from "/@/components/BaseInfo.vue";
import Blogs from "/@/components/Blogs.vue";
import Books from "/@/components/Books.vue";
import Communities from "/@/components/Communities.vue";
import LatestReleases from "/@/components/LatestReleases.vue";
import Newsletters from "/@/components/Newsletters.vue";
import Podcasts from "/@/components/Podcasts.vue";
import SocialLinks from "/@/components/SocialLinks.vue";
import Courses from "/@/components/Courses.vue";
import Footer from "/@/components/Footer.vue";
import { Topic } from "/@/lib/Topic";

export default defineComponent({
  name: "App",
  components: {
    BaseInfo,
    Blogs,
    Books,
    Communities,
    LatestReleases,
    Newsletters,
    Podcasts,
    SocialLinks,
    Nav,
    Footer,
    Courses,
  },
  setup() {
    const kotlin: Topic = reactive({
      color: "#ea9035",
      name: "Kotlin",
      description:
        "Kotlin is an open-source statically typed programming language that targets the JVM, Android, JavaScript and Native. It’s developed by JetBrains. The project started in 2010 and was open source from very early on. The first official 1.0 release was in February 2016.",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg",
      tags: [
        "Programming Language",
        "Compiler",
        "Maven-Plugin",
        "Gradle-Plugin",
        "Intellij-Plugin",
      ],
      scm: {
        url: "https://github.com/JetBrains/kotlin",
        displayName: "JetBrains/kotlin",
        type: "Github",
        meta: {
          stars: 35000,
        },
      },
      latestRelease: {
        version: "1.4.30",
        releaseNotesUrl:
          "https://github.com/JetBrains/kotlin/releases/tag/v1.4.30",
        publishedAt: "2021-02-03",
      },
      website: "https://kotlinlang.org",
      documentation: "https://kotlinlang.org/docs/reference/",
      playground: "https://play.kotlinlang.org/",
      issueTracker: "https://youtrack.jetbrains.com/issues/KT",
      developers: [
        {
          name: "Jetbrains",
          website: "https://www.jetbrains.com/",
          logoUrl:
            "https://www.jetbrains.com/company/brand/img/jetbrains_logo.png",
        },
      ],
      social: [
        { type: "Twitter", label: "Kotlin", url: "https://twitter.com/kotlin" },
        {
          type: "Twitter",
          label: "JetBrains",
          url: "https://twitter.com/jetbrains",
        },
        {
          type: "Youtube",
          label: "Kotlin by JetBrains",
          url: "https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw",
        },
      ],
      license: {
        name: "Apache 2",
        url:
          "https://github.com/JetBrains/kotlin/blob/master/license/LICENSE.txt",
      },
      books: [
        {
          title: "Kotlin In Action",
          url: "https://www.manning.com/books/kotlin-in-action",
          description:
            "Kotlin in Action guides experienced Java developers from the language basics of Kotlin all the way through building applications to run on the JVM and Android devices.",
          image:
            "https://images.manning.com/360/480/resize/book/3/9458a37-9793-4e67-a23f-585da31dff55/Jemerov-Kotlin-HI.png",
          authors: [
            {
              name: "Svetlana Isakova",
            },
            {
              name: "Dmitry Jemerov",
            },
          ],
          publishedAt: "2017-02-01",
        },
        {
          title: "Head First Kotlin",
          url:
            "https://www.oreilly.com/library/view/head-first-kotlin/9781491996683/",
          description:
            "Head First Kotlin is a complete introduction to coding in Kotlin. This hands-on book helps you learn the Kotlin language with a unique method that goes beyond syntax and how-to manuals and teaches you how to think like a great Kotlin developer. You’ll learn everything from language fundamentals to collections, generics, lambdas, and higher-order functions. Along the way, you’ll get to play with both object-oriented and functional programming. If you want to really understand Kotlin, this is the book for you.",
          image:
            "https://learning.oreilly.com/library/cover/9781491996683/250w/",
          publishedAt: "2019-02-01",
          authors: [
            {
              name: "Dawn Griffiths",
            },
            { name: "David Griffiths" },
          ],
        },
        {
          title: "Kotlin for Android Developers",
          url: "https://leanpub.com/kotlin-for-android-developers",
          description:
            "Kotlin is the new official language to write Android Apps, and thanks to this book, you'll be writing code in no time. Straight to the point, practical and full of examples, it will show you the language while developing an Android App. Learn the Kotlin and start enjoying Android development again with this powerful and modern language.",
          image:
            "https://d2sofvawe08yqg.cloudfront.net/kotlin-for-android-developers/hero2x?1549463429",
          publishedAt: "2019-02-11",
          authors: [
            {
              name: "Antonio Leiva",
            },
          ],
        },
      ],
      blogs: [
        {
          name: "Jetbrains Blog",
          url: "https://blog.jetbrains.com/kotlin/",
          latestPosts: [
            {
              title:
                "1.4.30 Is Released With a New JVM Backend and Language and Multiplatform Features",
              link:
                "https://blog.jetbrains.com/kotlin/2021/02/kotlin-1-4-30-released/",
              image:
                "https://blog.jetbrains.com/wp-content/uploads/2021/02/1.4.30_Kotlin_realise_5_Blogpost_1.png",
              publishedAt: "2021-02-04",
            },
            {
              title: "New Language Features Preview in Kotlin 1.4.30",
              link:
                "https://blog.jetbrains.com/kotlin/2021/02/new-language-features-preview-in-kotlin-1-4-30/",
              image:
                "https://blog.jetbrains.com/wp-content/uploads/2021/02/1.4.30_Kotlin_realise_5_Blogpost_3.png",
              publishedAt: "2021-02-04",
            },
          ],
        },
        {
          name: "Medium",
          url: "https://medium.com/androiddevelopers/tagged/kotlin",
          latestPosts: [
            {
              title:
                "Bridging the gap between coroutines, JVM threads, and concurrency problems",
              link:
                "https://medium.com/androiddevelopers/bridging-the-gap-between-coroutines-jvm-threads-and-concurrency-problems-864e563bd7c",
              image:
                "https://miro.medium.com/max/4800/1*-hW9fFeCaJNdcoJgOgaoGA.png",
              publishedAt: "2021-03-02",
            },
            {
              title: "WorkManager — Kotlin APIs",
              link:
                "https://medium.com/androiddevelopers/workmanager-kotlin-apis-a0fb9dfbfeb6",
              image:
                "https://miro.medium.com/max/4800/1*D2aKnfPkmj71LZWVghXjcQ.png",
              publishedAt: "2021-01-07",
            },
          ],
        },
        {
          name: "dev.to",
          url: "https://dev.to/t/kotlin",
          latestPosts: [
            {
              title:
                "Using RecyclerView with ViewBinding in Android via Kotlin",
              link:
                "https://dev.to/theimpulson/using-recyclerview-with-viewbinding-in-android-via-kotlin-1hgl",
              image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--2ybXafGW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/v8lwwev7qszsyqho4564.png",
              publishedAt: "2021-02-07",
            },
            {
              title:
                "The state of JVM desktop frameworks: Jetpack Compose for Desktop",
              link:
                "https://dev.to/nfrankel/the-state-of-jvm-desktop-frameworks-jetpack-compose-for-desktop-4egf",
              image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--k8bg9zHa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/8wixatjcjuccjzjcjvqp.png",
              publishedAt: "2021-02-07",
            },
          ],
        },
      ],
      newsletters: [
        {
          name: "KotlinWeekly",
          url: "http://www.kotlinweekly.net/",
          description: "Your weekly dose of Kotlin",
        },
      ],
      releases: [
        {
          version: "1.4.30",
          releaseNotesUrl:
            "https://github.com/JetBrains/kotlin/releases/tag/v1.4.30",
          publishedAt: "2021-02-03",
        },
        {
          version: "1.4.21",
          releaseNotesUrl:
            "https://github.com/JetBrains/kotlin/releases/tag/v1.4.21",
          publishedAt: "2020-12-09",
        },
        {
          version: "1.4.20",
          releaseNotesUrl:
            "https://github.com/JetBrains/kotlin/releases/tag/v1.4.20",
          publishedAt: "2020-11-19",
        },
      ],
      communities: [
        {
          type: "Forum",
          url: "https://discuss.kotlinlang.org/",
          official: true,
          name: "Kotlin Discussions",
        },
        {
          type: "Slack",
          url: "https://kotlinlang.slack.com/",
          official: true,
          name: "Slack",
        },
        {
          type: "Discord",
          url: "https://kotlindiscord.com/",
          name: "Kotlin Discord",
        },
        {
          type: "Stackoverflow",
          url: "https://stackoverflow.com/questions/tagged/kotlin",
          name: "Stackoverflow",
        },
        {
          type: "Reddit",
          url: "https://www.reddit.com/r/Kotlin/",
          name: "Reddit",
        },
        {
          type: "LinkedIn",
          url: "https://www.linkedin.com/groups/7417237/",
          name: "LinkedIn",
        },
      ],
      podcasts: [
        {
          name: "Talking Kotlin",
          url: "https://talkingkotlin.com/",
          description: "A Podcast on Kotlin and more",
        },
      ],
      courses: [
        {
          name: "Introduction to Kotlin Programming",
          publishedAt: "2016-01-10",
          price: "$50",
          url:
            "https://www.oreilly.com/library/view/introduction-to-kotlin/9781491964125/",
          image: "https://learning.oreilly.com/library/cover/9781491964125/",
          description:
            "Kotlin 1.0 was released in February 2016, and since that time it’s been embraced by developers around the world, especially those within the Android community. This course provides an easy introduction to this open source programming language that covers the basics and showcases the language’s interoperability with Java and the JVM platform. A key feature of Kotlin is its similarity to Java, C#, and JavaScript. If you’re familiar with any of these languages, says expert trainer Hadi Hariri, take this course and you’ll understand Kotlin on day one.",
          authors: [{ name: "Hadi Hariri" }],
        },
        {
          name: "Jetbrain's Hyperskill Academy",
          description:
            "An interactive learning platform for Kotlin and other languages",
          url: "https://hyperskill.org/onboarding/tracks/3",
          image:
            "https://hyperskill.azureedge.net/static/img/logo-gradient.7757abec.svg",
          price: "$50",
          authors: [{ name: "Jetbrains Academy" }],
        },
      ],
    });

    return {
      kotlin,
    };
  },
});
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4 mt-8 sm:mt-16;
}
</style>
