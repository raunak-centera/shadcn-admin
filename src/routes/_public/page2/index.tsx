import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/page2/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/page2/"!</div>
}
