import { ui, defaultLang, type TranslationKey } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split("/").filter(Boolean)[0];
  if (segment === "en") return "en";
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : "/en/";
}

export function altLangPath(lang: Lang): string {
  return lang === "cs" ? "/en/" : "/";
}

export function altLang(lang: Lang): Lang {
  return lang === "cs" ? "en" : "cs";
}

export function flagCodeForLang(lang: Lang): string {
  return lang === "cs" ? "cz" : "gb";
}
