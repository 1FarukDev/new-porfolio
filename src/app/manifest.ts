import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Faruk Ajibade | Software & AI Engineer',
    short_name: 'Faruk Ajibade',
    description: 'Software Engineer and AI Engineer specializing in building scalable web and mobile applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
