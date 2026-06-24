# Laporan SEO Readiness Kareppee Crunch

Tanggal audit dan implementasi: 24 Juni 2026  
URL production: https://kareppeecrunch.dekatlokal.com/

## Ringkasan kondisi awal

- Homepage production, `robots.txt`, `sitemap.xml`, dan `favicon.ico` sudah merespons HTTP 200.
- Canonical dan domain production sudah tersedia, tetapi metadata sosial memakai gambar portrait dengan deklarasi dimensi 1200×630 yang tidak sesuai ukuran file sebenarnya.
- Favicon lama berukuran 654 KB dan belum memiliki keluarga ikon 48/96/144/180/192/512 yang konsisten.
- Product schema memuat status stok dan rating yang tidak cukup aman untuk diverifikasi.
- FAQ schema tidak identik dengan lima FAQ yang tampil di halaman.
- Beberapa klaim visual terlalu absolut, termasuk “100% aman”, “100% legal”, “Verified Purchase”, dan “98% Repeat Order”.
- Enam gambar produk dan tiga logo mitra berukuran total sekitar 10,4 MB.
- URL toko Tokopedia lama merespons HTTP 410.

## Implementasi

- Title: `Kareppee Crunch | Kerupuk Singkong Premium Gowa Makassar`.
- Meta description: 149 karakter, natural, mencakup brand, produk, lokasi, dan proposisi nilai.
- Canonical, Open Graph URL, schema URL, sitemap, dan seluruh image URL schema menggunakan domain production.
- Robots meta mengizinkan `index, follow` dengan `max-image-preview: large` untuk Googlebot.
- Open Graph dan Twitter Card memakai `/og-image.jpg` berukuran tepat 1200×630.
- Hero tetap berupa `next/image`, memiliki alt deskriptif, diprioritaskan sebagai LCP, dan digunakan sebagai `primaryImageOfPage`.
- Favicon brand dibuat dalam format ICO multi-size dan PNG 48/96/144/180/192/512; manifest memakai ikon yang sama.
- JSON-LD disatukan dalam satu `@graph`: Organization, LocalBusiness, WebSite, WebPage, ImageObject, BreadcrumbList, ItemList, enam Product, dua OfferCatalog, dan FAQPage.
- Product schema hanya memakai data yang terlihat dan dapat diverifikasi. Harga serta availability varian tidak dimasukkan karena harga varian belum tampil di kartu produk.
- Harga Paket Reseller Ekonomi/Standar/Pro tetap dipakai pada OfferCatalog karena harga dan jumlah produk tampil di halaman.
- FAQ visual dan FAQ schema memakai satu sumber data sehingga pertanyaan dan jawaban selalu identik.
- Jawaban FAQ tersedia dalam HTML awal dan tetap dapat dibuka/tutup tanpa perubahan visual.
- Struktur heading diperbaiki secara semantik tanpa mengganti styling.
- Alt text, `sizes`, lazy loading gambar bawah fold, serta anchor produk diperkuat.
- Pesan WhatsApp umum, produk, dan reseller memakai format `wa.me`, nomor internasional, serta teks URL-encoded yang menyebut DekatLokal dan Kareppee Crunch.
- URL Tokopedia yang sudah 410 diganti dengan halaman pencarian Tokopedia sebagai fallback sampai URL Official Store baru tersedia.
- Klaim absolut yang tidak cukup dapat diverifikasi dinetralkan tanpa menambah atau menghapus section.
- Total aset berat yang dioptimalkan turun dari 11,02 MB menjadi 0,61 MB (pengurangan sekitar 94,5%).

## File yang diubah

- Metadata dan schema: `app/layout.tsx`, `app/data/site-content.js`.
- Crawling/indexing: `app/robots.ts`, `app/sitemap.ts`.
- Aksesibilitas, heading, CTA, FAQ, dan klaim: seluruh komponen terkait di `app/components/`.
- Favicon: `app/favicon.ico`, `public/favicon*.png`, `public/icon-*.png`, `public/apple-touch-icon.png`.
- Social preview: `public/og-image.jpg`.
- Manifest: `public/site.webmanifest` menggantikan `public/manifest.json`.
- Performa: enam gambar `public/images/varian/*.jpg` serta logo mitra DekatLokal, Rumah BUMN, dan BRI.

## Hasil verifikasi lokal production build

- `npm run lint`: lulus tanpa error; warning awal kemudian dibersihkan.
- `npx tsc --noEmit`: lulus.
- `npm run build`: lulus; homepage, robots, dan sitemap diprerender statis.
- Homepage build: HTTP 200, satu H1, robots `index, follow`, tanpa `noindex`, `localhost`, `127.0.0.1`, atau `vercel.app`.
- `robots.txt`, `sitemap.xml`, seluruh favicon, manifest, OG image, hero image, dan dokumen legalitas: HTTP 200 pada server production build lokal.
- JSON-LD berhasil diparse: 16 node graph, termasuk enam Product dan lima FAQ.

## Checklist Google Search Console setelah deploy

1. Deploy branch ini ke production dan pastikan deployment terhubung ke `kareppeecrunch.dekatlokal.com`.
2. Buka homepage, `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/favicon-48x48.png`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/site.webmanifest`, dan `/og-image.jpg`; semua harus HTTP 200.
3. View source homepage dan verifikasi title, description, canonical, robots, Open Graph, Twitter Card, favicon links, serta JSON-LD.
4. Verifikasi Domain Property `dekatlokal.com` melalui DNS agar seluruh subdomain tercakup. URL-prefix `https://kareppeecrunch.dekatlokal.com/` dapat ditambahkan sebagai property operasional tambahan.
5. Submit `https://kareppeecrunch.dekatlokal.com/sitemap.xml` pada menu Sitemaps.
6. Inspect homepage, jalankan Live Test, lalu Request Indexing jika hasil live valid.
7. Bandingkan User-declared canonical dengan Google-selected canonical setelah crawl tersedia.
8. Uji homepage di Rich Results Test dan Schema Markup Validator; pantau Page Indexing, Enhancements, Product snippets, Merchant listings, Experience, dan Performance.
9. Pantau favicon dan image indexing setelah recrawl. Favicon sudah eligible, tetapi kemunculannya tetap ditentukan Google.
10. Setelah data terkumpul, evaluasi query, impressions, CTR, average position, search appearance, dan halaman/image indexing setiap bulan.

## Risiko dan pekerjaan manual

- Perubahan kode belum berlaku di production sampai deployment Vercel selesai.
- Product snippets belum dijamin muncul. Harga varian tidak terlihat di UI, jadi Offer varian sengaja tidak dibuat. Untuk eligibility yang lebih kuat, tampilkan harga konsisten atau buat halaman produk khusus pada pekerjaan UI terpisah.
- Merchant listings penuh belum dipaksakan karena checkout berlangsung melalui WhatsApp/marketplace dan data stok/pengiriman/retur belum tersedia terstruktur.
- Ganti fallback pencarian Tokopedia dengan URL Official Store baru setelah tim memperoleh URL yang valid.
- Konfirmasi token verifikasi Search Console yang ada masih milik property aktif. Domain Property tetap memerlukan akses DNS DekatLokal.
- Tambahkan link website subdomain ke Google Business Profile dan samakan nama, alamat, serta nomor telepon dengan website.
- Tambahkan backlink dari direktori Teman Lokal di domain utama dengan anchor: `Kareppee Crunch - Kerupuk Singkong Premium Khas Gowa Makassar`.
- Google tidak menjamin thumbnail hero atau favicon tampil; implementasi ini membuat aset konsisten, crawlable, dan eligible untuk dipertimbangkan setelah recrawl.
