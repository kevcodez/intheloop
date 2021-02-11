import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://pvnyntuqgqafdtgzucqj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA3MjMyMiwiZXhwIjoxOTI4NjQ4MzIyfQ.47NmRknfnVDcLDWZouiFjVErXkw15kYJrUdkXt5Ii9I'
)