import { eventHandler } from 'h3'
import { Database } from '~/lib/database.types';

export default eventHandler(async (event) => {
    const req = event.node.req;
    const res = event.node.res;

    if (req.method !== 'POST') {
        res.statusCode = 405
        res.end()
        return
    }

    const supabaseClient = useSupabaseClient<Database>()

    const blogs = await supabaseClient.from('blog').select('*')

    const staticUrls = [
        '',
        'contact',
        'imprint',
        'privacy-policy',
        'courses',
        'books',
    ]
    let urls = staticUrls
        .map((staticUrl) =>
            `https://intheloop.dev/${staticUrl}`
        )
        .join('\n')

    const [{ data: topics }, { data: books }, { data: courses }] =
        await Promise.all([
            supabaseClient.from('topic').select('id'),
            supabaseClient.from('book').select('id'),
            supabaseClient.from('course').select('id'),
        ])

    urls += topics
        .map((topic) =>
            `https://intheloop.dev/topics/${topic.id}`
        )
        .join('\n')

    urls += books
        .map((book) =>
            `https://intheloop.dev/books/${book.id}`
        )
        .join('\n')

    urls += courses
        .map((course) =>
            `https://intheloop.dev/courses/${course.id}`
        )
        .join('\n');

    return urls
})