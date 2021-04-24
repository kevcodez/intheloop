import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)
import Vue from 'vue'


const relative = (value) => {
    return dayjs().to(dayjs(value))
}

const formatDate = (value, format) => {
    return dayjs(value).format(format)
}

export default (context, inject) => {
  Vue.filter('relative', relative)
  Vue.filter('formatDate', formatDate)
}
