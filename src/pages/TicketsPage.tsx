import DescriptionTicket from '../components/DescriptionTicket'
import EndDateTicket from '../components/EndDateTicket'
import FunctionalitiesTicket from '../components/FunctionalitiesTicket'
import Observations from '../components/Observations'
import StartDateTicket from '../components/StartDateTicket'
import TicketCard from '../components/TicketCard'
import TitleTicket from '../components/TitleTicket'
import User from '../components/User'
import useTickets from '../hooks/useTickets'

const TicketsPage = (): JSX.Element => {
  const { tickets } = useTickets()

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.Id}
          state={ticket.Estado}
          enabled={ticket.Habilitado}
        >
          {() => (
            <>
              <StartDateTicket date={ticket.FechaCreacion} />
              <TitleTicket title={ticket.Title} />
              <div className="flex flex-col gap-y-2">
                <User user={ticket.UsuarioRealizoTick} />
                <DescriptionTicket description={ticket.DescripcionProblema} />
                <Observations observations={ticket.Observaciones} />
                <EndDateTicket endDate={ticket.FechaFinalizacion} />
              </div>
              <div>
                <FunctionalitiesTicket />
              </div>
            </>
          )}
        </TicketCard>
      ))}
    </section>
  )
}

export default TicketsPage
