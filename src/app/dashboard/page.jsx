import { Suspense } from 'react'
import { DashboardPage } from '@/components/dashboard/DashboardPage'

export const metadata = {
  title: 'Dashboard — RelevantSee',
  description: 'Campaign dashboard',
}

export default function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardPage />
    </Suspense>
  )
}

function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <div className="w-64 bg-gray-900 border-r border-gray-800 animate-pulse" />
      <div className="flex-1 p-8 space-y-6">
        <div className="h-8 bg-gray-800 rounded w-48 animate-pulse" />
        <div className="grid grid-cols-3 gap-4">
          {[1,2,3].map(i => <div key={i} className="h-24 bg-gray-800 rounded-xl animate-pulse" />)}
        </div>
        <div className="h-96 bg-gray-800 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}