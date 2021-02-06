<template>
  <Nav />

  <div class="mx-auto max-w-7xl px-4 mt-8 sm:mt-16">
    {{ kotlin.name }}
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    Footer
  },
  setup() {
    const kotlin = reactive({
      name: "Kotlin",
      description:
        "Kotlin is an open-source, statically typed programming language supported and developed by JetBrains and open-source contributors.",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg",
      tags: [
        "kotlin",
        "programming-language",
        "compiler",
        "kotlin-library",
        "maven-plugin",
        "gradle-plugin",
        "intellij-plugin",
      ],
      scm: {
        url: "https://github.com/JetBrains/kotlin",
        displayName: "JetBrains/kotlin",
        type: "Github",
        meta: {
          stars: 35000,
        },
      },
      latestRelease: "1.4.30",
      website: "kotlinlang.org",
      documentation: "https://kotlinlang.org/docs/reference/",
      playground: "https://play.kotlinlang.org/",
      issueTracker: "https://youtrack.jetbrains.com/issues/KT",
      developers: [
        {
          name: "Jetbrains",
          website: "https://www.jetbrains.com/",
        },
      ],
      social: [
        { type: "Twitter", username: "Kotlin" },
        { type: "Twitter", username: "jetbrains" },
        {
          type: "Youtube",
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
          name: "Head First Kotlin",
          url:
            "https://www.oreilly.com/library/view/head-first-kotlin/9781491996683/",
          description: "...",
          image: "",
        },
      ],
      blogs: [
        {
          name: "Jetbrains Blog",
          url: "https://blog.jetbrains.com/kotlin/",
        },
        {
          name: "Medium",
          url: "https://medium.com/androiddevelopers/tagged/kotlin",
        },
      ],
      newsletters: [
        {
          name: "KotlinWeekly",
          url: "http://www.kotlinweekly.net/",
        },
      ],
      communities: [
        {
          type: "Forum",
          url: "https://discuss.kotlinlang.org/",
          official: true,
        },
        { type: "Slack", url: "https://kotlinlang.slack.com/", official: true },
        { type: "Discord", url: "https://kotlindiscord.com/" },
        {
          type: "Stackoverflow",
          url: "https://stackoverflow.com/questions/tagged/kotlin",
        },
        { type: "Reddit", url: "https://www.reddit.com/r/Kotlin/" },
        { type: "LinkedIn", url: "https://www.linkedin.com/groups/7417237/" },
      ],
      podcasts: [
        {
          name: "Talking Kotlin",
          url: "https://talkingkotlin.com/",
        },
      ],
    });

    return {
      kotlin,
    };
  },
});
</script>
