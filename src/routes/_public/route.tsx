import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to='/' className='[&.active]:font-bold [&.active]:underline'>
        Home
      </Link>{' '}
      <Link to='/page2' className='[&.active]:font-bold [&.active]:underline'>
        Page2
      </Link>{' '}
      <Link to='/admin' className='[&.active]:font-bold [&.active]:underline'>
        Admin
      </Link>
      <Outlet />
    </div>
  )
}
