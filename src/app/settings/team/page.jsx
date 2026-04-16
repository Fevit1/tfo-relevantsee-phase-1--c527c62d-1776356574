import { Suspense } from 'react'
import { TeamManagementPage } from '@/components/settings/TeamManagementPage'

export const metadata = {
  title: 'Team Management — RelevantSee',
  description: 'Manage your team members and invitations',
}

export default function TeamSettings() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-indigo-500" /></div>}>
      <TeamManagementPage />
    </Suspense>
  )
}