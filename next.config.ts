/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  // CSS ve JS preload optimizasyonu
  experimental: {
    optimizeCss: true,        // CSS dosyalarını daha verimli işler
    optimizePackageImports: ['react', 'next/font'], // gereksiz preload azaltır
  },

  // Görsel optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['deinedomain.de'], // harici görsel kullanıyorsan buraya ekle
  },

  // Prefetch davranışını kontrol et
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // prod'da console.log temizler
  },
};

module.exports = nextConfig;
