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

export function toTurkishLowerCase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return text.toLocaleLowerCase("tr-TR");
}

export function toTurkishUpperCase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return text.toLocaleUpperCase("tr-TR");
}

export function normalizeTurkishLowercase(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return normalizeTurkish(text).toLowerCase();
}
