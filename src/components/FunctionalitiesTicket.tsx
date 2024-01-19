const FunctionalitiesTicket = (): JSX.Element => {
  return (
    <div className="flex justify-end items-center mt-5 gap-x-2">
      <button className="text-sm font-bold px-4 py-2 rounded-lg bg-neutral-600 hover:bg-blue-800 text-white transition-colors duration-300 ease-in-out">
        Editar
      </button>
      <button className="text-sm font-bold px-4 py-2 rounded-lg  bg-neutral-600 hover:bg-blue-800 text-white transition-colors duration-300 ease-in-out">
        Habilitar
      </button>
      <button className="text-sm font-bold px-4 py-2 rounded-lg border  bg-neutral-800 hover:bg-red-800 text-white transition-colors duration-300 ease-in-out">
        Finalizar
      </button>
    </div>
  )
}

export default FunctionalitiesTicket
