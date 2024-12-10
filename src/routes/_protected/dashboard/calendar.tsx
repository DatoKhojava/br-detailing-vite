import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/dashboard/calendar"!</div>
}
