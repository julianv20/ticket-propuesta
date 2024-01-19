import { createBrowserRouter } from 'react-router-dom'
import { EditTicketPage, TicketsPage } from '../pages'
import Layout from '../layout/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TicketsPage />
      },
      {
        path: '/edit/:id',
        element: <EditTicketPage />
      }
    ]
  }
])
