// ============================================================
// SITE VARIANT CONFIG
// ============================================================
// Controls the positioning of the entire site.
//
// Variants:
//   'default' — Design Engineer positioning (general purpose)
//   'growth'  — Growth Engineer positioning (PLG, experimentation roles)
//
// To switch variants: change ACTIVE_VARIANT and redeploy to Vercel.
//
// Future upgrade path: replace ACTIVE_VARIANT with a Vercel Edge Config
// read (key: "site-variant") to switch without a redeploy. The type and
// the fallback constant below are the only things that would need to change.
// ============================================================

export type SiteVariant = 'default' | 'growth'

export const ACTIVE_VARIANT: SiteVariant = 'growth'
