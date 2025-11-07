# Turkify 🇹🇷

<img width="1348" height="482" alt="carbon" src="https://github.com/user-attachments/assets/285a0ffa-878f-4e1a-bb9c-fa347207ccfe" />

Turkish character normalization package - for SEO and URLs

## Features

- ✅ **Turkish Character Normalization** - Convert Turkish characters to Latin equivalents (İ→I, Ş→S, Ç→C, etc.)
- ✅ **Turkish Locale Case Conversion** - Lowercase/uppercase conversions with Turkish locale support
- ✅ **URL/Slug Generation** - Create SEO-friendly slugs with Turkish character support
- ✅ **Framework Support** - Works with all JavaScript frameworks (React, Next.js, Vue, Angular, vanilla JS)
- ✅ **TypeScript Support** - Full TypeScript definitions included
- ✅ **Zero Dependencies** - No external dependencies

## Installation

```bash
npm install turkify
```

or

```bash
yarn add turkify
```

## Usage

### Turkish Character Normalization

```javascript
import { normalizeTurkish } from "turkify";

normalizeTurkish("İstanbul"); // 'Istanbul'
normalizeTurkish("Şişli"); // 'Sisli'
normalizeTurkish("Çankaya"); // 'Cankaya'
```

### Turkish Locale Case Conversion

```javascript
import { toTurkishLowerCase, toTurkishUpperCase } from "turkify";

toTurkishLowerCase("İSTANBUL"); // 'istanbul'
toTurkishLowerCase("İ"); // 'i'

toTurkishUpperCase("istanbul"); // 'İSTANBUL'
toTurkishUpperCase("ı"); // 'I'
```

### Normalize and Lowercase

```javascript
import { normalizeTurkishLowercase } from "turkify";

normalizeTurkishLowercase("İstanbul"); // 'istanbul'
normalizeTurkishLowercase("ŞİŞLİ"); // 'sisli'
```

### Slug/URL Generation

```javascript
import { slugify } from "turkify";

// Basic usage
slugify("İstanbul Şişli"); // 'istanbul-sisli'
slugify("Çankaya Ümraniye"); // 'cankaya-umraniye'

// Custom separator
slugify("İstanbul Şişli", { separator: "_" }); // 'istanbul_sisli'
```

## Framework Examples

### React Example

```jsx
import { slugify } from "turkify";

function Article({ title }) {
  const slug = slugify(title);
  return <a href={`/articles/${slug}`}>{title}</a>;
}
```

### Next.js Example

```jsx
import { slugify } from "turkify";

export default function BlogPost({ title }) {
  const slug = slugify(title);
  return (
    <Link href={`/blog/${slug}`}>
      <h1>{title}</h1>
    </Link>
  );
}
```

### Vue 3 Example (Composition API)

```vue
<template>
  <div>
    <a :href="`/articles/${slug}`">{{ title }}</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { slugify } from "turkify";

const title = "İstanbul Şişli";
const slug = computed(() => slugify(title));
</script>
```

### Angular Example

```typescript
import { Component } from "@angular/core";
import { slugify } from "turkify";

@Component({
  selector: "app-article",
  template: ` <a [href]="'/articles/' + slug">{{ title }}</a> `,
})
export class ArticleComponent {
  title = "İstanbul Şişli";
  slug = slugify(this.title);
}
```

### Vanilla JavaScript Example

```javascript
import { slugify, normalizeTurkish } from "turkify";

// Slug generation
const title = "İstanbul Şişli";
const slug = slugify(title);
document.getElementById("link").href = `/articles/${slug}`;

// Normalization
const normalized = normalizeTurkish("Çankaya");
console.log(normalized); // 'Cankaya'
```

## Contact With

Dilara Uluturhan - [LinkedIn](https://www.linkedin.com/in/dilarauluturhan/) - dilarauluturhan@outlook.com

---

# Turkify 🇹🇷

Türkçe karakter normalizasyon paketi - SEO ve URL'ler için

## Özellikler

- ✅ **Türkçe Karakter Normalizasyonu** - Türkçe karakterleri Latin karşılıklarına çevirme (İ→I, Ş→S, Ç→C, vb.)
- ✅ **Türkçe Locale Büyük/Küçük Harf Dönüşümü** - Türkçe locale ile lowercase/uppercase dönüşümleri
- ✅ **URL/Slug Oluşturma** - Türkçe karakter desteği ile SEO uyumlu slug oluşturma
- ✅ **Framework Desteği** - Tüm JavaScript framework'lerinde kullanılabilir (React, Next.js, Vue, Angular, vanilla JS)
- ✅ **TypeScript Desteği** - Tam TypeScript tanımları dahil
- ✅ **Sıfır Bağımlılık** - Harici bağımlılığı olmayan kütüphane

## Kurulum

```bash
npm install turkify
```

veya

```bash
yarn add turkify
```

## Kullanım

### Türkçe Karakter Normalizasyonu

```javascript
import { normalizeTurkish } from "turkify";

normalizeTurkish("İstanbul"); // 'Istanbul'
normalizeTurkish("Şişli"); // 'Sisli'
normalizeTurkish("Çankaya"); // 'Cankaya'
```

### Türkçe Locale Büyük/Küçük Harf Dönüşümü

```javascript
import { toTurkishLowerCase, toTurkishUpperCase } from "turkify";

toTurkishLowerCase("İSTANBUL"); // 'istanbul'
toTurkishLowerCase("İ"); // 'i'

toTurkishUpperCase("istanbul"); // 'İSTANBUL'
toTurkishUpperCase("ı"); // 'I'
```

### Normalize ve Lowercase

```javascript
import { normalizeTurkishLowercase } from "turkify";

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

## Framework Örnekleri

### React Örneği

```jsx
import { slugify } from "turkify";

function Article({ title }) {
  const slug = slugify(title);
  return <a href={`/articles/${slug}`}>{title}</a>;
}
```

### Next.js Örneği

```jsx
import { slugify } from "turkify";

export default function BlogPost({ title }) {
  const slug = slugify(title);
  return (
    <Link href={`/blog/${slug}`}>
      <h1>{title}</h1>
    </Link>
  );
}
```

### Vue 3 Örneği (Composition API)

```vue
<template>
  <div>
    <a :href="`/articles/${slug}`">{{ title }}</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { slugify } from "turkify";

const title = "İstanbul Şişli";
const slug = computed(() => slugify(title));
</script>
```

### Angular Örneği

```typescript
import { Component } from "@angular/core";
import { slugify } from "turkify";

@Component({
  selector: "app-article",
  template: ` <a [href]="'/articles/' + slug">{{ title }}</a> `,
})
export class ArticleComponent {
  title = "İstanbul Şişli";
  slug = slugify(this.title);
}
```

### JavaScript Örneği

```javascript
import { slugify, normalizeTurkish } from "turkify";

// Slug oluşturma
const title = "İstanbul Şişli";
const slug = slugify(title);
document.getElementById("link").href = `/articles/${slug}`;

// Normalizasyon
const normalized = normalizeTurkish("Çankaya");
console.log(normalized); // 'Cankaya'
```

## İletişim Kuralım

Dilara Uluturhan - [LinkedIn](https://www.linkedin.com/in/dilarauluturhan/) - dilarauluturhan@outlook.com
