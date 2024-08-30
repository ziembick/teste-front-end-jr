/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['app.econverse.com.br'],
    },
    async rewrites() {
      return [
        {
          source: '/api/produtos',
          destination: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
        },
      ];
    },
  };
  
  export default nextConfig;
  