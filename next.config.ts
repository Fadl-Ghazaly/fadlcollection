import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Mengaktifkan ekspor statis (folder out)
  images: {
    unoptimized: true, // Diperlukan karena Next Image Optimization butuh server Node.js
  },
};

export default nextConfig;