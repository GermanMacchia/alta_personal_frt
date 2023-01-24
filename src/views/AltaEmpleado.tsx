import { EmpleadoForm } from '../components/EmpleadoForm/EmpleadoForm'
import { useEmpleadoForm } from '../hooks/useEmpleadoForm'
import { WithFormProvider } from '../shared'

export const AltaEmpleado = () => {
    const { altaEmpleado } = useEmpleadoForm()
    const empleadoForm = () => <EmpleadoForm isLoading={ altaEmpleado.isLoading } />

    return (
        <div>
            <WithFormProvider children={ empleadoForm() } handleSubmit={ altaEmpleado.mutateAsync } />
        </div>
    )
}
