import { FC, useEffect } from 'react'
import { CardEditActive } from './CardEditActive'
import { useFormContext } from 'react-hook-form'
import { capitalize } from '../../helpers'

interface Props {
  data: any
  isLoading: boolean
}

export const CardEdit: FC<Props> = ({ data, isLoading }) => {
  const { setValue } = useFormContext()

  useEffect(() => {
    setValue('_id', capitalize(data._id))
    setValue('nombre', capitalize(data.nombre))
    setValue('apellido', capitalize(data.apellido))
    setValue('descripcion', data.descripcion)
    setValue('dni', data.dni)
    setValue('fechaNac', data.fechaNac)
    setValue('area', data.area)
    setValue('esDesarrollador', data.esDesarrollador)
  }, [data])

  return <CardEditActive isLoading={isLoading} />
}
