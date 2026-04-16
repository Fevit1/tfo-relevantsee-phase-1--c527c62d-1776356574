import { Suspense } from 'react'
import { CampaignBuilderPage } from '@/components/campaigns/CampaignBuilderPage'

export const metadata = {
  title: 'New Campaign — RelevantSee',
  description: 'Create a new AI-powered marketing campaign',
}

export default function NewCampaign() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <CampaignBuilderPage />
    </Suspense>
  )
}