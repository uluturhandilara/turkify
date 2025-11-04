import { describe, it, expect } from "vitest";
import { slugify } from "../src/slugify";

describe("slugify", () => {
  it("Türkçe karakterleri normalize edip slug oluşturmalı", () => {
    expect(slugify("İstanbul")).toBe("istanbul");
    expect(slugify("Şişli")).toBe("sisli");
    expect(slugify("Çankaya")).toBe("cankaya");
    expect(slugify("Ümraniye")).toBe("umraniye");
    expect(slugify("Örnek Test")).toBe("ornek-test");
  });

  it("Boşlukları separator ile değiştirmeli", () => {
    expect(slugify("İstanbul Şişli")).toBe("istanbul-sisli");
    expect(slugify("Çankaya Ümraniye")).toBe("cankaya-umraniye");
  });

  it("Özel karakterleri temizlemeli", () => {
    expect(slugify("İstanbul/Şişli")).toBe("istanbul-sisli");
    expect(slugify("Çankaya & Ümraniye")).toBe("cankaya-umraniye");
    expect(slugify("Test! @#$%^&*()")).toBe("test");
  });

  it("Birden fazla boşluğu tek separator yapmalı", () => {
    expect(slugify("İstanbul   Şişli")).toBe("istanbul-sisli");
    expect(slugify("Çankaya    Ümraniye")).toBe("cankaya-umraniye");
  });

  it("Başında ve sonunda separator varsa kaldırmalı", () => {
    expect(slugify(" İstanbul ")).toBe("istanbul");
    expect(slugify("-İstanbul-")).toBe("istanbul");
    expect(slugify("  İstanbul  ")).toBe("istanbul");
  });

  it("Custom separator kullanmalı", () => {
    expect(slugify("İstanbul Şişli", { separator: "_" })).toBe(
      "istanbul_sisli"
    );
    expect(slugify("Çankaya Ümraniye", { separator: "." })).toBe(
      "cankaya.umraniye"
    );
  });

  it("Rakamları korumalı", () => {
    expect(slugify("İstanbul 2024")).toBe("istanbul-2024");
    expect(slugify("Test 123 ABC")).toBe("test-123-abc");
  });

  it("Boş string veya null/undefined ile çalışmalı", () => {
    expect(slugify("")).toBe("");
    expect(slugify(null as any)).toBe("");
    expect(slugify(undefined as any)).toBe("");
  });

  it("Sadece özel karakterler varsa boş string döndürmeli", () => {
    expect(slugify("!@#$%^&*()")).toBe("");
    expect(slugify("---")).toBe("");
  });

  it("Gerçek dünya örnekleri", () => {
    expect(slugify("İstanbul Büyükşehir Belediyesi")).toBe(
      "istanbul-buyuksehir-belediyesi"
    );
    expect(slugify("Çankaya/Ümraniye İlçesi")).toBe("cankaya-umraniye-ilcesi");
    expect(slugify("Şişli - Kadıköy")).toBe("sisli-kadikoy");
  });
});
