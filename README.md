# 🚀 Kelas Kilat Digital Marketing - Batch 05

Landing page dan sistem dashboard untuk program pelatihan Digital Marketing yang diselenggarakan oleh **AFBENESIA**. Website ini menampilkan informasi lengkap tentang program, mentor, timeline, dan testimoni peserta dengan desain modern dan animasi interaktif.

## 🚀 Demo Live

- **GitHub Repository**: [github.com/anindyawita/afbenesia-dm05](https://github.com/anindyawita/afbenesia-dm05)

## ✨ Fitur Utama

### Landing Page (Public)

- ✅ **Hero Section** dengan full-screen responsive layout
- ✅ **Gooey Button Animation** dengan spring easing effect
- ✅ **Orbit Animations** dengan icons (trending & currency)
- ✅ **Scroll Spy Navigation** - Auto-highlight menu sesuai section
- ✅ **Mobile Drawer Navigation** dengan hamburger menu
- ✅ **Stats Counter** dengan animasi counting up
- ✅ **Mentor Cards** dengan hover effects & gradient borders
- ✅ **Zigzag Timeline** dengan responsive layout
- ✅ **Auto-scrolling Testimonials** carousel (right to left)
- ✅ **Smooth Scroll** ke setiap section dengan scroll padding
- ✅ **Fully Responsive** - Desktop, Tablet, Mobile optimized

### Dashboard Admin (Protected)

- ✅ **Email-based Authentication** dengan password toggle
- ✅ **Glassmorphic Login Form** dengan back button
- ✅ **Tabel Data Peserta** dengan scroll horizontal
- ✅ **Auto-generated ID** (Format: AFB-DM05-XXX)
- ✅ **Filter Status Pembayaran** (Semua/Lunas/Belum Lunas)
- ✅ **Highlight Unpaid Rows** dengan background kuning
- ✅ **Export to CSV** dengan alert validasi
- ✅ **Statistics Dashboard** (total, lunas, belum bayar, %)
- ✅ **Protected Routes** dengan AuthContext
- ✅ **Session Persistent** menggunakan localStorage

## 🛠️ Tech Stack

- **React 19.2** - UI Library dengan hooks
- **TypeScript** - Type-safe development
- **Vite (Rolldown)** - Ultra-fast build tool & dev server
- **React Router DOM 7** - Client-side routing & navigation
- **Iconify React** - 200,000+ icons ready to use
- **CSS3 Advanced**:
  - CSS `@property` untuk custom animasi properties
  - SVG Filters untuk gooey/blob effects
  - Flexbox & Grid layouts
  - CSS Variables untuk theming
  - Keyframe animations
  - Media queries untuk responsiveness

## 📁 Struktur Project

```
afbenesia-dm05/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── ProtectedRoute.tsx
│   ├── context/         # React Context
│   │   └── AuthContext.tsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.tsx
│   │   ├── LandingPage.css
│   │   ├── LoginPage.tsx
│   │   ├── LoginPage.css
│   │   ├── Dashboard.tsx
│   │   └── Dashboard.css
│   ├── App.tsx          # Main App component
│   ├── App.css          # Global styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Base CSS
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## � Prerequisites

Pastikan sudah terinstall:
- **Node.js** (v16 atau lebih tinggi)
- **npm** atau **yarn**

## 🚀 Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/anindyawita/afbenesia-dm05.git
cd afbenesia-dm05
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### 4. Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`

### 5. Preview Production Build

```bash
npm run preview
```

## 🔐 Login Credentials

Untuk mengakses dashboard admin:
- **Email:** `admin@afbenesia.com`
- **Password:** `afbenesia2025`

## 📊 Data Peserta

Project ini menggunakan **15 data dummy peserta** dengan informasi:
- ID Peserta (Auto-generated: AFB-DM05-001 s/d AFB-DM05-015)
- Nama Peserta
- Instansi/Kategori
- Status Pembayaran (Lunas/Belum Bayar)

## 🎨 Fitur UI/UX

### Animasi & Effects
- **Gooey Button** dengan CSS `@property` dan spring easing
- **Orbit Circles** yang rotate dengan icons
- **Fade In Up** untuk text animations
- **Counter Animation** untuk statistics
- **Hover Effects** pada cards dengan transform & shadow
- **Smooth Transitions** di semua interaksi
- **Drawer Slide-in** animation dari kanan

### Responsive Design
- **Desktop (>968px)**: Full layout dengan navbar centered
- **Tablet (640-968px)**: Adjusted spacing & font sizes
- **Mobile (<640px)**: Drawer navigation, stacked layout, optimized images
- **Small Mobile (<480px)**: Extra compact design

### Color Palette
- **Primary Blue**: #0284c7, #0ea5e9, #0369a1
- **Yellow/Gold**: #fbbf24, #f59e0b
- **Accent Orange**: #e44002
- **Success Green**: #3ecd5e
- **Background**: Gradients & rgba overlays

### Typography
- **Poppins**: Primary UI font (400, 500, 600, 700)
- **Lato**: Body text
- **Montserrat**: Headers alternatif
- **Open Sans**: Supporting text

## 📝 Informasi Program

- **Nama Program**: Kelas Kilat Digital Marketing
- **Batch**: DM-05
- **Tanggal**: 18 Oktober 2025
- **Penyelenggara**: Afbenesia - PT Afbe Cahaya Kreatif

## 🎯 Scripts Available

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint untuk check code quality
```

## 🌐 Deployment

Project ini dapat di-deploy ke berbagai platform:

### Deploy ke Vercel (Recommended)

1. **Push ke GitHub** (sudah selesai)

2. **Connect to Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Import repository dari GitHub
   - Vercel akan auto-detect Vite project
   - Click "Deploy"

**Build Settings (Auto-detected)**:
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

### Platform Lain
- **Netlify**: Drag & drop folder `dist` atau connect GitHub
- **GitHub Pages**: Gunakan `gh-pages` package
- **Railway**: Auto-deploy dari GitHub
- **Cloudflare Pages**: Connect repository

## 📦 Dependencies

```json
{
  "dependencies": {
    "@iconify/react": "^6.0.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "typescript": "~5.9.3",
    "vite": "npm:rolldown-vite@7.2.5",
    "eslint": "^9.39.1"
  }
}
```

## 👨‍💻 Developer

**AFBENESIA** - PT Afbe Cahaya Kreatif
- Program: Kelas Kilat Digital Marketing Batch 05
- GitHub: [github.com/anindyawita](https://github.com/anindyawita)

## 📝 Informasi Program

- **Nama Program**: Kelas Kilat Digital Marketing
- **Batch**: DM-05
- **Penyelenggara**: AFBENESIA - PT Afbe Cahaya Kreatif

## 🚀 Features Roadmap

- [x] Landing page dengan animasi modern
- [x] Mobile responsive dengan drawer navigation
- [x] Scroll spy untuk navigation
- [x] Authentication system
- [x] Dashboard dengan filter & export
- [ ] Email notification system
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📄 License

© 2025 Kelas Kilat Digital Marketing - AFBENESIA. All rights reserved.

## 🙏 Acknowledgments

- React Team untuk amazing library
- Vite/Rolldown Team untuk blazing fast build tool
- Iconify untuk comprehensive icon library

---

**Dibuat dengan ❤️ untuk Kelas Kilat Digital Marketing Batch 05**
