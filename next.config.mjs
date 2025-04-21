/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← esta línea es la clave para generar archivos estáticos
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // necesario para export estático si usas <Image>
  },
}

export default nextConfig
