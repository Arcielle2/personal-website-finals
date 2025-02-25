import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://oiycdjeamaqbbelyxtnc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9peWNkamVhbWFxYmJlbHl4dG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0Njk0NDQsImV4cCI6MjA1NjA0NTQ0NH0.8nusMdf9ctgNc9SFKtYo_ckR8LpSPoV-40-rbwXe9ts";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);