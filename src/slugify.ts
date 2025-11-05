import { normalizeTurkishLowercase } from "./normalize";

/**
 * Türkçe karakterleri destekleyen slug/URL oluşturma fonksiyonu
 * @param text - Slug'a çevrilecek metin
 * @param options - Slug oluşturma seçenekleri
 * @returns URL-safe slug string
 *
 * @example
 * slugify('İstanbul Şişli') // 'istanbul-sisli'
 * slugify('Çankaya/Ümraniye', { separator: '_' }) // 'cankaya_umraniye'
 */
export function slugify(
  text: string,
  options: {
    separator?: string;
    strict?: boolean;
  } = {}
): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  const { separator = "-", strict = true } = options;
  const escapedSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let slug = text;
  slug = normalizeTurkishLowercase(slug);

  const separatorClass = separator === "-" ? "-" : escapedSeparator;
  slug = slug.replace(new RegExp(`[^\\w\\s${separatorClass}]`, "g"), separator);

  slug = slug.replace(/[\s_-]+/g, separator);
  slug = slug.replace(
    new RegExp(`^${escapedSeparator}+|${escapedSeparator}+$`, "g"),
    ""
  );

  if (strict) {
    slug = slug.replace(new RegExp(`[^a-z0-9${escapedSeparator}]`, "g"), "");
  }

  return slug;
}
