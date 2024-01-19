interface Props {
  user: string
}

const User = ({ user }: Props): JSX.Element => {
  return (
    <div>
      <p>
        <span className="text-md font-semibold">Usuario:</span> {user}
      </p>
    </div>
  )
}

export default User
