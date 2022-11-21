declare module '#app' {
    interface NuxtApp {
      $relativeDate (date: string | Date): string
      $formatDate (date:  string | Date, format: string): string
    }
  }
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $relativeDate (date: string | Date): string
        $formatDate (date:  string | Date, format: string): string
    }
  }
  export { }