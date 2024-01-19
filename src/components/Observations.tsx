interface Props {
  observations?: string
}

const Observations = ({ observations }: Props): JSX.Element => {
  return (
    <div>
      <p className="font-light">
        <span className="font-semibold">Obervaciones: </span>
        {observations}
      </p>
    </div>
  )
}

export default Observations
