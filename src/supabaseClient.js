import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ionoirrrwnwlplevhwpe.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTc4MDU0OCwiZXhwIjoxOTQ3MzU2NTQ4fQ.G7R5vIclRfWbOBzymiusDo8dWC9QOzz3IvXbmCLld3Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
