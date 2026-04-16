import { Suspense } from 'react'
import { ApprovalQueuePage } from '@/components/approvals/ApprovalQueuePage'

export const metadata = {
  title: 'Approval Queue — RelevantSee',
  description: 'Review pending campaigns',
}

export default function Approvals() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <ApprovalQueuePage />
    </Suspense>
  )
}