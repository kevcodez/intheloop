<template>
  <div class="max-w-7xl mx-auto py-12 px-4 lg:py-12">
    <form
      class="space-y-4 max-w-3xl"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        If you see any invalid information, would like to see another topic or
        have suggestions on how to improve this page, let me know
      </div>
      <div>
        <label class="form-label">Name (optional)</label>
        <input class="input" type="text" name="name" />
      </div>
      <div>
        <label class="form-label">Email (optional)</label>
        <input class="input" type="email" name="email" />
      </div>
      <div>
        <label class="form-label">Text</label>
        <textarea
          class="input h-40"
          style="min-height: 150px"
          name="text"
          required
          :minlength="30"
        />
      </div>
      <div>
        <button class="button" type="submit">Send message</button>
      </div>
    </form>
  </div>
</template>
