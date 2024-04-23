/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn4.iconfinder.com'],
    },
    webpack: (config, { isServer }) => {
    // Add a rule to handle GLSL files using raw-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
