export default {
  async scheduled(_event: ScheduledEvent, env: Env) {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY)
    await supabase.from('blogposts').select('id').limit(1)
    console.log('Supabase keep-alive ping sent')
  }
}
