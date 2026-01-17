# Website Pribadi - RASP MK Kapita Selekta

Website resmi pribadi yang dibuat sebagai tugas akhir dari RASP di MK Kapita Selekta. Website ini mencakup dokumentasi materi kuliah, urutan seminar, dan filosofi open-source.

## 🚀 Fitur

- **Responsive Design**: Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Modern UI/UX**: Desain yang clean dan profesional
- **Smooth Animations**: Animasi halus untuk pengalaman pengguna yang lebih baik
- **Webpack Build System**: Sistem build modern untuk optimasi performa
- **Modular JavaScript**: Kode JavaScript yang terorganisir dengan baik
- **SEO Friendly**: Struktur HTML yang baik untuk SEO

## 📋 Struktur Project

```
personal-website/
├── src/
│   ├── index.html          # File HTML utama
│   ├── css/
│   │   └── style.css       # File CSS untuk styling
│   └── js/
│       └── index.js        # File JavaScript untuk interaktivitas
├── dist/                   # Folder hasil build (auto-generated)
├── webpack.config.js       # Konfigurasi Webpack
├── package.json           # Dependencies dan scripts
├── .gitignore            # File yang diabaikan Git
└── README.md             # Dokumentasi project
```

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3**: Styling dan animasi
- **JavaScript (ES6+)**: Interaktivitas dan fungsionalitas
- **Webpack 5**: Module bundler dan build tool
- **CSS Loader & Style Loader**: Untuk memproses CSS

## 📦 Instalasi

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (v14 atau lebih baru)
- npm (biasanya sudah include dengan Node.js)

### Langkah Instalasi

1. Clone atau download repository ini
```bash
cd personal-website
```

2. Install dependencies
```bash
npm install
```

## 🎯 Cara Menggunakan

### Development Mode

Untuk menjalankan development server dengan hot reload:

```bash
npm start
```

Website akan terbuka otomatis di browser pada `http://localhost:8080`

### Build untuk Production

Untuk membuild website untuk production:

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`

### Development dengan Watch Mode

Untuk development dengan auto-rebuild saat ada perubahan:

```bash
npm run dev
```

## 📱 Sections Website

1. **Beranda (Hero)**: Pengenalan dan overview website
2. **Tentang**: Informasi tentang pemilik website dan statistik
3. **Materi Kuliah**: Daftar materi yang telah dipelajari di MK Kapita Selekta
4. **Seminar**: Timeline urutan seminar yang telah diikuti
5. **Open Source Philosophy**: Penjelasan lengkap tentang filosofi open-source
6. **Kontak**: Informasi kontak untuk komunikasi lebih lanjut

## 🎨 Customization

### Mengubah Warna

Edit variabel CSS di `src/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... */
}
```

### Mengubah Konten

Edit file `src/index.html` untuk mengubah konten website sesuai kebutuhan Anda.

### Menambah Fitur JavaScript

Tambahkan module baru di `src/js/index.js` atau buat file JavaScript terpisah dan import ke `index.js`.

## 🌐 Deployment

### Deploy ke GitHub Pages

1. Build project:
```bash
npm run build
```

2. Push folder `dist/` ke branch `gh-pages` atau sesuai konfigurasi GitHub Pages Anda

### Deploy ke Netlify/Vercel

1. Connect repository Anda ke Netlify atau Vercel
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy Manual

Upload semua file di folder `dist/` ke hosting web Anda.

## 📝 Lisensi

Website ini dibuat untuk keperluan akademik - Tugas RASP MK Kapita Selekta.

## 👤 Author

**Raden Arum Setia Priadi**
- Email: raden.arum@example.com
- LinkedIn: /raden-arum-setia-priadi
- GitHub: /radenarumsp

## 🙏 Acknowledgments

- Terima kasih kepada dosen dan asisten MK Kapita Selekta
- Inspirasi desain dari berbagai website portfolio modern
- Komunitas open-source untuk tools dan resources yang digunakan

## 📞 Support

Jika ada pertanyaan atau masalah, silakan hubungi melalui email atau buat issue di repository ini.

---

**Built with ❤️ using HTML, CSS, JavaScript, and Webpack**

© 2025 Raden Arum Setia Priadi. All rights reserved.
