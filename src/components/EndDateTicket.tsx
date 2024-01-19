interface Props {
  endDate: Date | null
}

const EndDateTicket = ({ endDate }: Props): JSX.Element => {
  return (
    <div>
      <p className="font-semibold">
        Finalizacion: <span>{endDate?.toLocaleString().split(',')[0]}</span>
      </p>
    </div>
  )
}

export default EndDateTicket
