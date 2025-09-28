# Baltic Digital Institute – Deploy & Build Guide

Ten plik opisuje, jak pracować z repozytorium i stroną www hostowaną na **GitHub Pages**.

---

## 🔹 1. Deployment na GitHub Pages (wersja szybka – CDN)
1. Zaloguj się do GitHub.
2. Otwórz repozytorium `baltic-digital-website`.
3. Kliknij **Add file → Upload files** albo edytuj istniejące pliki (np. `index.html`).
4. Commituj zmiany do gałęzi `main`.
5. GitHub Pages automatycznie zaktualizuje stronę pod adresem:


---

## 🔹 2. Lokalne środowisko (Node.js + npm, Tailwind build)
⚠️ Na razie używamy Tailwind CDN. W przyszłości przechodzimy na lokalny build.

### Instalacja środowiska (macOS)
```bash
# Sprawdź, czy masz Node.js
node -v
npm -v

# Jeśli brak → zainstaluj przez Homebrew
brew install node

# Przejdź do katalogu repo
cd baltic-digital-website

# Zainicjuj paczkę
npm init -y

# Zainstaluj Tailwind i narzędzia
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

baltic-digital-website/
 ├─ src/
 │   └─ input.css   # główny plik CSS (z dyrektywami @tailwind)
 ├─ dist/
 │   └─ output.css  # wygenerowany plik (commitowany do repo)
 ├─ tailwind.config.js
 ├─ package.json
 └─ ...

module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

<link href="dist/output.css" rel="stylesheet">

npx tailwindcss -i ./src/input.css -o ./dist/output.css


---

## 🔍 Broken links – skanowanie

Teraz mogę przelecieć wszystkie pliki `.html` i zbudować raport linków (które istnieją, które prowadzą do 404).  
👉 Potrzebuję od Ciebie jeszcze potwierdzenia: czy mam robić **pełne automatyczne skanowanie repo** (zajmie chwilę, ale będzie 100% lista), czy wystarczy mi na razie ręczny crawl z Twojej publicznej strony (szybciej, ale może nie wychwycić ukrytych plików)?
