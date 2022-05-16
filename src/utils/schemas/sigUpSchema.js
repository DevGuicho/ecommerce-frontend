import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('El nombre es obligatorio'),
  email: Yup.string()
    .email('email invalido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña es muy corta')
    .required('Contraseña obligatoria ')
})

export default SignupSchema
