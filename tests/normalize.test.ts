import { describe, it, expect } from "vitest";
import {
  normalizeTurkish,
  toTurkishLowerCase,
  toTurkishUpperCase,
  normalizeTurkishLowercase,
} from "../src/normalize";

describe("normalizeTurkish", () => {
  it("Türkçe karakterleri Latin karşılıklarına çevirmeli", () => {
    expect(normalizeTurkish("İstanbul")).toBe("Istanbul");
    expect(normalizeTurkish("Şişli")).toBe("Sisli");
    expect(normalizeTurkish("Çankaya")).toBe("Cankaya");
    expect(normalizeTurkish("Ümraniye")).toBe("Umraniye");
    expect(normalizeTurkish("Örnek")).toBe("Ornek");
    expect(normalizeTurkish("Ğüvenli")).toBe("Guvenli");
  });

  it("Küçük harfleri de çevirmeli", () => {
    expect(normalizeTurkish("istanbul")).toBe("istanbul");
    expect(normalizeTurkish("şişli")).toBe("sisli");
    expect(normalizeTurkish("çankaya")).toBe("cankaya");
    expect(normalizeTurkish("ümraniye")).toBe("umraniye");
    expect(normalizeTurkish("örnek")).toBe("ornek");
    expect(normalizeTurkish("ğüvenli")).toBe("guvenli");
  });

  it("Karışık case ile çalışmalı", () => {
    expect(normalizeTurkish("İsTaNbUl")).toBe("IsTaNbUl");
    expect(normalizeTurkish("ŞiŞlİ")).toBe("SiSlI");
  });

  it("Birden fazla Türkçe karakter içeren metinleri işlemeli", () => {
    expect(normalizeTurkish("İstanbul Şişli Çankaya")).toBe(
      "Istanbul Sisli Cankaya"
    );
    expect(normalizeTurkish("Ümraniye Örnek Ğüvenli")).toBe(
      "Umraniye Ornek Guvenli"
    );
  });

  it("Türkçe karakter içermeyen metinleri olduğu gibi döndürmeli", () => {
    expect(normalizeTurkish("Istanbul")).toBe("Istanbul");
    expect(normalizeTurkish("Hello World")).toBe("Hello World");
    expect(normalizeTurkish("123")).toBe("123");
  });

  it("Boş string veya null/undefined ile çalışmalı", () => {
    expect(normalizeTurkish("")).toBe("");
    expect(normalizeTurkish(null as any)).toBe("");
    expect(normalizeTurkish(undefined as any)).toBe("");
  });
});

describe("toTurkishLowerCase", () => {
  it("Türkçe locale ile lowercase yapmalı", () => {
    expect(toTurkishLowerCase("İSTANBUL")).toBe("istanbul");
    expect(toTurkishLowerCase("İ")).toBe("ı");
    expect(toTurkishLowerCase("ŞİŞLİ")).toBe("şişli");
    expect(toTurkishLowerCase("ÇANKAYA")).toBe("çankaya");
  });

  it("Zaten küçük harfleri olduğu gibi bırakmalı", () => {
    expect(toTurkishLowerCase("istanbul")).toBe("istanbul");
    expect(toTurkishLowerCase("şişli")).toBe("şişli");
  });

  it("Boş string ile çalışmalı", () => {
    expect(toTurkishLowerCase("")).toBe("");
  });
});

describe("toTurkishUpperCase", () => {
  it("Türkçe locale ile uppercase yapmalı", () => {
    expect(toTurkishUpperCase("istanbul")).toBe("İSTANBUL");
    expect(toTurkishUpperCase("ı")).toBe("I");
    expect(toTurkishUpperCase("şişli")).toBe("ŞİŞLİ");
    expect(toTurkishUpperCase("çankaya")).toBe("ÇANKAYA");
  });

  it("Zaten büyük harfleri olduğu gibi bırakmalı", () => {
    expect(toTurkishUpperCase("İSTANBUL")).toBe("İSTANBUL");
    expect(toTurkishUpperCase("ŞİŞLİ")).toBe("ŞİŞLİ");
  });

  it("Boş string ile çalışmalı", () => {
    expect(toTurkishUpperCase("")).toBe("");
  });
});

describe("normalizeTurkishLowercase", () => {
  it("Türkçe karakterleri normalize edip lowercase yapmalı", () => {
    expect(normalizeTurkishLowercase("İstanbul")).toBe("istanbul");
    expect(normalizeTurkishLowercase("ŞİŞLİ")).toBe("sisli");
    expect(normalizeTurkishLowercase("Çankaya")).toBe("cankaya");
    expect(normalizeTurkishLowercase("Ümraniye")).toBe("umraniye");
    expect(normalizeTurkishLowercase("Örnek")).toBe("ornek");
  });

  it("Karışık case ile çalışmalı", () => {
    expect(normalizeTurkishLowercase("İsTaNbUl")).toBe("istanbul");
    expect(normalizeTurkishLowercase("ŞiŞlİ")).toBe("sisli");
  });

  it("Boş string ile çalışmalı", () => {
    expect(normalizeTurkishLowercase("")).toBe("");
  });
});
