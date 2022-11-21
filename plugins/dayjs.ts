import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default defineNuxtPlugin(() => {

    const relativeDate = (value: string | Date) => {
        return dayjs().to(dayjs(value))
    }
    
    const formatDate = (value: string | Date, format: string) => {
        return dayjs(value).format(format)
    }

    return {
        provide: {
          formatDate,
          relativeDate
        }
      }
    
})