import { SignIn } from '../components/SignIn'
import { WithFormProvider } from '../shared'
import { useAuthForm } from '../hooks'

export const Login = () => {
  const { signIn } = useAuthForm()

  return (
    <WithFormProvider
      children={<SignIn isLoading={signIn.isLoading} />}
      handleSubmit={signIn.mutateAsync}
      signIn={true}
    />
  )
}
