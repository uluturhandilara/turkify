/**
 * Türkçe karakterleri Latin karşılıklarına çevirir
 * @param text - Normalize edilecek metin
 * @returns Normalize edilmiş metin
 *
 * @example
 * normalizeTurkish('İstanbul') // 'Istanbul'
 * normalizeTurkish('Şişli') // 'Sisli'
 * normalizeTurkish('Çankaya') // 'Cankaya'
 */
export function normalizeTurkish(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }
  const turkishMap: Record<string, string> = {
    İ: "I",
    ı: "i",
    Ş: "S",
    ş: "s",
    Ç: "C",
    ç: "c",
    Ğ: "G",
    ğ: "g",
    Ü: "U",
    ü: "u",
    Ö: "O",
    ö: "o",
  };

  let normalized = text;
  for (const [turkish, latin] of Object.entries(turkishMap)) {
    normalized = normalized.replace(new RegExp(turkish, "g"), latin);
  }

  normalized = normalized.normalize("NFD");
  normalized = normalized.replace(/[\u0300-\u036f]/g, "");
  normalized = normalized.normalize("NFC");

  return normalized;
}

/**
 * Türkçe locale ile lowercase'e çevirir
 * @param text - Küçük harfe çevrilecek metin
 * @returns Küçük harfe çevrilmiş metin
 *
 * @example
 * toTurkishLowerCase('İSTANBUL') // 'istanbul'
 */
export function toTurkishLowerCase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return text.toLocaleLowerCase("tr-TR");
}

/**
 * Türkçe locale ile uppercase'e çevirir
 * @param text - Büyük harfe çevrilecek metin
 * @returns Büyük harfe çevrilmiş metin
 *
 * @example
 * toTurkishUpperCase('istanbul') // 'İSTANBUL'
 */
export function toTurkishUpperCase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return text.toLocaleUpperCase("tr-TR");
}

/**
 * Türkçe karakterleri normalize eder ve lowercase'e çevirir
 * @param text - Normalize edilecek metin
 * @returns Normalize edilmiş ve lowercase metin
 *
 * @example
 * normalizeTurkishLowercase('İstanbul') // 'istanbul'
 */
export function normalizeTurkishLowercase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return normalizeTurkish(text).toLowerCase();
}
