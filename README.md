# Habib React Portfolio

Starter portfolio React + Vite yang siap Anda edit dan deploy ke Vercel.

## 1) Install dependency
```bash
npm install
```

## 2) Jalankan di local
```bash
npm run dev
```
Akses biasanya di `http://localhost:5173`.

## 3) Build production
```bash
npm run build
```
Folder hasil build ada di `dist/`.

## 4) File yang paling sering diedit
- `src/data/profile.js` → data profil, skill, pendidikan, publikasi, link, dan project
- `public/assets/foto-profil.jpg` → foto profil
- `src/styles.css` → styling utama
- `src/components/` → komponen tampilan

## 5) Deploy ke Vercel via GitHub
1. Buat repository GitHub
2. Upload semua file project ini
3. Login ke Vercel
4. Klik **Add New Project**
5. Import repository GitHub Anda
6. Vercel akan mendeteksi Vite/React dan mengisi build command yang sesuai
7. Klik deploy

## 6) Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
vercel --prod
```

## 7) Hal yang perlu diganti sebelum online
- Ganti semua link `#` di `src/data/profile.js`
- Tambahkan foto profil ke `public/assets/foto-profil.jpg`
- Sesuaikan deskripsi project dummy
- Sesuaikan headline agar cocok dengan posisi yang Anda lamar
