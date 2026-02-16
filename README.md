# Kelas Kilat Digital Marketing - Batch 05

Website landing page dan dashboard admin untuk program **Kelas Kilat Digital Marketing Batch 05** yang diselenggarakan oleh **Afbenesia - PT Afbe Cahaya Kreatif**.

## 🚀 Demo Live

- **Live Demo**: [afbenesia-dm05.vercel.app](https://afbenesia-dm05.vercel.app) _(Deploy setelah selesai)_
- **GitHub Repository**: [github.com/yourusername/afbenesia-dm05](https://github.com/yourusername/afbenesia-dm05)

## 📋 Fitur

### Landing Page (Public)

- ✅ Hero section dengan informasi program
- ✅ Deskripsi lengkap pelatihan
- ✅ Materi yang akan dipelajari
- ✅ Informasi pendaftaran lengkap
- ✅ Responsive design untuk semua device
- ✅ Modern UI/UX dengan animasi smooth

### Dashboard Admin (Protected)

- ✅ Login system dengan autentikasi
- ✅ Tabel data peserta lengkap
- ✅ Auto-generated ID Peserta (Format: AFB-DM05-XXX)
- ✅ Filter status pembayaran (Lunas/Belum Bayar)
- ✅ Search peserta (nama, instansi, ID)
- ✅ Sort by nama/instansi/status
- ✅ Highlight otomatis untuk "Belum Bayar"
- ✅ Statistics dashboard (total, lunas, belum bayar, tingkat pembayaran)
- ✅ Export data ke CSV
- ✅ Session persistent (tetap login setelah refresh)
- ✅ Protected routes (hanya admin yang bisa akses)

## 🛠️ Teknologi

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **React Router v6** - Routing & Navigation
- **CSS3** - Styling dengan Flexbox & Grid
- **LocalStorage** - Session Management

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

## 🚀 Cara Menjalankan Project

### Prerequisites

- Node.js (v18 atau lebih baru)
- npm atau yarn

### Installation

1. **Clone repository**

```bash
git clone https://github.com/yourusername/afbenesia-dm05.git
cd afbenesia-dm05
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Buka browser**

```
http://localhost:5173
```

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Preview build production

```bash
npm run preview
```

## 🔐 Demo Credentials

Untuk mengakses dashboard admin:

- **Username**: `admin`
- **Password**: `afbenesia2025`

## 📊 Data Peserta

Project ini menggunakan **15 data dummy peserta** dengan informasi:

- ID Peserta (Auto-generated: AFB-DM05-001, AFB-DM05-002, dst.)
- Nama Peserta
- Instansi/Kategori
- Status Pembayaran (Lunas/Belum Bayar)

## 🎨 Fitur UI/UX

- Modern gradient design
- Smooth animations & transitions
- Responsive layout (Mobile, Tablet, Desktop)
- Hover effects
- Floating cards animation
- Professional color scheme
- Clean typography

## 📝 Informasi Program

- **Nama Program**: Kelas Kilat Digital Marketing
- **Batch**: DM-05
- **Tanggal**: 18 Oktober 2025
- **Penyelenggara**: Afbenesia - PT Afbe Cahaya Kreatif

## 🚀 Deploy ke Vercel

1. **Push ke GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy dengan Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Import repository GitHub
   - Vercel akan auto-detect Vite project
   - Click "Deploy"
   - Selesai! 🎉

**Build Settings (Auto-detected)**:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3"
}
```

## 👨‍💻 Developer

**Nama**: [Nama Anda]  
**Email**: [email@example.com]  
**GitHub**: [github.com/yourusername]

## 📄 License

Free to use for selection purpose.

## 🙏 Acknowledgments

- PT Afbe Cahaya Kreatif untuk kesempatan seleksi
- React Team untuk amazing library
- Vite Team untuk blazing fast build tool

---

**© 2025 Afbenesia - PT Afbe Cahaya Kreatif**

Dibuat dengan ❤️ untuk seleksi Web Developer
