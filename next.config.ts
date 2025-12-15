/** @type {import('next').NextConfig} */
const nextConfig = {
  // Source map uyarılarını kapatır (dev ortamında konsol temiz kalır)
  productionBrowserSourceMaps: false,

  // React Strict Mode: geliştirme sırasında hataları daha erken yakalar
  reactStrictMode: true,

  // Opsiyonel: Turbopack yerine Webpack kullanmak istersen
  // experimental: { turbo: false },

  // SEO ve performans için faydalı olabilir
  trailingSlash: false, // URL'lerde gereksiz slash eklenmez
  poweredByHeader: false, // X-Powered-By header'ını kapatır (güvenlik için)

  // Image optimizasyonu (Next.js Image bileşeni kullanıyorsan)
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // dış kaynaklardan görsel yükleyeceksen buraya domain ekle
  },
};

module.exports = nextConfig;
