import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('email invalido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña es muy corta')
    .required('Contraseña obligatoria ')
})

export default loginSchema
