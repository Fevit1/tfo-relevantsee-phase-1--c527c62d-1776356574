import { Suspense } from 'react'
import { BrandSettingsPage } from '@/components/settings/BrandSettingsPage'

export const metadata = {
  title: 'Brand Settings — RelevantSee',
  description: 'Configure your brand model',
}

export default function Settings() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <BrandSettingsPage />
    </Suspense>
  )
}