interface Props {
  date: Date
}

const StartDateTicket = ({ date }: Props): JSX.Element => {
  return (
    <div className="flex justify-end items-center">
      <span className="text-sm">{date.toLocaleString().split(',')[0]}</span>
    </div>
  )
}

export default StartDateTicket
