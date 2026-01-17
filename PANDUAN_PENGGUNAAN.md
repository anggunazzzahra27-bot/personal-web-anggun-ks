# Panduan Penggunaan Website Pribadi

## Pengenalan

Website ini dibuat menggunakan teknologi modern web development dengan sistem build Webpack. File-file terpisah untuk HTML, CSS, dan JavaScript memudahkan maintenance dan pengembangan lebih lanjut.

## Struktur File

### 1. HTML (src/index.html)
File ini berisi struktur dan konten website. Anda dapat:
- Mengedit teks dan konten sesuai informasi pribadi Anda
- Menambah atau mengurangi section
- Mengubah urutan section

### 2. CSS (src/css/style.css)
File ini mengatur tampilan visual website. Anda dapat:
- Mengubah warna dengan mengedit variabel di `:root`
- Menyesuaikan ukuran font dan spacing
- Menambah animasi baru
- Mengubah layout responsive

### 3. JavaScript (src/js/index.js)
File ini menangani interaktivitas website. Fitur yang tersedia:
- **Navigation**: Menu hamburger untuk mobile, smooth scroll
- **ScrollAnimations**: Animasi saat scroll ke section
- **CounterAnimation**: Animasi angka pada statistik
- **TypingEffect**: Efek mengetik pada hero section
- **Back to Top**: Tombol untuk kembali ke atas

## Instalasi Step-by-Step

### Windows

1. Download dan install Node.js dari https://nodejs.org/
2. Buka Command Prompt atau PowerShell
3. Navigate ke folder project:
   ```
   cd path\to\personal-website
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Jalankan development server:
   ```
   npm start
   ```

### macOS / Linux

1. Install Node.js:
   - macOS: `brew install node`
   - Linux: `sudo apt install nodejs npm`
2. Buka Terminal
3. Navigate ke folder project:
   ```
   cd path/to/personal-website
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Jalankan development server:
   ```
   npm start
   ```

## Kustomisasi Website

### Mengubah Informasi Pribadi

1. Buka `src/index.html`
2. Cari dan ganti:
   - `Raden Arum Setia Priadi` dengan nama Anda
   - `raden.arum@example.com` dengan email Anda
   - `/raden-arum-setia-priadi` dengan username LinkedIn Anda
   - `/radenarumsp` dengan username GitHub Anda

### Mengubah Warna Theme

1. Buka `src/css/style.css`
2. Edit bagian `:root`:
   ```css
   :root {
       --primary-color: #2563eb;     /* Warna utama */
       --secondary-color: #1e40af;   /* Warna sekunder */
       --accent-color: #3b82f6;      /* Warna aksen */
   }
   ```
3. Ganti dengan kode warna pilihan Anda

### Menambah Materi Kuliah

1. Buka `src/index.html`
2. Cari section dengan id `materials`
3. Copy-paste template card berikut:
   ```html
   <div class="material-card">
       <div class="material-icon">🎯</div>
       <h3>Judul Materi</h3>
       <p>Deskripsi materi.</p>
   </div>
   ```
4. Ganti emoji, judul, dan deskripsi sesuai kebutuhan

### Menambah Timeline Seminar

1. Buka `src/index.html`
2. Cari section dengan id `seminar`
3. Copy-paste template timeline berikut:
   ```html
   <div class="timeline-item">
       <div class="timeline-marker"></div>
       <div class="timeline-content">
           <h3>Judul Seminar</h3>
           <p class="timeline-date">Tanggal</p>
           <p>Deskripsi seminar.</p>
       </div>
   </div>
   ```

### Mengubah Font

1. Buka `src/css/style.css`
2. Edit bagian `body`:
   ```css
   body {
       font-family: 'Nama Font', sans-serif;
   }
   ```
3. Jika menggunakan Google Fonts, tambahkan di `src/index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Nama+Font&display=swap" rel="stylesheet">
   ```

## Build untuk Production

### Langkah Build

1. Jalankan command:
   ```
   npm run build
   ```
2. File hasil build akan ada di folder `dist/`
3. Upload semua file di folder `dist/` ke hosting Anda

### Optimasi Build

File hasil build sudah dioptimasi otomatis:
- CSS dan JavaScript diminify
- Nama file menggunakan content hash untuk caching
- HTML sudah dikompresi

## Upload ke Hosting

### Upload Manual

1. Build website: `npm run build`
2. Login ke cPanel/hosting panel Anda
3. Buka File Manager
4. Upload semua file dari folder `dist/` ke `public_html/`

### Upload via FTP

1. Build website: `npm run build`
2. Buka FileZilla atau FTP client lainnya
3. Connect ke server Anda
4. Upload folder `dist/` ke root directory website

### Deploy ke GitHub Pages

1. Install gh-pages:
   ```
   npm install --save-dev gh-pages
   ```
2. Tambahkan script di `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Jalankan:
   ```
   npm run deploy
   ```

### Deploy ke Netlify

1. Daftar di https://netlify.com
2. Drag & drop folder `dist/` ke Netlify
3. Atau connect repository GitHub Anda

## Troubleshooting

### Error: npm not found
- Install Node.js terlebih dahulu
- Restart terminal/command prompt

### Error: Module not found
- Hapus folder `node_modules`
- Jalankan `npm install` lagi

### Website tidak muncul saat npm start
- Check apakah port 8080 sudah digunakan aplikasi lain
- Buka manual: http://localhost:8080

### CSS/JS tidak berubah setelah edit
- Refresh browser dengan Ctrl+F5 (Windows) atau Cmd+Shift+R (Mac)
- Clear browser cache

### Build error
- Pastikan semua file berada di lokasi yang benar
- Check syntax error di console

## Tips & Trik

1. **Development**: Gunakan `npm start` untuk auto-reload saat coding
2. **Performance**: Optimasi gambar sebelum diupload
3. **SEO**: Edit meta tags di `src/index.html` untuk SEO lebih baik
4. **Responsive**: Test di berbagai ukuran layar saat development
5. **Browser Compatibility**: Test di Chrome, Firefox, dan Safari

## Fitur Tambahan yang Bisa Ditambahkan

1. **Dark Mode**: Toggle untuk mode gelap
2. **Multi-language**: Support bahasa Indonesia dan Inggris
3. **Blog Section**: Tambah section untuk artikel/blog
4. **Contact Form**: Form kontak yang berfungsi
5. **Analytics**: Integrasi Google Analytics
6. **Loading Animation**: Animasi loading saat website dimuat
7. **Lazy Loading**: Lazy load untuk gambar
8. **PWA**: Progressive Web App support

## Resources

- [Webpack Documentation](https://webpack.js.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## Kontak Support

Jika ada pertanyaan atau butuh bantuan:
- Email: raden.arum@example.com
- Buat issue di GitHub repository

---

Selamat menggunakan dan semoga sukses dengan website Anda! 🚀
