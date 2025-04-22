import '@testing-library/jest-dom';
import { vi } from "vitest";

// Mock Supabase client globally
vi.mock("@supabase/supabase-js", async () => {
  const actual = await vi.importActual("@supabase/supabase-js");
  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        getSession: vi.fn(),
      },
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({ data: [], error: null }),
        insert: vi.fn().mockResolvedValue({ data: null, error: null }),
        update: vi.fn().mockResolvedValue({ data: null, error: null }),
        delete: vi.fn().mockResolvedValue({ data: null, error: null }),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: null, error: null }),
        order: vi.fn().mockReturnThis(),
      }),
    })),
  };
});