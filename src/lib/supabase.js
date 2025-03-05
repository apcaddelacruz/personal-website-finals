import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxhtneqfditfkdrlolac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4aHRuZXFmZGl0ZmtkcmxvbGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNzM2OTQsImV4cCI6MjA1Njc0OTY5NH0.LACxJjKlL2zlJe3-OyhpElp5Er0XQIlRIDBOHLNZY3A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
