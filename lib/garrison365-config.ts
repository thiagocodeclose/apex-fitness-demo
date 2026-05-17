// @ts-nocheck
import { garrison365 as defaultGarrison365 } from './site-data';

export type Garrison365Config = {
  gymSlug: string;
  primaryColor?: string;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  baseUrl: string;
};

export function buildCssVars(cfg: Garrison365Config | null): React.CSSProperties {
  if (!cfg) return {};
  return {
    ...(cfg.primaryColor && { '--gold': cfg.primaryColor }),
    ...(cfg.bgColor && { '--bg': cfg.bgColor }),
    ...(cfg.textColor && { '--text': cfg.textColor }),
    ...(cfg.borderRadius && { '--radius': cfg.borderRadius }),
  } as React.CSSProperties;
}

const GYM_SLUG = defaultGarrison365.gymSlug;

export async function getGarrison365Config(): Promise<Garrison365Config | null> {
  try {
    const res = await fetch(`${defaultGarrison365.baseUrl}/api/site-config?slug=${GYM_SLUG}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
