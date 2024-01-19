interface Props {
  title: string
}

const TitleTicket = ({ title }: Props): JSX.Element => {
  return (
    <div className="flex justify-center mb-5 ">
      <h3 className="text-xl font-black">{title}</h3>
    </div>
  )
}

export default TitleTicket
