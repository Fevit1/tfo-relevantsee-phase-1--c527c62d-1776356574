import { Suspense } from 'react'
import { InviteAcceptPage } from '@/components/invite/InviteAcceptPage'

export const metadata = {
  title: 'Accept Invitation — RelevantSee',
}

export default function InvitePage({ params }) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <InviteAcceptPage token={params.token} />
    </Suspense>
  )
}