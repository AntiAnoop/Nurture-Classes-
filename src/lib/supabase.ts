/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';

// Clean standard way for Vite to read env variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isUrlValid = SUPABASE_URL.startsWith('http://') || SUPABASE_URL.startsWith('https://');

// Lazy initializing Supabase to prevent crashing on empty env vars
let supabaseInstance: ReturnType<typeof createClient> | null = null;
let isMockMode = false;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !isUrlValid) {
  console.warn(
    'Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing or set to placeholders. Running in mock simulation mode.'
  );
  isMockMode = true;
} else {
  try {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error('Error initializing real Supabase client, resolving to mock:', error);
    isMockMode = true;
  }
}

// Highly robust Mock Supabase implementation to guarantee compile-readiness and beautiful preview functionality
export interface MockUser {
  id: string;
  email: string;
}

const mockSession = {
  access_token: 'mock-access-token',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'mock-refresh-token',
  user: {
    id: 'mock-student-id-123',
    email: 'student@nurture.edu.in',
    email_confirmed_at: '2026-06-03T06:58:11Z',
    last_sign_in_at: '2026-06-03T06:58:11Z',
    app_metadata: {},
    user_metadata: {},
    aud: 'authenticated',
    created_at: '2026-06-03T06:58:11Z',
  },
};

const mockAuthService = {
  getSession: async () => {
    const saved = localStorage.getItem('nurture_mock_auth');
    if (saved) {
      return { data: { session: mockSession }, error: null };
    }
    return { data: { session: null }, error: null };
  },
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    // Return unsubscribe function
    const handleStorageChange = () => {
      const saved = localStorage.getItem('nurture_mock_auth');
      callback(saved ? 'SIGNED_IN' : 'SIGNED_OUT', saved ? mockSession : null);
    };
    window.addEventListener('storage', handleStorageChange);
    // Initial call
    const saved = localStorage.getItem('nurture_mock_auth');
    callback(saved ? 'SIGNED_IN' : 'SIGNED_OUT', saved ? mockSession : null);
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            window.removeEventListener('storage', handleStorageChange);
          },
        },
      },
    };
  },
  signInWithPassword: async ({ email, password }: any) => {
    // Support testing with standard credentials demo accounts
    if (email === 'demo@nurture.edu.in' || email === 'student@nurture.edu.in' || (email.includes('@') && password.length >= 6)) {
      const customSession = {
        ...mockSession,
        user: { ...mockSession.user, email },
      };
      localStorage.setItem('nurture_mock_auth', JSON.stringify(customSession));
      // Dispatch storage event to trigger listener
      window.dispatchEvent(new Event('storage'));
      return { data: { session: customSession, user: customSession.user }, error: null };
    }
    return {
      data: { session: null, user: null },
      error: { message: 'Invalid credentials. For preview mode, enter any email and a password >= 6 characters.' },
    };
  },
  signOut: async () => {
    localStorage.removeItem('nurture_mock_auth');
    window.dispatchEvent(new Event('storage'));
    return { error: null };
  },
};

export const getSupabaseClient = () => {
  if (isMockMode || !supabaseInstance) {
    return {
      auth: mockAuthService as any,
      isMock: true,
    };
  }
  return {
    auth: supabaseInstance.auth,
    isMock: false,
    realClient: supabaseInstance,
  };
};

export const supabase = getSupabaseClient();
export { isMockMode };
