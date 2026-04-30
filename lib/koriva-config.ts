// @ts-nocheck
import { koriva as defaultKoriva } from './site-data';

export type KorivaConfig = {
  gymSlug: string;
  primaryColor?: string;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  baseUrl: string;
};

export function buildCssVars(cfg: KorivaConfig | null): React.CSSProperties {
  if (!cfg) return {};
  return {
    ...(cfg.primaryColor && { '--gold': cfg.primaryColor }),
    ...(cfg.bgColor && { '--bg': cfg.bgColor }),
    ...(cfg.textColor && { '--text': cfg.textColor }),
    ...(cfg.borderRadius && { '--radius': cfg.borderRadius }),
  } as React.CSSProperties;
}

const GYM_SLUG = defaultKoriva.gymSlug;

export async function getKorivaConfig(): Promise<KorivaConfig | null> {
  try {
    const res = await fetch(`${defaultKoriva.baseUrl}/api/site-config?slug=${GYM_SLUG}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
