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

  let slug = text;

  slug = normalizeTurkishLowercase(slug);

  slug = slug.replace(/[^\w\s-]/g, "");

  slug = slug.replace(/[\s_-]+/g, separator);

  slug = slug.replace(new RegExp(`^${separator}+|${separator}+$`, "g"), "");

  if (strict) {
    slug = slug.replace(/[^a-z0-9-]/g, "");
  }

  return slug;
}
