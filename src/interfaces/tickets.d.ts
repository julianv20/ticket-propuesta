export interface Tickets {
  Title: string
  FechaCreacion: Date
  FechaFinalizacion: null | Date
  UsuarioGestionandoTick: string
  Estado: boolean
  UsuarioRealizoTick: string
  Habilitado: boolean
  DescripcionProblema: string
  Id: number
  Observaciones: string
}
