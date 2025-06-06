// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mmeeioqrbehozwdjeauo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tZWVpb3FyYmVob3p3ZGplYXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NjA4ODcsImV4cCI6MjA2MzMzNjg4N30.VwkLEJnYzbRB-0BVULNYKpM-T8JI04QOkUMW7cA0sSw";

// Get the current origin for redirect URLs
const origin = typeof window !== 'undefined' 
  ? window.location.origin
  : 'http://localhost:8081';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    storageKey: 'supabase.auth.token',
    onAuthStateChange: async (event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        // Handle successful sign in
        console.log('Auth state changed:', event, session?.user?.email);
      }
    }
  },
  global: {
    headers: {
      'X-Client-Info': 'urban-gear-hub'
    }
  }
});
