import { WithFormProvider } from '../shared/WithFormProvider'
import { useAuthForm } from '../hooks/useAuthForm'
import { SignUp } from '../components/Signup/SignUp'
import { AlertSnackBar } from '../shared'

export const Registro = () => {
	const { signUp } = useAuthForm()

	return (
		<>
			{signUp.isSuccess && (
				<AlertSnackBar
					isOpen={signUp.isSuccess}
					severity={'success'}
					message={'Usuario Registrado'}
				/>
			)}
			<WithFormProvider
				children={<SignUp isLoading={signUp.isLoading} />}
				handleSubmit={signUp.mutateAsync}
				signIn={true}
			/>
		</>
	)
}
