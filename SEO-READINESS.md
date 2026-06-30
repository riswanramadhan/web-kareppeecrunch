# Laporan SEO Readiness Kareppe Crunch

Tanggal audit dan implementasi: 30 Juni 2026  
URL production: https://kareppecrunch.dekatlokal.com/

## Ringkasan Implementasi

- Branding website diperbarui ke Kareppe Crunch pada copy, metadata, manifest, schema, alt text, dan dokumen.
- Canonical, Open Graph URL, schema URL, robots, dan sitemap memakai domain production baru `https://kareppecrunch.dekatlokal.com/`.
- Subdomain/host lama diarahkan ke domain baru melalui redirect permanen.
- Hero memakai gambar WebP berbeda untuk mobile dan desktop/tablet agar perangkat mobile tidak perlu mengambil asset desktop.
- Katalog memakai tujuh varian baru beserta harga yang tampil di kartu produk.
- Kalimat dan tautan katalog eksternal lama sudah dihapus.
- Logo navbar/footer memakai turunan logo baru tanpa background; favicon dan icon PWA dibuat ulang dari logo baru.

## SEO Dan Schema

- Title: `Kareppe Crunch | Kerupuk Singkong Khas Makassar dari Gowa`.
- Meta description menonjolkan kerupuk singkong khas Makassar dari Gowa, tekstur renyah ringan, higienitas, dan petani lokal Sulawesi Selatan.
- Open Graph dan Twitter Card memakai `/og-image.webp` berukuran 1200x630.
- JSON-LD memakai satu `@graph`: Organization, LocalBusiness, WebSite, WebPage, ImageObject, BreadcrumbList, ItemList, tujuh Product, dua OfferCatalog, dan FAQPage.
- Product schema memasukkan harga varian, currency `IDR`, availability `InStock`, dan seller Kareppe Crunch karena harga kini tampil di UI.
- LocalBusiness schema memuat alamat `Perumahan Fakultas Teknik Unhas Gowa, Blok H59`, jam buka Senin-Minggu 08:00-22:00, koordinat Google Maps, `hasMap`, price range, dan founding date Juni 2025.
- FAQ visual dan FAQ schema memakai satu sumber data sehingga pertanyaan dan jawaban tetap identik.
- Social/marketplace link memakai Instagram `@kareppecrunch`, TikTok `@kareppecrunch`, Facebook page yang sudah ada, Shopee `kareppecrunch`, fallback pencarian Tokopedia, TikTok Shop via profil TikTok, dan Localoka yang sudah ada.

## Asset Aktif

- Hero: `public/images/hero-desktop-tablet.webp`, `public/images/hero-mobile.webp`.
- Produk: tujuh file `public/images/varian/*.webp`.
- Logo: `public/images/logo-kareppe-transparent.webp`.
- Social preview: `public/og-image.webp`.
- Partner logo aktif: `public/images/dekat-lokal.webp`, `public/images/rumah-bumn.webp`, `public/images/bank-bri.webp`.
- Favicon/icon: `app/favicon.ico`, `public/favicon*.png`, `public/icon-*.png`, `public/apple-touch-icon.png`.
- File sumber JPG/PNG baru tetap disimpan sebagai arsip asset; logo, hero, dan OG lama yang membawa branding lama sudah tidak dipakai.

## Hasil Verifikasi Lokal

- `npm run lint`: lulus.
- `npm run build`: lulus.
- Server production lokal: homepage, `robots.txt`, `sitemap.xml`, manifest, OG image WebP, hero WebP, dan logo WebP merespons HTTP 200.
- HTML homepage tidak memuat brand lama atau tautan katalog eksternal lama.
- JSON-LD berhasil diparse: tujuh Product, seluruh Product memiliki harga `IDR`, LocalBusiness memiliki alamat, jam operasional 08:00-22:00, koordinat Google Maps, `hasMap`, dan canonical domain baru.
- Pencarian repo hanya menemukan host lama pada aturan redirect legacy yang disengaja.

## Checklist Google Search Console Setelah Deploy

1. Deploy branch ini ke production dan pastikan deployment terhubung ke `kareppecrunch.dekatlokal.com`.
2. Buka homepage, `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/favicon-48x48.png`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/site.webmanifest`, dan `/og-image.webp`; semua harus HTTP 200.
3. View source homepage dan verifikasi title, description, canonical, robots, Open Graph, Twitter Card, favicon links, serta JSON-LD.
4. Verifikasi Domain Property `dekatlokal.com` melalui DNS agar seluruh subdomain tercakup. URL-prefix `https://kareppecrunch.dekatlokal.com/` dapat ditambahkan sebagai property operasional tambahan.
5. Submit `https://kareppecrunch.dekatlokal.com/sitemap.xml` pada menu Sitemaps.
6. Inspect homepage, jalankan Live Test, lalu Request Indexing jika hasil live valid.
7. Bandingkan User-declared canonical dengan Google-selected canonical setelah crawl tersedia.
8. Uji homepage di Rich Results Test dan Schema Markup Validator; pantau Page Indexing, Enhancements, Product snippets, Merchant listings, Experience, dan Performance.
9. Pantau favicon dan image indexing setelah recrawl. Favicon sudah eligible, tetapi kemunculannya tetap ditentukan Google.
10. Setelah data terkumpul, evaluasi query, impressions, CTR, average position, search appearance, dan halaman/image indexing setiap bulan.

## Risiko Dan Pekerjaan Manual

- Perubahan kode belum berlaku di production sampai deployment selesai.
- Product snippets dan merchant listings tidak dijamin muncul karena Google tetap menentukan eligibility dari crawl, trust signal, dan kelengkapan data merchant.
- Ganti fallback pencarian Tokopedia dengan URL Official Store final setelah tersedia.
- Tambahkan URL LinkedIn resmi ke website/schema jika halaman LinkedIn Kareppe Crunch sudah tersedia.
- Konfirmasi token verifikasi Search Console masih milik property aktif.
- Tambahkan link website subdomain ke Google Business Profile dan samakan nama, alamat, serta nomor telepon dengan website.
- Tambahkan backlink dari direktori Teman Lokal di domain utama dengan anchor: `Kareppe Crunch - Kerupuk Singkong Khas Makassar dari Gowa`.
