import { serverSupabaseClient } from '#supabase/server';
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

    const supabaseClient = serverSupabaseClient<Database>(event)

    const blogs = await supabaseClient.from('blog').select('*')

    const staticUrls = [
        '',
        'contact',
        'imprint',
        'privacy-policy',
        'courses',
        'books',
    ]
    let urls: string[] = staticUrls;

    const [{ data: topics }, { data: books }, { data: courses }] =
        await Promise.all([
            supabaseClient.from('topic').select('id'),
            supabaseClient.from('book').select('id'),
            supabaseClient.from('course').select('id'),
        ])

    topics!
        .map((topic) =>
            `/topics/${topic.id}`
        )
        .forEach(it => urls.push(it))

    books!
        .map((book) =>
            `/books/${book.id}`
        )
        .forEach(it => urls.push(it))

    courses!
        .map((course) =>
            `/courses/${course.id}`
        )
        .forEach(it => urls.push(it))

    return urls
})