import { type Tickets } from '../interfaces/tickets'

export const data: Tickets[] = [
  {
    Title: 'Error de inicio de sesión',
    FechaCreacion: new Date('2024-01-19T08:00:00'),
    FechaFinalizacion: new Date('2024-01-21T12:00:00'),
    UsuarioGestionandoTick: 'soporte1',
    Estado: false,
    UsuarioRealizoTick: 'admin',
    Habilitado: false,
    DescripcionProblema: 'Error al iniciar sesión',
    Id: 1,
    Observaciones:
      'Se requiere investigación adicional para identificar la causa raíz.'
  },
  {
    Title: 'Problemas de visualización en la página de productos',
    FechaCreacion: new Date('2024-01-18T10:30:00'),
    FechaFinalizacion: new Date('2024-01-20T15:45:00'),
    UsuarioGestionandoTick: 'soporte2',
    Estado: false,
    UsuarioRealizoTick: 'cliente1',
    Habilitado: false,

    DescripcionProblema: 'Problemas de visualización en la página de productos',
    Id: 2,
    Observaciones: 'Resuelto con una actualización de la interfaz de usuario.'
  },
  {
    Title: 'Fallo en el carrito de compras al agregar productos',
    FechaCreacion: new Date('2024-01-17T14:20:00'),
    FechaFinalizacion: new Date('2024-01-22T09:30:00'),
    UsuarioGestionandoTick: 'soporte3',
    Estado: false,
    UsuarioRealizoTick: 'developer',
    Habilitado: false,

    DescripcionProblema: 'Fallo en el carrito de compras al agregar productos',
    Id: 3,
    Observaciones:
      'Se está investigando el problema, se sospecha de un error en el backend.'
  },
  {
    Title: 'No se reciben correos electrónicos de confirmación de pedidos',
    FechaCreacion: new Date('2024-01-16T09:45:00'),
    FechaFinalizacion: new Date('2024-01-21T16:15:00'),
    UsuarioGestionandoTick: 'soporte1',
    Estado: false,
    UsuarioRealizoTick: 'admin',
    Habilitado: false,

    DescripcionProblema:
      'No se reciben correos electrónicos de confirmación de pedidos',
    Id: 4,
    Observaciones:
      'Posible problema con el servidor de correo, en proceso de verificación.'
  },
  {
    Title: 'Error al aplicar cupones de descuento',
    FechaCreacion: new Date('2024-01-15T12:15:00'),
    FechaFinalizacion: new Date('2024-01-18T14:30:00'),
    UsuarioGestionandoTick: 'soporte2',
    Estado: false,
    UsuarioRealizoTick: 'cliente2',
    Habilitado: false,

    DescripcionProblema: 'Error al aplicar cupones de descuento',
    Id: 5,
    Observaciones:
      'Solucionado mediante una actualización en la lógica de descuentos.'
  },
  {
    Title: 'Lentitud en la carga de la página principal',
    FechaCreacion: new Date('2024-01-14T16:30:00'),
    FechaFinalizacion: new Date('2024-01-23T12:45:00'),
    UsuarioGestionandoTick: 'soporte3',
    Estado: false,
    UsuarioRealizoTick: 'developer',
    Habilitado: true,
    DescripcionProblema: 'Lentitud en la carga de la página principal',
    Id: 6,
    Observaciones:
      'Se está optimizando el rendimiento del servidor para resolver este problema.'
  },
  {
    Title: 'Imposibilidad de cambiar la contraseña',
    FechaCreacion: new Date('2024-01-13T20:00:00'),
    FechaFinalizacion: new Date('2024-01-21T13:20:00'),
    UsuarioGestionandoTick: 'soporte1',
    Estado: false,
    UsuarioRealizoTick: 'admin',
    Habilitado: true,
    DescripcionProblema: 'Imposibilidad de cambiar la contraseña',
    Id: 7,
    Observaciones:
      'Se está trabajando en una solución para permitir cambios de contraseña sin problemas.'
  },
  {
    Title: 'Problemas al realizar pagos con tarjeta de crédito',
    FechaCreacion: new Date('2024-01-12T11:45:00'),
    FechaFinalizacion: new Date('2024-01-18T17:30:00'),
    UsuarioGestionandoTick: 'soporte2',
    Estado: false,
    UsuarioRealizoTick: 'cliente3',
    Habilitado: true,
    DescripcionProblema: 'Problemas al realizar pagos con tarjeta de crédito',
    Id: 8,
    Observaciones: 'Se solucionó con una actualización de la pasarela de pago.'
  },
  {
    Title: 'Fallo en la búsqueda de productos',
    FechaCreacion: new Date('2024-01-11T09:30:00'),
    FechaFinalizacion: new Date('2024-01-21T18:45:00'),
    UsuarioGestionandoTick: 'soporte3',
    Estado: false,
    UsuarioRealizoTick: 'developer',
    Habilitado: true,
    DescripcionProblema: 'Fallo en la búsqueda de productos',
    Id: 9,
    Observaciones:
      'Se investiga el problema relacionado con el motor de búsqueda.'
  },
  {
    Title: 'No se aplican correctamente los filtros de búsqueda',
    FechaCreacion: new Date('2024-01-10T14:55:00'),
    FechaFinalizacion: new Date('2024-01-20T19:00:00'),
    UsuarioGestionandoTick: 'soporte1',
    Estado: false,
    UsuarioRealizoTick: 'admin',
    Habilitado: true,
    DescripcionProblema: 'No se aplican correctamente los filtros de búsqueda',
    Id: 10,
    Observaciones:
      'En proceso de desarrollo para mejorar la funcionalidad de los filtros.'
  },
  {
    Title: 'Error al cargar imágenes de productos',
    FechaCreacion: new Date('2024-01-09T17:10:00'),
    FechaFinalizacion: new Date('2024-01-22T10:15:00'),
    UsuarioGestionandoTick: 'soporte2',
    Estado: false,
    UsuarioRealizoTick: 'cliente4',
    Habilitado: true,
    DescripcionProblema: 'Error al cargar imágenes de productos',
    Id: 11,
    Observaciones:
      'Resuelto optimizando la carga de imágenes desde el servidor.'
  },
  {
    Title: 'No se reciben notificaciones de nuevos mensajes',
    FechaCreacion: new Date('2024-01-08T13:40:00'),
    FechaFinalizacion: new Date('2024-01-20T22:30:00'),
    UsuarioGestionandoTick: 'soporte3',
    Estado: true,
    UsuarioRealizoTick: 'developer',
    Habilitado: false,
    DescripcionProblema: 'No se reciben notificaciones de nuevos mensajes',
    Id: 12,
    Observaciones:
      'Investigando la integración con servicios de notificación para resolver este problema.'
  },
  {
    Title: 'Problemas con la navegación en dispositivos móviles',
    FechaCreacion: new Date('2024-01-07T19:25:00'),
    FechaFinalizacion: new Date('2024-01-21T23:45:00'),
    UsuarioGestionandoTick: 'soporte1',
    Estado: true,
    UsuarioRealizoTick: 'cliente5',
    Habilitado: true,
    DescripcionProblema: 'Problemas con la navegación en dispositivos móviles',
    Id: 13,
    Observaciones:
      'Solucionado mediante una actualización del diseño responsivo.'
  },
  {
    Title: 'Error al realizar cambios en la configuración de la cuenta',
    FechaCreacion: new Date('2024-01-06T22:50:00'),
    FechaFinalizacion: new Date('2024-01-19T02:15:00'),
    UsuarioGestionandoTick: 'soporte2',
    Estado: true,
    UsuarioRealizoTick: 'developer',
    Habilitado: true,
    DescripcionProblema:
      'Error al realizar cambios en la configuración de la cuenta',
    Id: 14,
    Observaciones:
      'Se está desarrollando una solución para permitir cambios de configuración sin errores.'
  },
  {
    Title: 'Problemas al cargar la página de contacto',
    FechaCreacion: new Date('2024-01-05T16:00:00'),
    FechaFinalizacion: new Date('2024-01-20T05:30:00'),
    UsuarioGestionandoTick: 'soporte3',
    Estado: true,
    UsuarioRealizoTick: 'admin',
    Habilitado: true,
    DescripcionProblema: 'Problemas al cargar la página de contacto',
    Id: 15,
    Observaciones:
      'En proceso de depuración para mejorar la carga de la página de contacto.'
  }
]
