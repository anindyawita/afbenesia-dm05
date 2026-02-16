# Deployment Guide - Vercel

## 🚀 Cara Deploy ke Vercel (Step by Step)

### Option 1: Deploy via Vercel Dashboard (Paling Mudah)

1. **Push project ke GitHub**

   ```bash
   cd c:\semuacodingan\afbenesia-dm05
   git init
   git add .
   git commit -m "Initial commit: Kelas Kilat DM-05"

   # Buat repository di GitHub dulu, lalu:
   git remote add origin https://github.com/yourusername/afbenesia-dm05.git
   git branch -M main
   git push -u origin main
   ```

2. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub account

3. **Import Project**
   - Click tombol **"Add New..."** → **"Project"**
   - Pilih repository `afbenesia-dm05`
   - Click **"Import"**

4. **Configure Project**
   - Vercel akan auto-detect settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - **JANGAN UBAH APA-APA**, langsung click **"Deploy"**

5. **Tunggu Deploy Selesai** (1-2 menit)
   - Vercel akan build project
   - Setelah selesai, kamu dapat link production: `https://afbenesia-dm05.vercel.app`

6. **Update README.md dengan Link**
   - Copy link Vercel
   - Update bagian "Demo Live" di README.md
   - Push lagi ke GitHub

### Option 2: Deploy via Vercel CLI (Advanced)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   cd c:\semuacodingan\afbenesia-dm05
   vercel
   ```

4. **Follow prompts**:
   - Set up and deploy: Yes
   - Which scope: Personal Account
   - Link to existing project: No
   - Project name: afbenesia-dm05
   - Directory: ./
   - Override settings: No

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## ✅ Checklist Sebelum Deploy

- [ ] Project berjalan dengan baik di local (`npm run dev`)
- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada error di console browser
- [ ] Sudah test login (username: admin, password: afbenesia2025)
- [ ] Sudah test semua fitur (filter, search, export CSV)
- [ ] README.md sudah lengkap

## 🔧 Troubleshooting

### Error: Build Failed

**Solusi**:

```bash
# Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: 404 Not Found di Vercel

**Solusi**: Tambahkan file `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Error: Environment Variables

Vercel tidak perlu environment variables untuk project ini karena menggunakan localStorage.

## 📋 Custom Domain (Optional)

Jika ingin custom domain:

1. Go to Project Settings → Domains
2. Add custom domain
3. Update DNS records di registrar domain
4. Tunggu propagation (5-10 menit)

## 🎯 Tips untuk Reviewer

1. **Buat README.md yang jelas** ✅ (Sudah ada)
2. **Include Live Demo link** (Update setelah deploy)
3. **Screenshot** (Optional, bisa tambahkan di README)
4. **Credentials** sudah tertulis jelas di README

## 📝 Template Pengumpulan

Ketika mengirim ke recruiter:

```
Subject: Submission - Seleksi Web Developer - [Nama Anda]

Hai Tim Afbenesia,

Berikut submission saya untuk seleksi Web Developer:

🔗 Live Demo: https://afbenesia-dm05.vercel.app
📁 GitHub: https://github.com/yourusername/afbenesia-dm05

Login Credentials:
Username: admin
Password: afbenesia2025

Teknologi:
- React 18 + TypeScript
- Vite
- React Router
- CSS3

Fitur:
✅ Landing page responsive
✅ Login system + protected routes
✅ Dashboard dengan tabel peserta
✅ Filter, Search, Sort
✅ Export CSV
✅ Auto-generated ID (AFB-DM05-XXX)
✅ Highlight belum bayar
✅ Statistics dashboard

Terima kasih atas kesempatannya!

Best regards,
[Nama Anda]
```

---

**Good luck dengan seleksinya! 🚀**
