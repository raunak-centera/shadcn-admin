import { createFileRoute } from '@tanstack/react-router'
import Tasks from '@/features/tasks'

export const Route = createFileRoute('/admin/tasks/')({
  component: Tasks,
})
