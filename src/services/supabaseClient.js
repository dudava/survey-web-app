import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qdsibpkizystoiqpvoxo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkc2licGtpenlzdG9pcXB2b3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNDgwODcsImV4cCI6MjAwNDgyNDA4N30.p3bTafNZo-JkPBWS5ObQqtQMfGRXBhKsad9CvU0M-9g"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)