import { DashboardStats, GroupSummary, LeaderboardRow } from '../types';
import { getSupabaseClient } from './supabaseClient';

export type LeaderboardScope = 'global' | 'weekly' | 'track' | 'group';

export interface CompleteLessonPayload {
  lessonId: string;
  trackId: string;
  completedAtIso?: string;
  isDailyMission?: boolean;
}

export interface CompleteLessonResult {
  xp_awarded: number;
  coins_awarded: number;
  streak: number;
  coin_balance: number;
}

export interface HintPurchasePayload {
  lessonId: string;
  tier: 'hint1' | 'hint2' | 'full';
  cost: number;
}

export interface AuthIdentity {
  userId: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  username: string | null;
}

const MISSING_DB_SETUP_HINT =
  'Required Supabase SQL objects are missing. Run migrations (including 20260211090000_init_pythonic.sql) in this project.';

const requireSupabase = () => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  }
  return supabase;
};

const isMissingRpcError = (error: any, rpcName: string): boolean => {
  const message = String(error?.message ?? '').toLowerCase();
  return (
    error?.code === 'PGRST202' ||
    message.includes('could not find the function') ||
    message.includes(rpcName.toLowerCase())
  );
};

const isMissingRelationError = (error: any): boolean => {
  const message = String(error?.message ?? '').toLowerCase();
  return error?.code === '42P01' || message.includes('relation') && message.includes('does not exist');
};

const generateJoinCode = (): string =>
  Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8).padEnd(8, 'X');

const toReadableErrorMessage = (error: any): string => {
  const message = String(error?.message ?? '').trim();
  const details = String(error?.details ?? '').trim();
  const hint = String(error?.hint ?? '').trim();
  return [message, details, hint].filter(Boolean).join(' | ') || 'Unknown Supabase error';
};

const getOAuthRedirectUrl = (): string => {
  const configured = import.meta.env.VITE_AUTH_REDIRECT_URL;
  if (typeof configured === 'string' && configured.trim().length > 0) {
    return configured.trim();
  }

  if (typeof window === 'undefined') {
    return '';
  }

  return new URL(import.meta.env.BASE_URL ?? '/', window.location.origin).toString();
};

export const signInAnonymously = async (): Promise<void> => {
  const supabase = requireSupabase();
  const { error } = await supabase.auth.signInAnonymously();
  if (error) {
    throw new Error(error.message);
  }
};

export const signInWithGoogle = async (): Promise<void> => {
  const supabase = requireSupabase();
  const redirectTo = getOAuthRedirectUrl();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
    },
  });
  if (error) {
    throw new Error(error.message);
  }
};

export const signOut = async (): Promise<void> => {
  const supabase = requireSupabase();
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};

export const fetchAuthIdentity = async (): Promise<AuthIdentity | null> => {
  const supabase = requireSupabase();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }
  if (!user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('username, avatar')
    .eq('user_id', user.id)
    .maybeSingle();

  if (profileError && !isMissingRelationError(profileError)) {
    throw new Error(profileError.message);
  }

  const fullName =
    String(user.user_metadata?.full_name ?? user.user_metadata?.name ?? '').trim() ||
    user.email?.split('@')[0] ||
    'Learner';

  return {
    userId: user.id,
    email: user.email ?? '',
    fullName,
    avatarUrl: (user.user_metadata?.avatar_url as string | undefined) ?? (profile?.avatar ?? null),
    username: profile?.username ?? null,
  };
};

export const getSessionUserId = async (): Promise<string | null> => {
  const supabase = getSupabaseClient();
  if (!supabase) return null;
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session?.user?.id ?? null;
};

export const fetchDashboard = async (): Promise<DashboardStats> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('get_user_dashboard');
  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data) ? data[0] : data;
  return {
    streak: Number(row?.streak ?? 0),
    coins: Number(row?.coins ?? 0),
    totalXp: Number(row?.total_xp ?? 0),
    weeklyXp: Number(row?.weekly_xp ?? 0),
    lessonsCompleted: Number(row?.lessons_completed ?? 0),
  };
};

export const completeLesson = async (payload: CompleteLessonPayload): Promise<CompleteLessonResult> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('complete_lesson_and_award', {
    p_lesson_id: payload.lessonId,
    p_track_id: payload.trackId,
    p_completed_at: payload.completedAtIso ?? new Date().toISOString(),
    p_is_daily_mission: payload.isDailyMission ?? false,
  });
  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data) ? data[0] : data;
  return {
    xp_awarded: Number(row?.xp_awarded ?? 0),
    coins_awarded: Number(row?.coins_awarded ?? 0),
    streak: Number(row?.streak ?? 0),
    coin_balance: Number(row?.coin_balance ?? 0),
  };
};

export const purchaseHint = async (payload: HintPurchasePayload): Promise<{ coin_balance: number }> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('purchase_hint_tier', {
    p_lesson_id: payload.lessonId,
    p_tier: payload.tier,
    p_cost: payload.cost,
  });
  if (error) {
    if (isMissingRpcError(error, 'purchase_hint_tier')) {
      throw new Error(`Hint purchase RPC is missing. ${MISSING_DB_SETUP_HINT}`);
    }
    throw new Error(toReadableErrorMessage(error));
  }
  const row = Array.isArray(data) ? data[0] : data;
  return { coin_balance: Number(row?.coin_balance ?? 0) };
};

export const purchaseStreakFreeze = async (cost: number): Promise<{ coin_balance: number }> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('purchase_streak_freeze', {
    p_cost: cost,
  });
  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data) ? data[0] : data;
  return { coin_balance: Number(row?.coin_balance ?? 0) };
};

export interface AttemptPayload {
  lessonId: string;
  codeHash: string;
  verdict: 'PASS' | 'FAIL';
  feedbackJson: unknown;
  estimatedTokens?: number | null;
  estimatedCostUsd?: number | null;
}

export const recordAttempt = async (payload: AttemptPayload): Promise<void> => {
  const supabase = requireSupabase();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) {
    throw new Error(userError.message);
  }
  if (!user) {
    throw new Error('Not authenticated.');
  }

  const { error } = await supabase.from('attempts').insert({
    user_id: user.id,
    lesson_id: payload.lessonId,
    code_hash: payload.codeHash,
    verdict: payload.verdict,
    feedback_json: payload.feedbackJson,
    estimated_tokens: payload.estimatedTokens ?? null,
    estimated_cost_usd: payload.estimatedCostUsd ?? null,
  });
  if (error) {
    throw new Error(error.message);
  }
};

export interface LeaderboardQueryInput {
  scope: LeaderboardScope;
  trackId?: string;
  groupId?: string;
  page?: number;
  pageSize?: number;
}

export const fetchLeaderboardPage = async (input: LeaderboardQueryInput): Promise<LeaderboardRow[]> => {
  if (input.scope === 'group' && !input.groupId) {
    return [];
  }

  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('get_leaderboard_page', {
    p_scope: input.scope,
    p_track_id: input.trackId ?? null,
    p_group_id: input.groupId ?? null,
    p_page: input.page ?? 1,
    p_page_size: input.pageSize ?? 20,
  });
  if (error) {
    if (isMissingRpcError(error, 'get_leaderboard_page')) {
      throw new Error(`Leaderboard RPC is missing. ${MISSING_DB_SETUP_HINT}`);
    }
    throw new Error(error.message);
  }
  return (data ?? []).map((row: any) => ({
    user_id: row.user_id,
    username: row.username ?? 'Learner',
    avatar: row.avatar ?? null,
    streak: Number(row.streak ?? 0),
    total_xp: Number(row.total_xp ?? 0),
    weekly_xp: Number(row.weekly_xp ?? 0),
    track_id: row.track_id ?? null,
    rank: Number(row.rank ?? 0),
  }));
};

export const fetchTrackProgress = async (): Promise<Record<string, number>> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.from('user_progress').select('track_id');
  if (error) {
    throw new Error(error.message);
  }
  const summary: Record<string, number> = {};
  for (const row of data ?? []) {
    const trackId = row.track_id as string;
    summary[trackId] = (summary[trackId] ?? 0) + 1;
  }
  return summary;
};

export const fetchCompletedLessonIds = async (): Promise<string[]> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.from('user_progress').select('lesson_id');
  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []).map((row) => String(row.lesson_id));
};

export const fetchUserBadges = async (): Promise<string[]> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.from('user_badges').select('badge').order('created_at', { ascending: false });
  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []).map((row) => String(row.badge));
};

export const createGroup = async (name: string): Promise<GroupSummary> => {
  const supabase = requireSupabase();
  const trimmedName = name.trim();
  if (!trimmedName) {
    throw new Error('Group name cannot be empty.');
  }

  const { data, error } = await supabase.rpc('create_group_with_code', { p_name: trimmedName });
  if (!error) {
    const row = Array.isArray(data) ? data[0] : data;
    return {
      id: String(row?.id),
      name: String(row?.name),
      join_code: String(row?.join_code),
    };
  }

  if (!isMissingRpcError(error, 'create_group_with_code')) {
    throw new Error(error.message);
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) {
    throw new Error(userError.message);
  }
  if (!user) {
    throw new Error('Not authenticated.');
  }

  let lastInsertError: any = null;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const joinCode = generateJoinCode();
    const { data: inserted, error: insertError } = await supabase
      .from('groups')
      .insert({
        name: trimmedName,
        owner_id: user.id,
        join_code: joinCode,
      })
      .select('id, name, join_code')
      .single();

    if (insertError) {
      lastInsertError = insertError;
      if (isMissingRelationError(insertError)) {
        throw new Error(`Groups table is missing. ${MISSING_DB_SETUP_HINT}`);
      }
      if (insertError.code === '23505') {
        continue;
      }
      throw new Error(insertError.message);
    }

    const { error: memberError } = await supabase.from('group_members').insert({
      group_id: inserted.id,
      user_id: user.id,
    });

    if (memberError && memberError.code !== '23505') {
      if (isMissingRelationError(memberError)) {
        throw new Error(`Group membership table is missing. ${MISSING_DB_SETUP_HINT}`);
      }
      throw new Error(memberError.message);
    }

    return {
      id: String(inserted.id),
      name: String(inserted.name),
      join_code: String(inserted.join_code),
    };
  }

  if (lastInsertError) {
    throw new Error(lastInsertError.message);
  }
  throw new Error('Failed to create group after retries.');
};

export const joinGroupByCode = async (joinCode: string): Promise<void> => {
  const supabase = requireSupabase();
  const normalizedCode = joinCode.trim().toUpperCase();
  if (!normalizedCode) {
    throw new Error('Join code cannot be empty.');
  }
  const { error } = await supabase.rpc('join_group_by_code', { p_join_code: normalizedCode });
  if (error) {
    if (isMissingRpcError(error, 'join_group_by_code')) {
      throw new Error(`Join-group RPC is missing. ${MISSING_DB_SETUP_HINT}`);
    }
    throw new Error(error.message);
  }
};

export const fetchMyGroups = async (): Promise<GroupSummary[]> => {
  const supabase = requireSupabase();
  const { data, error } = await supabase.rpc('get_my_groups');
  if (!error) {
    return (data ?? []).map((row: any) => ({
      id: String(row.id),
      name: String(row.name),
      join_code: String(row.join_code),
    }));
  }

  if (!isMissingRpcError(error, 'get_my_groups')) {
    throw new Error(error.message);
  }

  const { data: fallbackData, error: fallbackError } = await supabase
    .from('groups')
    .select('id, name, join_code')
    .order('created_at', { ascending: false });
  if (fallbackError) {
    if (isMissingRelationError(fallbackError)) {
      throw new Error(`Groups table is missing. ${MISSING_DB_SETUP_HINT}`);
    }
    throw new Error(fallbackError.message);
  }

  return (fallbackData ?? []).map((row: any) => ({
    id: String(row.id),
    name: String(row.name),
    join_code: String(row.join_code),
  }));
};
