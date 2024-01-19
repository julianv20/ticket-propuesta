import { useState } from 'react'
import { type Tickets as TicketsInteface } from '../interfaces/tickets.js'
import { data } from '../data/index.js'

interface TicketsHook {
  tickets: TicketsInteface[]
  setTickets: React.Dispatch<React.SetStateAction<TicketsInteface[]>>
}

const useTickets = (): TicketsHook => {
  const [tickets, setTickets] = useState<TicketsInteface[]>(data)

  return {
    tickets,
    setTickets
  }
}

export default useTickets
