/**
 * Session-replay consent. PostHog session recording only starts after the
 * visitor clicks "Allow" in ReplayConsent; the choice is kept in
 * localStorage under this key ("granted" | "declined").
 */
export const REPLAY_CONSENT_KEY = "ak-replay-consent";
