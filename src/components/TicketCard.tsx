interface Props {
  children: () => JSX.Element
  className?: string
  style?: React.CSSProperties
  state: boolean
  enabled: boolean
}

const TicketCard = ({ children, state, enabled }: Props): JSX.Element => {
  return (
    <div
      className={`bg-neutral-800 rounded-lg p-5 shadow-md shadow-neutral-800 flex flex-col justify-between ${
        state && 'border-2 border-blue-700'
      } ${!enabled && 'border border-red-900'} `}
    >
      {children()}
    </div>
  )
}

export default TicketCard
