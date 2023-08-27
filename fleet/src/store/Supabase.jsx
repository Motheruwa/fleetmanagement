import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ydafvjkvuyefrcwujwkk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYWZ2amt2dXllZnJjd3Vqd2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NjkwOTIsImV4cCI6MjAwNDA0NTA5Mn0.Qho8ePa_OFBhyQRhKbmO3qH9YcutShYUy0DsYZ0enCs"
export  const supabase = createClient(supabaseUrl, supabaseKey)