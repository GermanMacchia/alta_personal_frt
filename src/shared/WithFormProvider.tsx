import { FC, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { AlertSnackBar } from './AlertSnackBar'

interface Props {
  children: React.ReactNode
  handleSubmit: (data: any) => any
  signIn?: boolean
}

const successMessage = 'Los datos fueron actualizados'

export const WithFormProvider: FC<Props> = ({
  children,
  handleSubmit,
  signIn,
}) => {
  const methods = useForm()
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: any) => {
    setIsError(false)
    setIsSuccess(false)
    try {
      await handleSubmit(data).then(() => {
        setIsSuccess(true)
      })
    } catch (error: any) {
      setErrorMessage(error.response.data)
      setIsError(true)
    }
  }

  return (
    <FormProvider {...methods}>
      {isError && (
        <AlertSnackBar
          isOpen={isError}
          severity='error'
          message={errorMessage}
        />
      )}
      {isSuccess && !signIn && (
        <AlertSnackBar
          isOpen={isSuccess}
          severity='success'
          message={successMessage}
        />
      )}
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
