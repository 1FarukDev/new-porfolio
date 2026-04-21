'use client'

import { generatePersonSchema, generateWebsiteSchema } from '@/lib/schema'

export default function SchemaComponent() {
  const personSchema = generatePersonSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
