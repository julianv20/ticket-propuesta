interface Props {
  children: () => JSX.Element
  className?: string
  style?: React.CSSProperties
  state: boolean
  enabled: boolean
}

const TicketCard = ({ children, state, enabled }: Props): JSX.Element => {
  return (
    <div className="relative bg-neutral-800 rounded-lg p-5 shadow-md shadow-neutral-800 flex flex-col justify-between">
      <div
        className={`h-3 w-5 rounded-full absolute    ${
          state && enabled ? 'bg-2 bg-green-700' : ''
        } 
        ${!state && enabled ? 'bg-2 bg-yellow-600' : ''}
        ${!enabled && 'bg bg-red-900'}`}
      ></div>
      {children()}
    </div>
  )
}

export default TicketCard
