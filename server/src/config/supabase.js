// server/src/config/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ SUPABASE_URL atau SUPABASE_ANON_KEY belum di-set di .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);