# Turkify 🇹🇷

Türkçe karakter normalizasyon paketi - SEO ve URL'ler için

## Özellikler

- ✅ Türkçe karakterleri Latin karşılıklarına çevirme (İ→I, Ş→S, Ç→C, vb.)
- ✅ Türkçe locale ile lowercase/uppercase dönüşümleri
- ✅ URL/Slug oluşturma (Türkçe karakter desteği ile)
- ✅ Tüm JavaScript framework'lerinde kullanılabilir (React, Next.js, Vue, Angular, vanilla JS)
- ✅ TypeScript desteği
- ✅ Kapsamlı test kapsamı

## Kurulum

```bash
npm install turkify
```

## Kullanım

### Normalize İşlemleri

```javascript
import {
  normalizeTurkish,
  toTurkishLowerCase,
  normalizeTurkishLowercase,
} from "turkify";

// Türkçe karakterleri Latin karşılıklarına çevirme
normalizeTurkish("İstanbul"); // 'Istanbul'
normalizeTurkish("Şişli"); // 'Sisli'
normalizeTurkish("Çankaya"); // 'Cankaya'

// Türkçe locale ile lowercase
toTurkishLowerCase("İSTANBUL"); // 'istanbul'
toTurkishLowerCase("İ"); // 'i'

// Normalize + lowercase
normalizeTurkishLowercase("İstanbul"); // 'istanbul'
normalizeTurkishLowercase("ŞİŞLİ"); // 'sisli'
```

### Slug/URL Oluşturma

```javascript
import { slugify } from "turkify";

// Basit kullanım
slugify("İstanbul Şişli"); // 'istanbul-sisli'
slugify("Çankaya Ümraniye"); // 'cankaya-umraniye'

// Özel separator
slugify("İstanbul Şişli", { separator: "_" }); // 'istanbul_sisli'
```

### React/Next.js Örneği

```jsx
import { slugify } from "turkify";

function Article({ title }) {
  const slug = slugify(title);
  return <a href={`/articles/${slug}`}>{title}</a>;
}
```

### Vue Örneği

```vue
<script setup>
import { slugify } from "turkify";

const title = "İstanbul Şişli";
const slug = slugify(title);
</script>
```

## API

### `normalizeTurkish(text: string): string`

Türkçe karakterleri Latin karşılıklarına çevirir.

**Örnekler:**

- `İstanbul` → `Istanbul`
- `Şişli` → `Sisli`
- `Çankaya` → `Cankaya`

### `toTurkishLowerCase(text: string): string`

Türkçe locale ile lowercase'e çevirir.

**Örnekler:**

- `İSTANBUL` → `istanbul`
- `İ` → `i`

### `toTurkishUpperCase(text: string): string`

Türkçe locale ile uppercase'e çevirir.

**Örnekler:**

- `istanbul` → `İSTANBUL`
- `ı` → `I`

### `normalizeTurkishLowercase(text: string): string`

Türkçe karakterleri normalize eder ve lowercase'e çevirir.

**Örnekler:**

- `İstanbul` → `istanbul`
- `ŞİŞLİ` → `sisli`

### `slugify(text: string, options?: SlugifyOptions): string`

Türkçe karakterleri destekleyen slug/URL oluşturur.

**Options:**

- `separator?: string` - Ayırıcı karakter (varsayılan: `-`)
- `strict?: boolean` - Sadece alfanumerik karakterler (varsayılan: `true`)

**Örnekler:**

- `slugify('İstanbul Şişli')` → `'istanbul-sisli'`
- `slugify('Çankaya/Ümraniye')` → `'cankaya-umraniye'`

## Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Test çalıştır
npm test

# Watch mode ile test
npm run test:watch

# Build
npm run build

# Coverage
npm run test:coverage
```
