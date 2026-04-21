import Blogs from '@/screens/blog/blog'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Faruk Ajibade',
  description: 'Explore my blog posts about software engineering, AI, web development, and tech insights.',
}

function page() {
  return (
    <Blogs />
  )
}

export default page