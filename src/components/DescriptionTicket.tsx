interface Props {
  description: string
}

const DescriptionTicket = ({ description }: Props): JSX.Element => {
  return (
    <div>
      <p className="font-light">
        <span className="text-md font-semibold">Descripcion: </span>
        {description}
      </p>
    </div>
  )
}

export default DescriptionTicket
