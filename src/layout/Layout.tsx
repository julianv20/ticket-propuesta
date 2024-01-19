import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
  return (
    <section>
      <nav></nav>
      <main className="container mx-auto mt-10 p-5 lg:p-0">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
