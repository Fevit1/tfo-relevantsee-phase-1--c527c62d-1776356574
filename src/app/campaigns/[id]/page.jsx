import { Suspense } from 'react'
import { CampaignDetailPage } from '@/components/campaigns/CampaignDetailPage'

export const metadata = {
  title: 'Campaign Detail — RelevantSee',
}

export default function CampaignDetail({ params }) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <CampaignDetailPage id={params.id} />
    </Suspense>
  )
}