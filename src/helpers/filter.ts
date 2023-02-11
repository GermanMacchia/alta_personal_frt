import { Empleado } from '../interfaces/'
import { Area } from '../interfaces/area.interface'

export const filter = (
  array: Empleado[],
  entrada: string,
  area: Area[] | undefined
) => {
  const regex = new RegExp(entrada.toLowerCase(), 'gi')

  const filtrarNumeros = () => {
    const aux = array.filter(
      (data: any) => regex.test(data._id) || regex.test(data.dni.toString())
    )
    return aux
  }
  const handleAreaName = (employeeArea: string) => {
    return area?.find(area => area._id === employeeArea)?.nombre ?? ''
  }

  const filtrarLetras = () => {
    const aux = array.filter(
      empl =>
        regex.test(empl.descripcion) ||
        regex.test(empl.nombre) ||
        regex.test(empl.apellido) ||
        regex.test(handleAreaName(empl.area))
    )
    return aux
  }
  if (entrada.toLowerCase() === 'dev')
    return array.filter(e => e.esDesarrollador)
  if (/\d/g.test(entrada)) return filtrarNumeros()
  if (/\D/g.test(entrada)) return filtrarLetras()
}
