import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAreas } from '../api'
import { Empleado } from '../interfaces/'
import { postEmpleado, fetchEmpleados } from '../api/apiEmpleado'

export const useEmpleadoForm = () => {
  const areaQuery = useQuery(['areas'], fetchAreas, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const altaEmpleadoMutation = useMutation((nuevoEmpleado: Empleado) =>
    postEmpleado(nuevoEmpleado)
  )

  useQuery(['empleados'], fetchEmpleados, {
    enabled: altaEmpleadoMutation.isSuccess ? true : false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return {
    areas: areaQuery.data,
    altaEmpleado: altaEmpleadoMutation,
  }
}
